const { ApplicationCommand, ApplicationCommandType } = require("discord.js");

module.exports = {
  name: 'resume',
  description: 'help',

 userPerms:[],
 botPerms:[],

 aliases:["res",""],
  run: async (client, message) => {
    
    if (!message.member.voice.channel || !client.channel ||  client.channel !== message.member.voice.channel.id)return;

        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send(`I'm not singing now to stop !`)
        
    if (!queue.paused) {
      return message.reply(`الموسيقى شغالة بالفعل !`)
    }
    queue.resume()
    message.channel.send('تم  تشغيل الاغاني بنجاح !')
        }
        catch (e) {
            console.error(e)
            message.channel.send(`حدث خطا اثناء التشغيل !`)
        }
  }
  }
