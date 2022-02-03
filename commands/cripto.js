const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const service = require('../services/CoinGeckoService');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cripto')
		.setDescription('retorna valor da cripto moeda informada')
		.addStringOption((option) =>
			option.setName('coin').setDescription('teste').setRequired(true)
		),

	async execute(interaction) {
		// await interaction.({
		// 	content: interaction.options.getStringOption('coin'),
		// });
		const coin = interaction.options.getString('coin');
		const data = await service.getCoin(coin);
		await interaction.reply(
			`moeda: ${coin} \n usd: ${data.usd} \n brl: ${data.brl}`
		);
	},
};
