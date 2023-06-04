const fs = require("fs");
const { Lexer } = require("./distillery/js/src/lexer.js");
const { brewPotion } = require("./distillery/js/src/translator.js");

// Read the contents of the todo-list.potion file
const potionCode = fs.readFileSync(
  "./docs/guide/examples/todo-list.potion",
  "utf8"
);

const lexer = new Lexer(potionCode);
const tokens = lexer.tokenize(); // Tokenize the code

const brewedCode = brewPotion(tokens);
console.log(brewedCode);
