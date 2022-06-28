module.exports = {
    name: "ban",
    category: "control",
    description: "Owner or Authorized persons can ban  the member.",

    run: async (client, message, args) => {
        if (!message.member.permissions.has("BAN_MEMBERS"))
            return message.reply(
                "```You do not have permissions.\n権限を持っていません。```"
            );
        if (args.length < 1 || message.mentions.members.size == 0) {
            return message.reply(
                "```Choose you want to banned member.\nBANしたいメンバーを選んでください。```"
            );
        }
        const members = message.mentions.members;
        let i = 0;
        members.forEach((member) => {
            if (member.bannable) {
                member.ban();
                i++;
            }
        });
        message.reply(
            "```Banned the player.\n" + i + "人のプレイヤーをBANしました。```"
        );
    },
};
