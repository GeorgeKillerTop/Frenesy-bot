const Discord = require ("discord.js");
const ytdl = require('ytdl-core');
const ms = require("ms");
const YouTube = require('simple-youtube-api');
const GOOGLE_API_KEY = "AIzaSyDUmo-BtB5oQr5Y3RSgYYBMj9rFKMr-W2s";
const prefix1 = "$";
const prefix2 = "%";
const prefix3 = "?";
const fs = require("fs");
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

var bot = new Discord.Client();
var servers = {};

let coins = require("./coins.json");

bot.on("ready", function() {
    console.log("Ready");
    bot.user.setGame(`on ${bot.guilds.size} servers!`)
});
bot.on("message", async message => { 
    if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
      }
    
      let coinAmt = 1;
      let baseAmt = 1;
    
      if(coinAmt === baseAmt){
        coins[message.author.id] = {
          coins: coins[message.author.id].coins + coinAmt
        };
    }
      fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
      });
      console.log(message.author.username + ` + ${coinAmt}`);
    });

bot.on("message", async message => {
    if (message.author.bot) return undefined;
	if (!message.content.startsWith(prefix2)) return undefined;
    const args = message.content.split(" ");
    const args3 = message.content.substring(prefix2.length).split(" ");
    switch (args3[0].toLowerCase()) {
        case "dragoste":  
        var E1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#15f153")
        .addField("Informatii: ", message.author.username + " este iubit in proportie de " + r1[Math.floor(Math.random() * r1.length)])
        .setTimestamp();
        message.channel.sendMessage(E1); 
            break;     
        default:
        var T = new Discord.RichEmbed()
        .setColor("#15f153")
        .addField("Comanda invalida",'Incearca ?help')
        message.channel.sendMessage(T); 
    }
});
bot.on("message", async message => {
    if (message.author.bot) return undefined;
	if (!message.content.startsWith(prefix1)) return undefined;
    const args = message.content.split(" ");
    var args3 = message.content.substring(prefix1.length).split(" ");
    switch (args3[0].toLowerCase()) {
            case "money" :
            if(!coins[message.author.id]){
                coins[message.author.id] = {
                  coins: 0
                };
              }
            
              let uCoins = coins[message.author.id].coins;
            
            
              let coinEmbed = new Discord.RichEmbed()
              .setColor("#15f153")
              .addField(message.author.username , uCoins + " bani" )
              message.channel.send(coinEmbed);
            break;
            case "pay" :
            if(!coins[message.author.id]){
                return message.channel.sendMessage(`${message.author.username} NU ai desui bani`)
              }
            
              let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[2]);
              if(!pUser) {
                var E24 = new Discord.RichEmbed()
                .setColor("#15f153")
                .addField("Model", "$pay <Mention Utilizator> + <Suma>")
                .setTimestamp();
                return message.channel.send(E24);
                };
            
              if(!coins[pUser.id]){
                coins[pUser.id] = {
                  coins: 0
                };
              }
            
              let pCoins = coins[pUser.id].coins;
              let sCoins = coins[message.author.id].coins;
             if(pCoins === sCoins) return message.channel.sendMessage(`${message.author.username} NU iti poti da bani singur`)
              if(sCoins < args[3]) return message.reply("Not enough coins there!");
            
              coins[message.author.id] = {
                coins: sCoins - parseInt(args[3])
              };
            
              coins[pUser.id] = {
                coins: pCoins + parseInt(args[3])
              };
            
              message.channel.send(`${message.author.username} i-a dat lui ${pUser} ${args[3]} bani`);
              pUser.message(`Ai primit ${args[3]} bani de le ${message.author.username}`)
            
              fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
                if(err) cosole.log(err)
              });
            break;
        default:
        var T = new Discord.RichEmbed()
        .setColor("#15f153")
        .addField("Comanda invalida",'Incearca ?help')
        message.channel.sendMessage(T); 
    }
});
bot.on("message", async message => {
    if (message.author.bot) return undefined;
	if (!message.content.startsWith(prefix3)) return undefined;
    const args = message.content.split(" ");
    var args3 = message.content.substring(prefix3.length).split(" ");
    switch (args3[0].toLowerCase()) {
        case "help" :
             var E8 = new Discord.RichEmbed()
            .setColor("#15f153")
            .addField("%dragoste", '> afla cat esti de iubit')
            .addField("$money", '> vezi cati bani ai')
            .addField("$pay", '> da bani altui uitizator')
            .addField(".help-admin", '> detalii despre partea legata de administatia serverului')
            .addField("Add Frenesy on your server", '> https://discordapp.com/api/oauth2/authorize?client_id=453904552911962112&permissions=8&scope=bot')
            .setTimestamp();
            message.channel.sendMessage(E8);
            break;
        default:
        var T = new Discord.RichEmbed()
        .setColor("#15f153")
        .addField("Comanda invalida",'Incearca ?help')
        message.channel.sendMessage(T); 
    }
});
var  r1 = [
    "0%",
    "1%",
    "2%",
    "3%",
    "4%",
    "5%",
    "6%",
    "7%",
    "8%",
    "9%",
    "10%",
    "11%",
    "12%",
    "13%",
    "14%",
    "15%",
    "16%",
    "17%",
    "18%",
    "19%",
    "20%",
    "21%",
    "22%",
    "23%",
    "24%",
    "25%",
    "26%",
    "27%",
    "28%",
    "29%",
    "30%",
    "31%",
    "32%",
    "33%",
    "34%",
    "35%",
    "36%",
    "37%",
    "38%",
    "39%",
    "40%",
    "41%",
    "42%",
    "43%",
    "44%",
    "45%",
    "46%",
    "47%",
    "48%",
    "49%",
    "50%",
    "51%",
    "52%",
    "53%",
    "54%",
    "55%",
    "56%",
    "57%",
    "58%",
    "59%",
    "60%",
    "61%",
    "62%",
    "63%",
    "64%",
    "65%",
    "66%",
    "67%",
    "68%",
    "69%",
    "70%",
    "71%",
    "72%",
    "73%",
    "74%",
    "75%",
    "76%",
    "77%",
    "78%",
    "79%",
    "80%",
    "81%",
    "82%",
    "83%",
    "84%",
    "85%",
    "86%",
    "87%",
    "88%",
    "89%",
    "90%",
    "91%",
    "92%",
    "93%",
    "94%",
    "95%",
    "96%",
    "97%",
    "98%",
    "99%",
    "100%"
  ]
bot.login(process.env.BOT_TOKEN);
