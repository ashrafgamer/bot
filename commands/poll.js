const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

const idk = message.content.split(" ").slice(2).join(" ");
const time = message.content.split(" ").slice(1,2).join(" ");

const neko = message.guild.members.find("id", "377271843502948354");
if(!message.member.hasPermission("MANAGE_MESSAGES") && !neko)return message.reply('you have to have the `"MANAGE_MESSAGES"` permission to use this command');

	if (!idk) return message.reply("You must have something for them to vote for!")
    if (!message.content.includes("?")) return message.reply("you should Include a ? in your poll")
       let pollTopic = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
        .setDescription(idk)
        .setFooter(`Generated by: ${message.author.username}`, message.author.avatarURL);
		message.channel.send(pollTopic)
		.then(msg => { 
		msg.react(`✅`)
        msg.react(`❎`)});
		
		
		
};
module.exports.help = {
	name: "poll",
	category: "Moderation"
}