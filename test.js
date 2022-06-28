var argv = require("minimist")(["-y", "0"]);
var args = process.argv;

console.log(argv);
console.log(args.slice(2));
