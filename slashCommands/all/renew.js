var DatabasModel = require("../../models/user")
var config = require("../../config.json")
const {openBot} = require("../../Functions/OpenBot/open")
const {ButtonStyle , ActionRowBuilder , ButtonBuilder} = require("discord.js")
 module.exports = {
 	name: 'renew-bot',
 	description: "Check bot's ping.",
 
 	userPerms: [],
 	botPerms: [],
    options:[
     
        {name:"botid",description:"-",type:3,required:true},
       {name:"days",description:"-",type:10,required:true},
    ],
 	run: async (client, message) => {
        if(!config.dev.includes(message.user.id)) return;
       
        var botid = message.options.getString("botid")
        var days = message.options.getNumber("days")
	message.reply({content:"**Waiting ..**",ephemeral:true}).then((m) => {


        var coins = DatabasModel.editbot(client.owner,botid,days,"days").then(async (coins) => {
            
              
              await  m.edit({ content: `> **Done Renewd the Bot ${botid}**` })
            }).catch((err) => {
                console.log(err);
                  m.edit({ content: `${err}` })

            })
            
      
    })
	}


};