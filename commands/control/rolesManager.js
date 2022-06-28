const discord = require("discord.js");
const { readdirSync, read, fstat } = require("fs");
const perm = discord.Permissions;
const fs = require("fs");

let roles = new discord.Collection();

const commands = readdirSync("commands/control/roles/").filter((file) =>
    file.endsWith(".js")
);

for (let file of commands) {
    let pull = require(`./roles/${file}`);
    roles.set(pull.name, pull);
}

module.exports = {
    name: "roles",
    category: "control",
    description: "roles <create/remove> <args...>",

    run: async (client, message, args) => {
        const arg = args.shift();
        let command = roles.get(arg);
        if (command) command.run(client, message, args);
    },
};
