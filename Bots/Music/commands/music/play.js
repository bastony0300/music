const { ApplicationCommand, ApplicationCommandType } = require("discord.js");

module.exports = {
    name: 'play',
    description: 'help',
    userPerms: [],
    botPerms: [],
    aliases: ["p", "شغل", "ش"],

    run: async (client, message) => {
        try {
            if (!message.member.voice.channel || !client.channel ||  client.channel !== message.member.voice.channel.id)return;

            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) {
                return message.channel.send(':x: | Please join a voice channel first.');
            }

            const string = message.content.split(" ").slice(1).join(" ");
            if (!string) return message.channel.send(':x: | Please enter a song URL or query to search.');

            // Assuming the bot is already in a voice channel, just queue the song
            const queue = client.distube.getQueue(message);
            console.log(queue);
            client.distube.play(voiceChannel, string, {
                member: message.member,
                textChannel: message.channel,
                message
            });

            // Optionally, you can inform the user that the song has been added to the queue
            message.channel.send(`<a:81:1189554734965727372> | 𝐒𝐨𝐧𝐠 𝐚𝐝𝐝𝐞𝐝 𝐭𝐨 𝐭𝐡𝐞 𝐪𝐮𝐞𝐮𝐞: ${string}`);
        } catch (e) {
            console.error(e);
            message.channel.send('An error occurred while playing the song!');
        }
    }
}