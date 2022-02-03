const CoinGecko = require('coingecko-api');

const client = new CoinGecko();

module.exports = {
	async getCoin(coin = 'bitcoin') {
		const data = await client.simple.price({
			ids: coin,
			vs_currencies: ['usd', 'brl'],
		});
		return data.data[coin];
	},
};
