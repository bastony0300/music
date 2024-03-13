
var mongoose = require("mongoose")

const config = require("../config.json")
var yser = new mongoose.Schema({
    userid: String,
   
    bots: [{
        token: String,
        botid: String,
        owner: String,
        prefix: String,
        kind: String,
        DateNow: Number,
        days: Number,
        guildid:String,
        channel:String,
        statuss:String
      
    }],

  
})

var user = mongoose.model("music2", yser)






exports.returnTokens = async (kind) => {

    return new Promise((resolve, reject) => {

        user.find({}).then((array) => {
            const der = []
            console.log(array);
            if (!array || array.length == 0) reject("Length is 0");

            array.forEach((m) => {
                if (m.bots.length == 0) return;
                var mm = m.bots.forEach(async (m) => {
                  
                        console.log(m.kind.toUpperCase() == kind.toUpperCase());
                        der.push(m);
                  
                })
                der.push(mm)
            })
            if (der.length == 0) reject("Length is 0");
            console.log(der);
            resolve(der)
        }).catch((err) => {
            reject(err.message)
        })
    })
}


exports.checkTokenBot = async (token) => {
    return new Promise((resolve, reject) => {
        user.find({}).then((res) => {
            if (!res)  resolve(true);
            if (res) {
                var dataa = false
                if(res.length == 0) dataa = true;
                res.forEach((re) => {
                    var tokenn = re.bots.find(tok => tok.botid == token);
                 
                    if (!tokenn) dataa = true;

                })
                if(dataa == true) resolve(true);
                if(dataa == false) reject("false")
            }
        })
    })
}



exports.transferOwner = async (botid, userid, newuserid) => {
    return new Promise((resolve, reject) => {
        user.find({}).then(async (res) => {
            if (!res) reject("No Users was found");

            if (res) {
                var TheOwner = res.find((m) => m.userid == userid);
                var TheNewOwner = res.find((m) => m.userid == newuserid);
                if (!TheOwner) reject("I Can't find data about you !!");
                var Bot = TheOwner.bots.find((m) => m.botid == botid)

                if (!Bot) reject("I Can't find data about your bot !!");
                Bot.owner = newuserid

                if (!TheNewOwner) {

                    var Usa = new user({
                        userid: newuserid,
                        bots: [Bot]
                    })
                    await TheOwner.bots.pop(Bot)
                    await TheOwner.save();
                    await Usa.save();
                    resolve("done")

                } if (TheNewOwner) {
                    TheNewOwner.bots.push(Bot)
                    TheOwner.pop(Bot)
                    await TheOwner.save();
                    await TheNewOwner.save();
                    resolve("done")
                }



            }


        })
    })
}

exports.ReturnInfo = async (botid) => {
    return new Promise((resolve, reject) => {
        user.find({}).then(async (res) => {
            if (!res) reject("No Users was found");
            var d;
            var count = 1
            if (res) {
                res.forEach(async (m) => {

                    if (m.bots.length == 0 && d == undefined && res.length == count) return reject("no bots was found");
                    if (m.bots.length == 0) return;
                    var Bot = m.bots.find((msd) => msd.botid == botid);
                    if (!Bot) return;
                    if (Bot) {
                        d = Bot

                    }
                    count++
                })
                resolve(d)


            }


        })
    })
}

exports.Schema = user;
exports.removebot = async (botid) => {
    return new Promise((resolve, reject) => {


        user.find({}).then(async (res) => {
            if (!res) reject("No bots was found");

            if (res) {
                var t = false
                res.forEach((m) => {
                    var Data = m.bots.find((m) => m.botid == botid)
                    if (!Data) return;
                    if (Data) {
                        m.bots.pop(Data)
                        m.save();
                        t = true;
                    }
                })
                if (t == true) {
                    resolve("done")
                } else {
                    reject("no bots was found")
                }

            }


        })
    })
}

exports.editbot = async (userid, botid, token, type) => {
    return new Promise((resolve, reject) => {
        user.findOne({ userid: userid }).then(async (res) => {

            if (!res) reject("no bots was found");
            if (res) {
             
                if (type == "guildid") {
                    var Bot = res.bots.find((m) => m.botid == botid)
                    if (!Bot) reject(" bot was not found");
                    Bot.guildid = token
                    res.save();
                    resolve("done")
                }
                if (type == "status") {
                    var Bot = res.bots.find((m) => m.botid == botid)
                    if (!Bot) reject(" bot was not found");
                    Bot.statuss = token
                    res.save();
                    resolve("done")
                }
                if (type == "channeladd") {
                    var Bot = res.bots.find((m) => m.botid == botid)
                    if (!Bot) reject(" bot was not found");
                    Bot.channel = token
                    res.save();
                    resolve("done")
                }
                if (type == "channelremove") {
                    var Bot = res.bots.find((m) => m.botid == botid)
                    if (!Bot) reject(" bot was not found");
                    Bot.channel = undefined
                    res.save();
                    resolve("done")
                }
                if (type == "days") {
                    var Bot = res.bots.find((m) => m.botid == botid)
                    if (!Bot) reject(" bot was not found");
                    Bot.days += token
                    res.save();
                    resolve("done")
                }


            }



        })






    })
}
exports.addbot = async (userid, token, botid, guildid, owner, kind, days) => {
    return new Promise((resolve, reject) => {
        user.findOne({ userid: userid }).then(async (res) => {
            if (!res) {
                var us = new user({ userid, bots: [{ token, guildid,botid, owner, kind, DateNow: Date.now(), days: +days }] })
                us.save()
                resolve("done")

            }

            if (res) {
                var Bot = res.bots.find((m) => m.botid == botid)
                if (Bot) reject(" bot was found");
                res.bots.push({
                    token,
                    guildid,
                    kind,
                    owner,
                    botid,
                    DateNow: Date.now(),
                    days: +days,

                });
                res.save();
                resolve("done")
            }


        })






    })


}

