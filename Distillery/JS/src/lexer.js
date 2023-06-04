// Token types
const TokenType = {
  IDENTIFIER: "IDENTIFIER",
  KEYWORD: "KEYWORD",
  STRING: "STRING",
  NUMBER: "NUMBER",
  SYMBOL: "SYMBOL",
  INDENT: "INDENT",
  DEDENT: "DEDENT",
  NEWLINE: "NEWLINE",
  EOF: "EOF",
};

// Token class
class Token {
  constructor(type, value, line) {
    this.type = type;
    this.value = value;
    this.line = line;
  }
}

// Lexer class
class Lexer {
  constructor(code) {
    this.code = code;
    this.tokens = [];
    this.indentStack = [0];
    this.currentIndent = 0;
    this.line = 1;
    this.position = 0;
    this.current = "";
  }

  tokenize() {
    // Your lexer code here
  }

  // Helper methods for tokenizing, such as processIndentation, skipComment, processString, etc.
}

// Export the Lexer class
module.exports = Lexer;
