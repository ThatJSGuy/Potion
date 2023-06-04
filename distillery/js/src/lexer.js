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
  ARRAY_START: "ARRAY_START",
  ARRAY_END: "ARRAY_END",
  METHOD_START: "METHOD_START",
  METHOD_END: "METHOD_END",
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
    const lines = this.code.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const tokens = line.split(" ");
      for (let j = 0; j < tokens.length; j++) {
        const token = tokens[j];
        const newToken = new Token(TokenType.IDENTIFIER, token, i + 1);
        this.tokens.push(newToken);
      }
    }

    for (let i = 0; i < this.tokens.length; i++) {
      if (this.tokens[i].value === "[") {
        this.tokens[i].type = TokenType.ARRAY_START;
      } else if (this.tokens[i].value === "]") {
        this.tokens[i].type = TokenType.ARRAY_END;
      } else if (this.tokens[i].value === "(") {
        this.tokens[i].type = TokenType.METHOD_START;
      } else if (this.tokens[i].value === ")") {
        this.tokens[i].type = TokenType.METHOD_END;
      }
    }

    return this.tokens;
  }

  // Helper methods for tokenizing, such as processIndentation, skipComment, processString, etc.
}

module.exports = Lexer;
