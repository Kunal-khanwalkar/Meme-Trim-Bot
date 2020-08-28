const promise = require('promise');
const Discord = require('discord.js');
const client = new Discord.Client();

//const keys = require('.\\APIkeys.json');

//const bot_token = keys[0].value;
//const client_id = keys[1].value;

var video_call = require('.\\videos.js');

client.on('ready', () => {
	console.log('I am ready!');
});


client.on('message', message => {

	var prefix = '//meme'	
	var msg = message.content;

	msg = msg.trim();
	var tokens = msg.split(' ');	

	if (tokens[0] === prefix) {

		if(tokens.length !== 4)
			return message.reply('Wrong format');		

		var postVid = function() {
			return new promise((resolve,reject) => {
				setTimeout(() => {
					message.channel.send('Enjoy your meme', {
						files: [
							".\\output.mp4"
						]
					})	

					var err;
					if(!err) {
						resolve();
					} else {
						reject('Discord post error');
					}		
				},3000);	
			});
		}

		video_call.fetch_video(tokens[1])
		.then(video_call.trim_video(tokens[2],tokens[3]))
		.then(postVid())
		.then(video_call.cleanup())
		.catch(err => console.log(err));
	}
});


client.login(process.env.BOT_TOKEN);

