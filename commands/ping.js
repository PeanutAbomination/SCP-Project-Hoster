

module.exports = {
    name: 'ping',
    description: "ping command",
    execute(message, args, Discord, clients, Math) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Pong! 🏓")
        .setDescription("clients's latency: " + `**${message.createdTimestamp - Date.now()}ms**` + "\n" + `API's Latency: **${Math.round(clients.ws.ping)}ms**`)
        .setColor('RANDOM');

        message.channel.send(embed);
    }
}