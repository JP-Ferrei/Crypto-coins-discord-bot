const CoinGecko = require('coingecko-api');

const client = new CoinGecko();

module.exports = {
	async getCoin({coin, currencies}) {
		coin = coin.toLowerCase();
		currencies = currencies.toLowerCase();
		let currencyArray = [];
		if ( currencies.includes(',') ){
			currencyArray = currencies.split(',')
		}

		const data = await client.simple.price({
			ids: coin,
			vs_currencies: currencyArray.length === 0 ? currencies : currencyArray,
		});
		return data.data[coin];
	},
};
