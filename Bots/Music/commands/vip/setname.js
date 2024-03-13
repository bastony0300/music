
const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'set-name',
    description: "change bot's avatar",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    run: async (client, message , args) => {
      if (client.owner !== message.author.id || !message.content.includes(client.user.id)) return;
     
      message.reply({content:"**Changing Name ...**"}).then((m) => {
        client.user.edit({username:args}).then(() => {
            m.edit({content:"**Done :-**"})
        }).catch((err) => {
            m.edit({content:`${err.message}`})
        })
      })
    
      }
    }