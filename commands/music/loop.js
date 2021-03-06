module.exports = {
    name: 'loop',
    aliases: ['lp'],
    category: 'Music',
    utilisation: '{prefix}loop',

    run(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(`${client.emotes.success} - Repeat mode **disabled** !`);
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(`${client.emotes.success} - Repeat mode **enabled** !`);
        };
    },
};