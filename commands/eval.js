const Discord = require("discord.js");
const fs = require('fs');
const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var years = Math.floor(days/365); days %= 365;
    var written = false;
    return(years?(written=true,years+" Year(s)"):"")+(written?", ":"")
      +(days?(written=true,days+" Day(s)"):"")+(written?", ":"")
      +(hours?(written=true,hours+" Hour(s)"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" Minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" Seconds"):"")+(written?" ":"");
};
module.exports.run = async (client,message,args) => {
if(message.author.id !== '377271843502948354')return;
try{
      const code = message.content.split(" ").slice(1).join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled, { depth: 0 });
	
if(evaled.length > 1024){
fs.writeFile("./output.txt",(evaled), (err) => {
if (err) console.log(err)
});
return message.channel.send('ayy ... the output was longer than 1024 in length, so i put it in this file ... yw',{file: './output.txt'});
};
	
	if (evaled.includes(client.token)){
	    evaled = evaled.replace(client.token, "that's a secret");
	}

	
     let evbed = new Discord.RichEmbed()
     .setTimestamp()
     .setColor(0x00fff0)
     .addField('**Input:**', '```js\n'+ code +'```')
	 .addField('**Output:**', '```js\n'+ evaled +'```')
      message.channel.send({embed: evbed});
    
	} catch (err) {
    let errbed = new Discord.RichEmbed()
    .setColor(0xff0000)
	.setTimestamp()
	.addField('**Error:**', '```js\n'+ err +'```')
    message.channel.send({embed: errbed});
    }




}
module.exports.help = {
    name: "eval",
    alias: "evaluate"
}
