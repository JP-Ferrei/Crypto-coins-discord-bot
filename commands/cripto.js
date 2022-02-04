const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const service = require('../services/CoinGeckoService');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cripto')
		.setDescription('returns the crypto coin value')
		.addStringOption((option) =>
			option.setName('coin').setDescription('crypto coin').setRequired(true)
		)
		.addStringOption((option) =>
		option.setName('currencies').setDescription('In real life currency CSV style exp: usd,brl').setRequired(true)
		),

	async execute(interaction) {
		const coin = interaction.options.getString('coin');
		const currencies = interaction.options.getString('currencies');
	
		const data = await service.getCoin({coin, currencies});
		let returnString = `Coin: ${coin}\n`
		for(const [key, value] of Object.entries(data)){
			returnString += `${key}: ${value}\n`
		}
		await interaction.reply(
			returnString
		);
	},
};
