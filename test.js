const fs = require("fs");
const glob = require("glob");
const { brewPotion } = require("./translator");
const Lexer = require("./lexer");

// Find the path of the todo-list.potion file case-insensitively
const potionFilePaths = glob.sync(
  "./potion/docs/guide/examples/todo-list.potion",
  { nocase: true }
);

if (potionFilePaths.length === 0) {
  console.error("Error: The todo-list.potion file was not found.");
  process.exit(1);
}

// Use the first matching file path
const potionFilePath = potionFilePaths[0];

// Read the contents of the todo-list.potion file
const potionCode = fs.readFileSync(potionFilePath, "utf8");

const lexer = new Lexer(potionCode);
const tokens = lexer.tokenize();

const brewedCode = brewPotion(potionCode);
console.log(brewedCode);
