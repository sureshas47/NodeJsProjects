const chalk=require("chalk")
const validator=require("validator");

const res= validator.isEmail("alones47@gmail.com")
// console.log(chalk.green.inverse("success"));
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));