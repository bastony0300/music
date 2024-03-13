var DatabasModel = require("../../models/user")
var config = require("../../config.json")

const {ButtonStyle , ActionRowBuilder , ButtonBuilder, TextInputBuilder , TextInputStyle,ModalBuilder} = require("discord.js")
 module.exports = {
 	name: 'add-bot',
 	description: "Check bot's ping.",
 
 	userPerms: [],
 	botPerms: [],
 
 	run: async (client, interaction) => {
        if(!config.dev.includes(interaction.user.id)) return;
        var modal = new ModalBuilder()
            .setTitle("اضافه بوت بوت")
            .setCustomId(`maker`)


        var row1 = new ActionRowBuilder()
            .setComponents(
                new TextInputBuilder()
                    .setCustomId("token")
                    .setLabel("Enter token for your bot")
                    .setPlaceholder("Please enter the token")
                    .setRequired(true)
                    .setMaxLength(500)
                    .setMinLength(5)
                    .setStyle(TextInputStyle.Paragraph)
            )
        var row2 = new ActionRowBuilder()
            .setComponents(
                new TextInputBuilder()
                    .setCustomId("guildid")
                    .setLabel("Enter guildid for your bot")
                    .setPlaceholder("Enter the guildid")
                    .setRequired(true)
                    .setMaxLength(40)
                    .setMinLength(5)
                    .setStyle(TextInputStyle.Short)
            )

        var row4 = new ActionRowBuilder()
            .setComponents(
                new TextInputBuilder()
                    .setCustomId("botid")
                    .setLabel("botid")
                    .setPlaceholder("enter bot's id")
                    .setRequired(true)
                    .setMaxLength(30)
                    .setMinLength(10)
                    .setStyle(TextInputStyle.Short)
            )

            var row5 = new ActionRowBuilder()
            .setComponents(
                new TextInputBuilder()
                    .setCustomId("owner")
                    .setLabel("owner")
                    .setPlaceholder("enter the owner's id")
                    .setRequired(true)
                    .setMaxLength(40)
                    .setMinLength(10)
                    .setStyle(TextInputStyle.Short)
            )
            var row3 = new ActionRowBuilder()
            .setComponents(
                new TextInputBuilder()
                    .setCustomId("days")
                    .setLabel("days")
                    .setPlaceholder("enter the days")
                    .setRequired(true)
                    .setMaxLength(3)
                    .setMinLength(1)
                    .setStyle(TextInputStyle.Short)
            )
        modal.addComponents(row5,row4, row2, row1,row3)
        interaction.showModal(modal)
      
	}


};