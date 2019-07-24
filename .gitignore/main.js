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
        message.channel.sendMessage("Liste des commandes: \n **Général :** \n - **/help** \n - **/creator** \n - **/infobot**");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour ! :wave:");
        console.log("Commande Salut effectué");
    }
    
    if (message.content === prefix + "creator"){
        message.reply("***Bot made by*** __**Azuki<3**__");
    }

    if (message.content === prefix + "infobot"){
        message.reply("Création du bot le 23/07/2019 à 23 : 06 : 24");
    }

    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est une description")
            .setField(".help", "Page d'aide", true)
            .setField("Embed 01","Embed 01 ! Faites-moi un don paypal : (https://paypal.me/pools/c/8gJDGxq0vg)", true)
            .setColor("0x2D8ECF")
            .SetFooter("Merci à toi ! ^^")
        message.channel.sendEmbed(embed);
    }
    
});
