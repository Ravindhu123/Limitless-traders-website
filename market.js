document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("crypto-table");

    async function fetchMarketData() {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
        const data = await response.json();

        data.forEach(coin => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${coin.name} (${coin.symbol.toUpperCase()})</td>
                <td>$${coin.current_price.toLocaleString()}</td>
                <td style="color: ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'};">
                    ${coin.price_change_percentage_24h.toFixed(2)}%
                </td>
            `;
            table.appendChild(row);
        });
    }

    fetchMarketData();
});
