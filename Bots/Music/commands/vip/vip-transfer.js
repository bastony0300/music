
const { EmbedBuilder } = require("discord.js");
const { transferOwner } = require("../../../../models/user");

module.exports = {
    name: 'vip-transfer',
    description: "transfer owner of the bot to someone",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    run: async (client, message) => {
      if (client.owner !== message.author.id || !message.content.includes(client.user.id)) return;
      var args = message.mentions.users.filter((m) => m.id !== client.user.id).first()?.id;
      console.log(args);
      if(!args) return;
      transferOwner(client.user.id,message.author.id,args.id).then(() => {
        message.reply(`> **The bot owner transferd to ${args}**`)
        client.owner = args.id
      }).catch((err) => {
        message.reply({content:`${err}`})
      })
     
    
      }
    }