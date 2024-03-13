const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
var Discord = require("discord.js")
var mongoose = require("mongoose")

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] ,
	
});

const fs = require('fs');
const config = require('./config.json');


client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;

module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});


mongoose.connect(config.mongoose).then(() => {
	
	console.log("connected to db");
	
}).catch((err) => {
	console.log(err);
})

client.login(config.token).then(() => {

     require("./Bots/Music/index")
})

client.on("error" , err =>{
	console.log(err)
})
client.on("shardError" , err => {
	console.log(err)
})
client.on("webhookUpdate" , err => {
	console.log(err)
})
process.on("exit" , err => {
	console.log(err)
})
process.on("beforeExit" , err => {
	console.log(err)
})
process.on("uncaughtException" , err => {
	console.log(err)
})
process.on("uncaughtExceptionMonitor", err => {
	console.log(err)
})
process.on("rejectionHandled", err => {
	console.log(err)
})