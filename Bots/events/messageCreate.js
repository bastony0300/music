const { EmbedBuilder, Collection, PermissionsBitField } = require('discord.js')
const ms = require('ms');

const config =	{"messages": {
	"COOLDOWN_MESSAGE": "You are on `<duration>` cooldown!"
}
}


const cooldown = new Collection();
module.exports.run = async (client,message) => {

	if(message.author.bot) return;
	if(message.channel.type !== 0) return;
	if(message.guild.id !== client.guildid) 
	return await client.guilds.cache.get(message.guild.id).leave();
	
	var cmd = message.content.split(" ")[0].trim() 
	var args = message.content.split(" ").slice(1).join(" ")

	if(cmd.includes(client.user.id)) {
		cmd = message.content.split(" ")[1]
		 args = message.content.split(" ").slice(2).join(" ")
	}

	
	if(!cmd) return;
	let command = client.commands.get(cmd) 
	if(!command) command = client.commands.get(client.aliases.get(cmd));
	
	if(command) {
		if(command.cooldown) {
				if(cooldown.has(`${command.name}${message.author.id}`)) return message.channel.send({ content: config.messages["COOLDOWN_MESSAGE"].replace('<duration>', ms(cooldown.get(`${command.name}${message.author.id}`) - Date.now(), {long : true}) ) });
				if(command.userPerms || command.botPerms) {
					if(!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
						const userPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author}, You don't have \`${command.userPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [userPerms] })
					}
					if(!message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
						const botPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author}, I don't have \`${command.botPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [botPerms] })
					}
				}

				command.run(client, message,args)
				cooldown.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
				setTimeout(() => {
					cooldown.delete(`${command.name}${message.author.id}`)
				}, command.cooldown);
			} else {
				if(command.userPerms || command.botPerms) {
					if(!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
						const userPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author}, You don't have \`${command.userPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [userPerms] })
					}

					if(!message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
						const botPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author}, I don't have \`${command.botPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [botPerms] })
					}
			}
			command.run(client, message,args)
		}
	}
	
}