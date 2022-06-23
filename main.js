const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
var config = require('./config');

client.on('ready', () => {
	console.log('Process Sucseced!');
	console.log(client.user.tag + " is enable");
});

//login
client.login(config.token);