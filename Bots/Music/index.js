const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
var Discord = require("discord.js")
var Sche = require("../../models/user")


const ms = require("ms");


Sche.returnTokens("Music").then((res) => {

    res.forEach((ob) => {
      if(!ob || !ob.owner) return;
        const client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildVoiceStates
            ],
            partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
        });



        const fs = require('fs');

        client.commands = new Collection()
        client.aliases = new Collection()
        client.slashCommands = new Collection();
        client.buttons = new Collection();
        client.owner = ob.owner;
        client.guildid = ob.guildid;
        client.channel = ob.channel ? ob.channel : null
        client.statuss = ob.statuss ? ob.statuss : null
        client.kind = ob.kind
        client.DateNow = ob.DateNow
        client.days = ob.days
        const { DisTube } = require('distube')

        const { SpotifyPlugin } = require('@distube/spotify')
        const { SoundCloudPlugin } = require('@distube/soundcloud')
        const { YtDlpPlugin } = require('@distube/yt-dlp')

        client.distube = new DisTube(client, {
            leaveOnStop: false,
            emitNewSongOnly: true,
            leaveOnEmpty: false,
            
            emitAddSongWhenCreatingQueue: false,
            emitAddListWhenCreatingQueue: true,



            youtubeCookie: [

                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "__Secure-1PAPISID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "1nuKy_v6TSjZ9nDL/AHQeaKuOCtebLasmi",
                    "id": 1
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-1PSID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "bwgGigD3FYWfz2GGfFXH6JHMQOKl6oNMBUQxV_F8c7FV6j2uvYPw4L1NnMKvudydFUOLeA.",
                    "id": 2
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1728196049,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-1PSIDCC",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "ACA-OxM24aD1lDQCzPF9R9FJupOOozcxpSVdAGzevwilzCHxbtToVfCJq-JqOB-4Q0BYM7PGGA",
                    "id": 3
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1728195997,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-1PSIDTS",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "sidts-CjIB3e41hdjzrFVIo-pqzs6Je0ZYsdGPRa7Q5R2N57605iaFgU1tZQa7cRoSkJ2hDVTzYRAA",
                    "id": 4
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "__Secure-3PAPISID",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "1nuKy_v6TSjZ9nDL/AHQeaKuOCtebLasmi",
                    "id": 5
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-3PSID",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "bwgGigD3FYWfz2GGfFXH6JHMQOKl6oNMBUQxV_F8c7FV6j2u385HMpmwCO0tRuEZxhjGeQ.",
                    "id": 6
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1728196049,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-3PSIDCC",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "ACA-OxOfQi29ka5GuBD9NmgYnYYaYLEGBRZt5gMal9l2-RFUJdv4ngAqHSFhiQoXAz4D2Cft",
                    "id": 7
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1728195997,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-3PSIDTS",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "sidts-CjIB3e41hdjzrFVIo-pqzs6Je0ZYsdGPRa7Q5R2N57605iaFgU1tZQa7cRoSkJ2hDVTzYRAA",
                    "id": 8
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "APISID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "LP0J7YhRtClxqzhY/Ac6ufhc-qm-2Ik_St",
                    "id": 9
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1696660407,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "GPS",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "1",
                    "id": 10
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "HSID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "AtDmIk9wwYxwFyyiZ",
                    "id": 11
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731220040,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "LOGIN_INFO",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "AFmmF2swRAIgCxpljhhOi778O65Q5ZVti0gbVeBpJQX7-ko8pLMv8KsCIF11aUAIvRH_2_53-vO5W1n9M1ykcrGB4XAwPPcD1Bd6:QUQ3MjNmemtWVEhaQkNYZXlXVmYwdGdzeWVtai12cVYzZ3MxZlNJbjZ0WUVMM0Q4QmV4TkREUGJDMVFFclN4VzNYWDZyMURDbXV6RlZyVWNWSEZpRU9wT1k1dXkzSF9zS01pczVKMGliaFB6VUhyQ2R4QVJjOWpPWXFYWXRRZWtSZEpUcWxoRHdXRTgybmtVTU8wMURYSGxiUlNicTY1Tmh3",
                    "id": 12
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731220048,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "PREF",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "tz=Africa.Cairo",
                    "id": 13
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "SAPISID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "1nuKy_v6TSjZ9nDL/AHQeaKuOCtebLasmi",
                    "id": 14
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "SID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "bwgGigD3FYWfz2GGfFXH6JHMQOKl6oNMBUQxV_F8c7FV6j2u1ICZwz2P-qbVE-xH6CmUxw.",
                    "id": 15
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1728196049,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "SIDCC",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "ACA-OxNS_08dAd9VlrYqXiUOUKa55yrMFiBycDsBcQhs4uTD5irXlI6zPPGTUSYsfW1rfrriWQ",
                    "id": 16
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1731219997,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "SSID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "Au1FevPQs8VjF3mL8",
                    "id": 17
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1707927868,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "VISITOR_INFO1_LIVE",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "RgUD_kDT1Ko",
                    "id": 18
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1709539804,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "VISITOR_PRIVACY_METADATA",
                    "path": "/",
                    "sameSite": "lax",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "CgJFRxICGgA%3D",
                    "id": 19
                },
                {
                    "domain": ".youtube.com",
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "YSC",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": true,
                    "storeId": "0",
                    "value": "ZtsW9kglvkE",
                    "id": 20
                }
            ],


            plugins: [
                new SpotifyPlugin({
                    parallel: true,
                    emitEventsAfterFetching: false,
                    api: {


                        "clientSecret": "GJmyWmLhVqXkVhYa39xCzc_mU1w1NW4S",
                        "clientId": "GJmyWmLhVqXkVhYa39xCzc_mU1w1NW4S"


                    }
                }),
                new SoundCloudPlugin(),
                new YtDlpPlugin()

            ]
        })
        const status = queue =>
            `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This Song') : 'Off'
            }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
        client.distube
            .on('playSong', (queue, song) => {



                var embed = new Discord.EmbedBuilder()
                    .setImage(song.thumbnail)
                    .setColor("#a9a9a9")
                    .setTitle(`${client.user.username}'s Queue`)
                    .setFields({ name: "- User", value: `${song.user}` })
                    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL() })
                    .setThumbnail(song.thumbnail)
                    .setDescription(song.name)
                    .setFooter({ text: "𝐃𝐄𝐕 𝐁𝐘 𝐁𝐀𝐒𝐓𝐎𝐍𝐘" })

                var row = new Discord.ActionRowBuilder()
                    .setComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("stop")
                            .setLabel("𝐒𝐓𝐎𝐏")
                            .setEmoji("<:stop:1171416522514759730>")
                            .setStyle(Discord.ButtonStyle.Secondary),
                        new Discord.ButtonBuilder()
                            .setCustomId("skip")
                            .setLabel("𝐒𝐊𝐈𝐏")
                            .setEmoji("<:skip:1171416519234834512>")
                            .setStyle(Discord.ButtonStyle.Secondary),
                        new Discord.ButtonBuilder()
                            .setCustomId("loop")
                            .setLabel("𝐋𝐎𝐎𝐏")
                            .setEmoji("<:repet:1171416503204196352>")
                            .setStyle(Discord.ButtonStyle.Secondary),
                        new Discord.ButtonBuilder()
                            .setCustomId("pause")
                            .setLabel("𝐏𝐀𝐔𝐒𝐄")
                            .setEmoji("<:pause:1171416494576513176>")
                            .setStyle(Discord.ButtonStyle.Secondary),
                        new Discord.ButtonBuilder()
                            .setCustomId("resume")
                            .setLabel("𝐑𝐄𝐒𝐔𝐌𝐄")
                            .setEmoji("<:resum:1171416490088599552>")
                            .setStyle(Discord.ButtonStyle.Secondary),
                    )
                var row2 = new Discord.ActionRowBuilder()
                    .setComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("autoplay")
                            .setLabel("𝐀𝐔𝐓𝐎𝐏𝐋𝐀𝐘")
                            .setEmoji("<:autoplay:1171416483558072350>")
                            .setStyle(Discord.ButtonStyle.Secondary),
                    )
                queue.textChannel.send({ embeds: [embed], content: `<a:1_:1189245342114394164> - 𝐏𝐋𝐀𝐘𝐈𝐍𝐆  **${song.name}** - \`${song.formattedDuration}\``, components: [row, row2] }).then((m) => {



                    var collecter = m.createMessageComponentCollector({ filter: u => u.user.id == song.member.id, time: ms(`${song.duration}s`) })
                    collecter.on("end", async col => {
                        console.log("end")
                        console.log(typeof col)
                        m.delete().catch((err) => {
                            err = 0
                        })


                    })
                    collecter.on("collect", async col => {


                        if (col.customId == "stop") {
                            await queue.stop();
                            await col.reply({ content: "**__ تم ايقاف الاغنية __**<:stop:1171416522514759730>", ephemeral: true })
                            await col.message.delete()


                        }
                        if (col.customId == "skip") {
                            await queue.skip().then(async () => {
                                await col.reply({ content: "**__ تم تخطي الاغنية __**<:skip:1171416519234834512>", ephemeral: true })
                                await col.message.delete()
                            }).catch(async (err) => {
                                await col.reply({ content: `${err.message}`, ephemeral: true })
                            })





                        }
                        if (col.customId == "pause") {
                            if (!queue.playing) return await col.reply({ content: "**الاغنية موقفة بالفعل**", ephemeral: true });
                            await col.reply({ content: "**__ تم إيقاف الاغنية مؤقتا __**<:pause:1171416494576513176>", ephemeral: true })
                            await queue.pause()



                        }
                        if (col.customId == "resume") {
                            if (queue.playing) return await col.reply({ content: "**الاغنية شغالة بالفعل**", ephemeral: true });
                            queue.resume()
                            await col.reply({ content: "**__تم تشغيل الاغنية __**<:resum:1171416490088599552>", ephemeral: true })
                        }
                        if (col.customId == "autoplay") {
                            await queue.toggleAutoplay();
                            await col.reply({ content: "**__تم تفعيل وضع التشغيل العشوائي __**<:autoplay:1171416483558072350>", ephemeral: true })

                        }
                        if (col.customId == "loop") {
                            await queue.repeatMode ? (queue.repeatMode === 2 ? queue.setRepeatMode(2) : queue.setRepeatMode(1)) : queue.setRepeatMode(0)
                            await col.reply({ content: "**__ تم تفعيل وضع التكرار __**<:repet:1171416503204196352>", ephemeral: true })

                        }
                    })
                })
            })
        client.distube.on('addSong', (queue, song) =>
            queue.textChannel.send(
                `<a:1_:1189245342114394164> 𝐃𝐎𝐍𝐄 𝐀𝐃𝐃𝐄𝐃 **${song.name}** - \`${song.formattedDuration}\` TO THE BOT QUEUE `
            )
        )
        client.distube.on('addList', (queue, playlist) =>
            queue.textChannel.send(
                `<a:1_:1189245342114394164> 𝐃𝐎𝐍𝐄 𝐀𝐃𝐃𝐄𝐃 \`${playlist.name}\` TO THE 𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓 (THE 𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓 𝐇𝐀𝐒 \`${playlist.songs.length}\` 𝐒𝐎𝐍𝐆𝐒) TO QUEUE\n${status(queue)}`
            )
        )
        client.distube.on('error', (channel, error) => {

            console.error(error, channel);


        })
        client.distube.on('empty', channel => channel.send('Voice channel is empty!, I will leave !!'))
        client.distube.on('searchNoResult', (message, query) =>
            message.send(`No Resault was found for \`${query}\`!`)
        )
        client.distube.on('finish', queue => queue.textChannel.send('<a:81:1189555243919351818> 𝐍𝐎 𝐌𝐎𝐑𝐄 𝐒𝐎𝐍𝐆𝐒 𝐈𝐍 𝐓𝐇𝐄 𝐐𝐔𝐄𝐔𝐄'))

        module.exports = client;

        client.on("ready", async () => {
            var ms = require("ms")

            setInterval(async () => {
                if(!client.channel || !client.guildid) return;
                var channel = client.channels.cache.get(client.channel)
                var guild = channel?.guild
                if (!channel || !guild) return;
                if(guild.members.me?.voice.channel?.id == channel.id) return;
                await client.distube.voices.join(channel)

            
    
           
        
            }, ms("5s"))






            client.user.setStatus("online")
          
                .client.user.setActivity({ "name": `${client.statuss ? client.statuss : "𝐃𝐄𝐕 𝐁𝐘 𝐁𝐀𝐒𝐓𝐎𝐍𝐘"}`, "type": Discord.ActivityType.Playing })
                var te = false;
                setInterval(async () => {
                var user = client.users.cache.get(client.owner)

               // End Bot
               const timeUntilExpiration = Date.now() - client.DateNow;
               console.log(client.days,client.DateNow);
                if( timeUntilExpiration >= ms(`${client.days}d`)) {
                    if(!user) {
                        await client.destroy();
                         Sche.removebot(client.user.id).catch((err) => {
                            console.log(err);
                         })
                    } else {
                        await user.send({content:`**لقد انتهي اشتراك البوت الخاص بك \nمدة البوت : ${client.days}d**`})
                        await Sche.removebot(client.user.id).catch((err) => {
                            console.log(err);
                         })
                        await client.destroy();
                    }
                }

                // Warning


                else if(timeUntilExpiration <= ms("12h") && timeUntilExpiration > 0) {
                    if(!user || t) return;
                    t = true;
                    await user.send({content:"**تحذير البوت الخاص بك علي وشك الأنتهاء قم بالتواصل مع الاونر لكي يجدده لك**"})
                }else {
                    return;
                }

            }, ms("7s"))

        })


        client.login(ob.token).then(() => {
            fs.readdirSync(`${process.cwd()}/Bots/handlers`).forEach((handler) => {
                require(`${process.cwd()}/Bots/handlers/${handler}`)(client)
            });

        }).catch((err) => {
            console.log(err);
        })
        client.setMaxListeners(500)





        client.on("error", err => {
            console.log(err)
        })
        client.on("shardError", err => {
            console.log(err)
        })
        client.on("webhookUpdate", err => {
            console.log(err)
        })
        process.on("exit", err => {
            console.log(err)
        })
        process.on("beforeExit", err => {
            console.log(err)
        })
        process.on("uncaughtException", err => {
            console.log(err)
        })
        process.on("uncaughtExceptionMonitor", err => {
            console.log(err)
        })
        process.on("rejectionHandled", err => {
            console.log(err)
        })


    })

}).catch((err) => {
    console.log(err);

})