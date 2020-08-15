import Lexer from "./parser/Lexer";
import Expression from "./ast/Expression";
import Parser from "./parser/Parser";

export default function calculate(source:string):number{
    const tokens = new Lexer(source).tokenize();
    const expressions:Array<Expression> = new Parser(tokens).parse();
    return expressions[0].eval().asNumber()
}


