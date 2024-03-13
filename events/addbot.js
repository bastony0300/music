var client = require("..");
const { openBot } = require("../Functions/OpenBot/open");

var config = require("../config.json")


var asd = require("../models/user");


const { EmbedBuilder, ModalBuilder, ActionRow, ActionRowBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle } = require("discord.js");






client.on("interactionCreate", async interaction => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId == "maker") {
        try {


            const BotId = interaction.fields.getTextInputValue("botid");
            const Token = interaction.fields.getTextInputValue("token");
            const Prefix = interaction.fields.getTextInputValue("guildid");
            const Owner = interaction.fields.getTextInputValue("owner");
            const Days = +interaction.fields.getTextInputValue("days");
            const Kind = "Music"

            interaction.reply({ content: `**Waiting ...**`, ephemeral: true }).then(async (message) => {
                console.log(message)
                await asd.checkTokenBot(BotId).then(async (s) => {
                    console.log(s)
                    asd.addbot(Owner, Token, BotId, Prefix, Owner, Kind, Days).then(async () => {
	console.log("done kolt done")



                    await openBot(Token, Prefix, Kind, Owner,Days);

                    var Embed = new EmbedBuilder()
                        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
                        .setColor("Random")
                        .setTitle("You were added bot")
                        .setTimestamp()
                        .setFields(
                            { name: "Owner", value: `${Owner}`, inline: false },
                            { name: "BotId", value: `${BotId}`, inline: false },
                        )
                    var Buttons = new ActionRowBuilder()
                        .setComponents(
                            new ButtonBuilder()
                                .setLabel("Invite")
                                .setURL(`https://discord.com/api/oauth2/authorize?client_id=${BotId}&permissions=8&scope=bot%20applications.commands`)
                                .setStyle(ButtonStyle.Link)
                        )

                    await interaction.user.send({ embeds: [Embed], components: [Buttons] })


                    await message.edit({ content: "**Done !!**" })








                }).catch((err) => {
                         console.log(err);
                    message.edit({ content: `${err}` })
                })
                

            }).catch((err) => {
                console.log(err);
                message.edit({content:`${err}`})
            })


            }).catch((err) => {
                 console.log(err);
                message.edit({ content: `${err}` })
            })

            


        } catch (error) {
            console.log(error);
            interaction.followUp({ content: `${error.message}`, ephemeral: true })
        }
    }

})