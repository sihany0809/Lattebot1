const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('ready', () => { 
    console.log('Logged in as ${client.user.tag}!');
 });
 client.on('message', msg => { 
     if (msg.content === '지운') 
     { msg.reply('Dbs마스터!');
    }
 });
  client.login("process.env.TOKEN");
