// Program ::= Statement*

// Statement
class Statement {}

// Assignment ::= Identifier "=" Expression ";"
class Assignment extends Statement {
  constructor(identifier, expression) {
    super();
    this.identifier = identifier;
    this.expression = expression;
  }
}

// IfStatement
class IfStatement extends Statement {
  constructor(expression, ifBlock, elseifBlocks, elseBlock) {
    super();
    this.expression = expression;
    this.ifBlock = ifBlock;
    this.elseifBlocks = elseifBlocks;
    this.elseBlock = elseBlock;
  }
}

// Loop
class Loop extends Statement {}

// ForLoop ::= "for" "(" Assignment ";" Expression ";" Assignment ")" Block
class ForLoop extends Loop {
  constructor(assignment1, expression, assignment2, block) {
    super();
    this.assignment1 = assignment1;
    this.expression = expression;
    this.assignment2 = assignment2;
    this.block = block;
  }
}

// WhileLoop ::= "while" "(" Expression ")" Block
class WhileLoop extends Loop {
  constructor(expression, block) {
    super();
    this.expression = expression;
    this.block = block;
  }
}

// Block ::= "{" Statement* "}"
class Block {
  constructor(statements) {
    this.statements = statements;
  }
}

// Expression
class Expression {}

// Value
class Value extends Expression {}

// NumericValue ::= Digit+
class NumericValue extends Value {
  constructor(value) {
    super();
    this.value = value;
  }
}

// StringValue ::= '"' .*? '"'
class StringValue extends Value {
  constructor(value) {
    super();
    this.value = value;
  }
}

// BooleanValue ::= "true" | "false"
class BooleanValue extends Value {
  constructor(value) {
    super();
    this.value = value;
  }
}

// NullValue ::= "null"
class NullValue extends Value {}

// Identifier ::= Letter (Letter | Digit | "_")*
class Identifier extends Expression {
  constructor(name) {
    super();
    this.name = name;
  }
}

// FunctionCall ::= Identifier "(" (Expression ("," Expression)*)? ")"
class FunctionCall extends Expression {
  constructor(identifier, args) {
    super();
    this.identifier = identifier;
    this.args = args;
  }
}

// ReturnStatement ::= "return" Expression? ";"
class ReturnStatement extends Statement {
  constructor(expression) {
    super();
    this.expression = expression;
  }
}

// TryCatchBlock ::= "try" Block ("catch" "(" Identifier ")" Block)?
class TryCatchBlock extends Statement {
  constructor(tryBlock, catchIdentifier, catchBlock) {
    super();
    this.tryBlock = tryBlock;
    this.catchIdentifier = catchIdentifier;
    this.catchBlock = catchBlock;
  }
}

// CustomType ::= "class" Identifier Block
class CustomType extends Statement {
  constructor(identifier, block) {
    super();
    this.identifier = identifier;
    this.block = block;
  }
}

// BinaryOperator ::= "+" | "-" | "*" | "/" | "%" | "==" | "!=" | ">" | "<" | ">=" | "<=" | "&&" | "||"
class BinaryOperator {}

// UnaryOperator ::= "-" | "!" | "++" | "--"
class UnaryOperator {}

// Export the Parser class
module.exports = {
  Assignment,
  IfStatement,
  ForLoop,
  WhileLoop,
  Block,
  NumericValue,
  StringValue,
  BooleanValue,
  NullValue,
  Identifier,
  FunctionCall,
  ReturnStatement,
  TryCatchBlock,
  CustomType,
};
