const { ApplicationCommand, ApplicationCommandType, ChannelType } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice")
const {  editbot } = require("../../../../models/user");

module.exports = {
  name: 'join',
  description: 'help',

  userPerms: [],
  botPerms: [],
  aliases: ["j", ""],

  run: async (client, message) => {
    var mention = message.mentions.users.first()?.id;
    if(!mention || mention !== client.user.id) return console.log("sadd");


    if (!message.member.voice.channel || client.channel && client.channel !==  message.member.voice.channel.id && typeof client.channel == "string")return console.log("sad");;
    try {
      var args = message.member.voice.channel.id
   
      var channel = message.guild.channels.cache.get(args)
      if (!channel || channel.type !== ChannelType.GuildVoice) return;
      await client.distube.voices.join(channel)

      editbot(client.owner, client.user.id, args, "channeladd").then(async () => {
        client.channel = args;
        message.reply({ content: "**Done :-**" })
      }).catch((err) => {
        message.reply({ content: `${err}` })
      })

    }
    catch (e) {
      console.error(e)
      message.channel.send(`حدث خطا اثناء التشغيل !`)
    }
  }
}