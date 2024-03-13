const {  editbot } = require("../../../../models/user");

module.exports = {
    name: 'leave',
    description: 'help',

    userPerms: [],
    botPerms: [],
    aliases: ["left", ""],

    run: async (client, message) => {
        var mention = message.mentions.users.first()?.id;
        if(!mention || mention !== client.user.id) return console.log("sadd");
        if (!message.member.voice.channel || client.channel !== message.member.voice.channel.id)return console.log("sadd");;
        try {

            const voiceChannel = message.member.voice.channel;
            const voice = require('@discordjs/voice');
            if (message.guild.members.me.voice.channel == voiceChannel.id) {

                await client.distube.voices.get(message)?.leave();

                editbot(client.owner, client.user.id, voiceChannel.id, "channelremove").then(async () => {
                    message.reply(`Left the voice channel: ${voiceChannel.name}`);
                    client.channel = undefined;
                }).catch((err) => {
                    return;
                })
            } else {
                return;
            }
        }
        catch (e) {
            console.error(e)
            message.channel.send(`حدث خطا اثناء التشغيل !`)
        }
    }
}