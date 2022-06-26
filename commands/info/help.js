const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "info",
    description: "You can check my commands.",

    run: async (client, message, args) => {
        if (args.length < 1) {
            let genres = new Array();
            for (var genre of client.categoris) {
                genres.push({
                    name: `**__${genre}__**`,
                    value: `All of ${genre} commands!`,
                });
            }
            console.log(genres);
            const embed = new MessageEmbed().setTitle("Help").setFields(genres);
            message.channel.send({ embeds: [embed] });
        }
    },
};
