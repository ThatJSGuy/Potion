const { Lexer } = require("./lexer.js");

function brewPotion(potionCode) {
  const lexer = new Lexer(potionCode);
  const ingredients = lexer.tokenize();
  return ingredients; // Placeholder logic for brewing the potion
}

module.exports = {
  brewPotion,
};
