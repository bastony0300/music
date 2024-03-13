
const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ActivityType } = require("discord.js");
const {  editbot } = require("../../../../models/user");

module.exports = {
    name: 'set-status',
    description: "change bot's activity",
  
    userPerms: ["SendMessages"],
    botPerms: ["SendMessages"],
    run: async (client, message,args) => {
        if (client.owner !== message.author.id || !message.content.includes(client.user.id)) return;

if(!args) return message.reply({content:"> **You should type activity**"});
var row = new ActionRowBuilder()
.setComponents(
    new StringSelectMenuBuilder()
    .setCustomId("activity")
    .setPlaceholder("Choose the activity")
    .setOptions(
        {label:"Playing",value:`${ActivityType.Playing}`},
        {label:"Listening",value:`${ActivityType.Listening}`},
        {label:"Competing",value:`${ActivityType.Competing}`},
        {label:"Watching",value:`${ActivityType.Watching}`},
        {label:"Streaming",value:`${ActivityType.Streaming}`},
        {label:"Custom",value:`${ActivityType.Custom}`},
    )
)
message.reply({components:[row]}).then((msg) => {

    var collecter = msg.createMessageComponentCollector({filter: u=> u.user.id == message.author.id,max:1})

    collecter.on("collect", async col => {
        if(col.values[0] == `${ActivityType.Streaming}`) {
            client.user.setActivity({name:args,type:Number(col.values[0]),url:"https://twitch.tv/uniqx-services"})
        }else {
            client.user.setActivity({name:args,type:Number(col.values[0])})

        }
        await editbot(client.owner, client.user.id, col.values[0], "status")
        await msg.edit({content:"> **Done !!**",components:[]})
        client.statuss = col.values[0];
        
    })
})
      }
    }