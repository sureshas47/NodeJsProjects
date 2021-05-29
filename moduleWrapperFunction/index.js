
// below function is module wrapper function 
// Inside this function, All modules like greeting and name are PRIVATE
(function(exports, require, module, __filename, __dirname){
const greeting="hello world";
const name="suresh adhikari";
console.log(greeting);
module.exports.greeting=greeting;
module.exports.name=name;
});