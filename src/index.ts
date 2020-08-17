import Lexer from "./parser/Lexer";
import Expression from "./ast/Expression";
import Parser from "./parser/Parser";

function calculate(source:string):number{
    const tokens = new Lexer(source).tokenize();
    const expressions:Array<Expression> = new Parser(tokens).parse();
    return expressions[0].eval().asNumber()
}

console.log(calculate("2+.4"));

export default calculate;

