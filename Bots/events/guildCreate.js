const { EmbedBuilder, Collection, PermissionsBitField } = require('discord.js')
const ms = require('ms');

const config =	{"messages": {
	"COOLDOWN_MESSAGE": "You are on `<duration>` cooldown!"
}
}


const cooldown = new Collection();
module.exports.run = async (client,guild) => {

	
	if(guild.id !== client.guildid) {
		await client.guilds.cache.get(message.guild.id).leave();
	}
}