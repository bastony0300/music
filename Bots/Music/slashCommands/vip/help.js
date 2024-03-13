const { ApplicationCommand, ApplicationCommandType, EmbedBuilder } = require("discord.js");


module.exports = {
  name: 'help',
  description: 'help',

 userPerms:[],
 botPerms:[],


  run: async (client, message) => {
    var embed = new EmbedBuilder()
    .setDescription(`
    # **Music Commands**
    \`play\` => play a song
    \`stop\` => stop a song
    \`pause\` => pause a song
    \`resume\` => resume a song
    \`volume\` => set volume for the song
    \`repeat\` => repeat the song
    \`autoplay\` => autoplay songs
    \`nowplaying\` => song are playing
    \`skip\` => skip a song

    # **Owner Commands**
    > /set-guildid => change guildid for the bot
    > /vip-restart => restart the bot
    > set-name => set name for the bot
    > set-avatar => set avatar for the bot
    > set-status => set status for the bot
    > vip => show info for the bot
    > vip-transfer => transfer bot's owner to another owner


    `)
    .setTitle("Help List")
    .setColor("Random")
    .setTimestamp()
    .setFooter({text:"𝐃𝐄𝐕 𝐁𝐘 𝐁𝐀𝐒𝐓𝐎𝐍𝐘",iconURL:message.guild.iconURL()})
    
    message.reply({
      embeds:[embed]  

    })
  }
}