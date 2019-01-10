const Discord = require('discord.js');
const client = new Discord.Client();
// const uselessCommands = require('../commands/uselessCommands');
// const messageService = require('./messageService');
const prefix = '!';

var loginClient = function(authToken) {
    client.login(authToken);
};

var registerReadyListener = function() {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
};

var registerMessageListener = function() {
    client.on('message', msg => {
        var cmdText = msg.content;
        var isPrefixed = cmdText.substring(0, 1) === prefix;
        if (isPrefixed) {
            var args = cmdText.substring(1).split(' ');
            var cmd = args[0];
    
            switch (cmd) {
                case 'hello':
                msg.channel.send('Hello, <@' + msg.author.id +'>');
                break;
            }
            
        }
    });
};

var registerListeners = function() {
    registerReadyListener();
    registerMessageListener();
};

module.exports = {
    login: loginClient,
    registerListeners: registerListeners
};