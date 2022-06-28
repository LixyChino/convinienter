module.exports = {
    name: "add",
    description: "You can give role to players.",

    run: async (client, message, args) => {
        if (!message.member.permissions.has("BAN_MEMBERS"))
            return message.reply(
                "```You do not have permissions.\n権限を持っていません。```"
            );
        const guild = message.guild;
        const roles = message.mentions.roles;
        const members = message.mentions.members;
        let i = 0; //All players
        let j = 0; //All roles
        if (roles.size == 0) {
            return message.reply(
                "```Choose the roles.\nロールを選んでください```"
            );
        }
        if (members.size == 0) {
            return message.reply(
                "```Chose the members.\nメンバーを選んでください。```!"
            );
        }
        members.forEach((member) => {
            roles.forEach((role) => {
                member.roles.add(role);
                j++;
            });
            i++;
        });
        message.reply(
            "```Given the roles to players.\n" +
                i +
                "人に" +
                j +
                "個のロールを付与しました。```"
        );
    },
};
