import Token from "./Token";
import Expression from "../ast/Expression";
import TokenType from "./TokenType";
import NumberExpression from "../ast/NumberExpression";
import BinaryExpression from "../ast/BinaryExpression";
import UnaryExpression from "../ast/UnaryExpression";
import ConstantExpression from "../ast/ConstantExpression";


export default class Parser{

    private static EOF = new Token(TokenType.EOF);

    private readonly tokens:Array<Token>;

    private pos:number=0;

    constructor(tokens: Array<Token>) {
        this.tokens = tokens;
    }

    parse():Array<Expression>{
        const result:Array<Expression> = new Array<Expression>();

        while (!this.match(TokenType.EOF)){
            result.push(this.expression());
        }

        return result;
    }

    private expression():Expression{
        return this.additive();
    }

    private additive():Expression{
        let expr = this.multiplicative();
        while (true){
            if(this.match(TokenType.PLUS)){
                expr = new BinaryExpression('+',expr, this.multiplicative());
            }else if(this.match(TokenType.MINUS)){
                expr = new BinaryExpression('-',expr, this.multiplicative());
            }else {
                break;
            }
        }
        return expr;
    }

    private multiplicative():Expression{
        let expr = this.unary();
        while (true){
            if(this.match(TokenType.STAR)){
                expr = new BinaryExpression('*',expr, this.unary());
            }else if(this.match(TokenType.SLASH)){
                expr = new BinaryExpression('/',expr, this.unary());
            }else {
                break;
            }
        }
        return expr;
    }

    private unary():Expression{
        if(this.match(TokenType.MINUS)){
            return new UnaryExpression('-',this.primary());
        }else if(this.match(TokenType.PLUS)){
            return this.primary();
        }
        return this.primary();
    }

    private primary():Expression{
        const current = this.get(0);
        if(this.match(TokenType.NUMBER)){
            return new NumberExpression(parseFloat(current.text));
        }else if(this.match(TokenType.WORD)){
            return new ConstantExpression(current.text);
        }else if(this.match(TokenType.LPAREN)){
            const res = this.expression();
            this.match(TokenType.RPAREN);
            return res;
        }
        throw new Error("Unknown expression");
    }


    private match(type:TokenType):boolean{
        const current = this.get(0);
        if(current.type != type){
            return false;
        }
        this.pos++;
        return  true;
    }

    private get(relativePosition:number):Token{
        const position = this.pos+relativePosition;
        if(position>=this.tokens.length){
            return Parser.EOF;
        }
        return this.tokens[position];
    }

}
