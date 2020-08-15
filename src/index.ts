import Lexer from "./parser/Lexer";
import Expression from "./ast/Expression";
import Parser from "./parser/Parser";


const source:string = "0.1+0.2";

const tokens = new Lexer(source).tokenize();

for(const token of tokens) {
    console.log(token.toString());
}

const expressions:Array<Expression> = new Parser(tokens).parse();

for(const expression of expressions){
    console.log(expression+'='+expression.eval());
}


