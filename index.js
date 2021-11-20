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
    if (cmd == "ping") {
      msg.channel.send("pong");
    }
    if (cmd == "nkmk") {
        msg.channel.send("nkrbmk");
      }
    if (!msg.content.startsWith(prefix)) return;     
  })
 
bot.login("OTExMzMxODYxODExMzI3MDA2.YZf17w.mT1qLA8OKrXDGwzzeayqLqIDoB8");
