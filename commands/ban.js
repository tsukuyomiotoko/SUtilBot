const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


module.exports.run = async(client,message,args)=>{

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
if (!message.guild.me.hasPermission(`BAN_MEMBERS`)) return message.reply(`I am sorry, but I don't have the perms to ban a user.`);
let User = message.guild.member(message.mentions.users.first())
if (!User) return message.channel.send("Invalid User")
if (User.hasPermission(`ADMINISTRATOR`)) return message.reply(`I am sorry, but I can not ban ${User} as he/she is an Admin.`);
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}

User.ban({reason: banReason}) && message.channel.send(`Banned ${User} for ${banReason}`)
}

module.exports.help ={
    name:"ban"
}