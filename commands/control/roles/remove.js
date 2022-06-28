module.exports = {
    name: "remove",
    description: "You can delete roles.",

    run: async (client, message, args) => {
        if (!message.member.permissions.has("BAN_MEMBERS"))
            return message.reply(
                "```You do not have permissions.\n権限を持っていません。```"
            );
        const guild = message.guild;
        console.log(guild);
        const roles = message.mentions.roles;
        let i = 0;
        roles.forEach((role) => {
            role.delete();
            i++;
        });
        message.reply(
            "```Deleted the role.\n" + i + "個のロールを削除しました。```"
        );
    },
};
