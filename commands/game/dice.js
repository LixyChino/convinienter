module.exports = {
    name: "rand",
    category: "game",
    description: "You can enjoy a dice!",

    run: async (client, message, args) => {
        if (args.length < 1) {
            message.reply(`${Math.floor(Math.random() * 6) + 1}`);
        } else if (args.length > 0) {
            message.reply(`${Math.floor(Math.random() * args[0]) + 0}`);
        }
    },
};
