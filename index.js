//key : OTExMzMxODYxODExMzI3MDA2.YZf17w.U95vnjibpvpO0MpmPmGOrDDVLDw
require('lib')
const Discord = require('discord.js');
const fs = require('fs');
const { Client, Intents } = require('discord.js');
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`)
  })  
bot.on("message", msg => {
    let prefix='&';
    let messageArray = msg.content.split(' ')
    let cmd = messageArray[0].slice(prefix.length)
    let args = messageArray.slice(1)
    
    if (!msg.content.startsWith(prefix)) return;

    if (cmd == "ping") {
      msg.channel.send("pong");
    }
    if (cmd == "rabi") {
      msg.channel.send("💖💖",{
        files:[
          "./images/3.jpg"
        ]
      });
    }

   
  })
 
bot.login("OTExMzMxODYxODExMzI3MDA2.YZf17w.U95vnjibpvpO0MpmPmGOrDDVLDw");
