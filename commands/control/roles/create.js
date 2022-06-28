module.exports = {
    name: "create",
    description: "You can make a new role.",

    run: async (client, message, args) => {
        console.log(args);
        const guild = message.guild;
        if (!message.member.permissions.has("BAN_MEMBERS"))
            return message.reply(
                "```You do not have permissions.\n権限を持っていません。```"
            );
        var date = require("minimist")(args, {
            alias: {
                c: "color",
                n: "name",
                p: "perm",
            },
            default: {
                color: "FFF000",
                name: "Test",
                perm: ["VIEW_CHANNEL"],
            },
        });
        if (typeof date.perm === "string") {
            date.perm = [date.perm];
        }
        if (/^[0-9a-f]{6}$/i.test(date.color)) {
            console.log(date);
            guild.roles.create({
                name: date.name,
                mentionable: true,
                color: "#" + date.color,
                permissions: date.perm,
            });
            message.reply("```Created the role\nロールを作成しました。```");
        } else {
            message.reply(
                "```Roll color must be determined in hexadecimal.\nロールの色は16進数で決定してください。```"
            );
        }
    },
};
