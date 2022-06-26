module.exports = {
    name: "kick",
    category: "control",
    description: "Owner or Authorized persons can kick  the member.",

    run: async (client, message, args) => {
        if (!message.member.permissions.has("BAN_MEMBERS"))
            return message.reply(
                "```You do not have permissions.\n権限を持っていません。```"
            );
        if (args.length < 1 || message.mentions.members.size == 0) {
            return message.reply(
                "```Choose you want to kicked member.\nキックしたいメンバーを1人選んでください。```"
            );
        }
        const member = message.mentions.members.first();
        member.kick();
        message.reply("```Kicked the player.\nプレイヤーをキックしました。");
    },
};
