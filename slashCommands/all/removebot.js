var DatabasModel = require("../../models/user")
var config = require("../../config.json")
const {openBot} = require("../../Functions/OpenBot/open")
const {ButtonStyle , ActionRowBuilder , ButtonBuilder} = require("discord.js")
 module.exports = {
 	name: 'remove-bot',
 	description: "Check bot's ping.",
 
 	userPerms: [],
 	botPerms: [],
    options:[
     
        {name:"botid",description:"-",type:3,required:true},
       
    ],
 	run: async (client, message) => {
        if(!config.dev.includes(message.user.id)) return;
       
        var botid = message.options.getString("botid")
       
	message.reply({content:"Waiting ..",ephemeral:true}).then((m) => {


        var coins = DatabasModel.removebot(botid).then(async (coins) => {
            
              
              await  m.edit({ content: `> **Done Removed Bot ${botid}**` })
            }).catch((err) => {
                console.log(err);
                  m.edit({ content: `${err}` })

            })
            
      
    })
	}


};