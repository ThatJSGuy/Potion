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

class Token {
  constructor(type, value, line) {
    this.type = type;
    this.value = value;
    this.line = line;
  }
}

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
    // Placeholder implementation
    return this.tokens;
  }
}

module.exports = {
  Lexer,
  Token,
  TokenType,
};
