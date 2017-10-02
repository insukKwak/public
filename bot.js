const botkit = require('botkit');
const keys = require('./keys');

const controller = botkit.slackbot({
	debug : false,
	log : true
	});


const botScope = [
	'direct_message',
	'direct_mention',
	'mention'
];

controller.hears('안녕',botScope,(bot,message)=>{
	bot.reply(message,'안녕,난 봇이야.')
});

controller.spawn({
	token : keys.botAPIToken
}).startRTM();

