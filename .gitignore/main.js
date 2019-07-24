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
        message.channel.sendMessage("Liste des commandes: \n **Général :** \n - **/help** \n - **/creator** \n - **/infobot** \n **modérations :** \n - **/ban** \n - **/kick**");
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
});


bot.login(config.token);

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.lenght).split(/ + /);
    command = args.shift().toLowercase();

if (command === "kick") {
    let modRole = message.guild.roles.find("name", "Test");
    if(!message.member.roles.has(modRole.id)) {
        return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
    }
    if(message.mentions.users.size === 0) {
        return message.reply("Merci de mentionner l'utulisateur à expulser.").catch(console.error);
    }  
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
        return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
    }
    if(!message.guild.member(bot.user).hasPermission("KICK MEMBERS")) {
        return message.reply("Je n'ai pas les permissions KICK_MEMBERS pour faire ceci.").catch(console.error);
    }
    kickMember.kick().then(member => {
        message.reply(`${member.user.username} a été expulser avec succès.`).catch(console.error);
    }).catch(console.error);

}

if (command === "ban") {
    let modRole = message.guild.roles.find("name", "Test");
    if(!message.member.roles.has(modRole.id)) {
        return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
    }
    const member = message.mentions.members.first();
    if (!member) return message.reply("Merci de mentionner l'utilisateur devant être puni du banhammer");
    member.ban().then(member => {
        message.reply(`${member.user.username} a pris le banhammer de plein fouet.`).catch(console.error);
    }).catch(console.error)
}});
