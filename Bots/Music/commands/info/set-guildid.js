
const { EmbedBuilder } = require("discord.js");
const {  editbot } = require("../../../../models/user");


module.exports = {
    name: 'set-guildid',
    description: "change bot's guildid",

    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    run: async (client, message) => {
        if (client.owner !== message.author.id || !message.content.includes(client.user.id)) return;
        var args = message.content.split(" ")[1]
        var { guildid } = client;
        if(args == null) {
            message.reply({content:`The guildid : \`${guildid}\``})
        }else {

       
        message.reply({ content: "Changing guildid ..." }).then((m) => {
            editbot(client.owner, client.user.id, args, "guildid").then(() => {
                client.guildid = args;
                m.edit({content:"**Done :-**"})
            }).catch((err) => {
                m.edit({ content: `${err}` })
            })
        })
    }

    }
}