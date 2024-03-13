const { ApplicationCommand, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: 'volume',
  description: 'help',

 userPerms:[],
 botPerms:[],

 aliases:["vo","صوت"],
  run: async (client, message,args) => {
    
    if (!message.member.voice.channel || !client.channel ||  client.channel !== message.member.voice.channel.id)return;
    try {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`I'm not singing now to stop !`)
        const volume = parseInt(args[1])
        if (isNaN(volume)) return message.channel.send(` Please enter a valid volume!`)
        if (volume > 200) return message.reply({ content: 'Volume must not exceed 200% !' })
        queue.setVolume(volume)
        message.channel.send(`Done set the volume to \`${volume}\``)
    }
    catch (e) {
        console.error(e)
        message.channel.send(`حدث خطا اثناء التشغيل !`)
    }
  }
}