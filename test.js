const fs = require("fs");
const { Lexer } = require("./distillery/js/src/lexer.js");
const { Parser } = require("./distillery/js/src/parser.js");
const { Translator } = require("./distillery/js/src/translator.js");

console.log(require("./distillery/js/src/lexer.js"));

// Helper function to read a file and translate it to JavaScript
function translatePotionFile(filename) {
  // Read the contents of the Potion file
  const potionCode = fs.readFileSync(filename, "utf8");

  // Tokenize the Potion code
  const lexer = new Lexer(potionCode);
  const tokens = lexer.tokenize();

  // Parse the tokens into an AST
  const parser = new Parser(tokens);
  const ast = parser.parse();

  // Translate the AST into JavaScript
  const translator = new Translator(ast);
  const jsCode = translator.translate();

  return jsCode;
}

// Translate the todo-list.potion file
console.log("Translating todo-list.potion...");
const todoListJs = translatePotionFile(
  "./docs/guide/examples/todo-list.potion"
);
console.log(todoListJs);

// Translate the hello-world.potion file
console.log("Translating hello-world.potion...");
const helloWorldJs = translatePotionFile(
  "./docs/guide/examples/hello-world.potion"
);
console.log(helloWorldJs);
