var DatabasModel = require("../../models/user") // return coins
const { MessageEmbed, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, BaseSelectMenuComponent } = require('discord.js')
var config = require("../../config.json")
var Discord = require("discord.js")
module.exports = {
	name: 'ping',
	description: "Check bot's ping.",

	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
       if(!config.dev.includes(message.author.id)) return;
      message.delete().then(() => {
          message.channel.send({content:`Pong ${client.ws.ping}ms !!`})
      })
	}
};
