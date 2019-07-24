const config = require('./config.json');
const Commando = require('discord.js-commando');
const bot = new Commando.Client();

var prefix = ("/")

bot.on('ready', () => {
    bot.user.setGame("Command: */help*")
    console.log(`narutobot est en ligne !`);
    bot.user.setActivity(`"Me faire coder"`)
})
bot.login(config.token);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - **/help** \n - **/creator**");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour ! :wave:");
        console.log("Commande Salut effectué");
    }
    
    if (message.content === prefix + "creator"){
        message.reply("***Bot by*** __**Azuki <3**__");
    }
});
