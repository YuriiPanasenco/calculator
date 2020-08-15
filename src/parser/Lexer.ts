import Token from "./Token";
import TokenType from "./TokenType";


export default class Lexer{

    private tokens:Array<Token> = new Array<Token>();
    private input:string;

    private pos:number=0;


    private static OPERATOR_TOKENS : Record<string, TokenType> = {
        '+':TokenType.PLUS,
        '-':TokenType.MINUS,
        '*':TokenType.STAR,
        '/':TokenType.SLASH,
        '(':TokenType.LPAREN,
        ')':TokenType.RPAREN,
    };


    constructor(input: string) {
        this.input = input;
    }

    public tokenize():Array<Token> {
        while (this.pos<this.input.length){
            const current = this.peek(0);
            if(this.isNumber(current)){
                this.tokenizeNumber();
            }else if(Lexer.OPERATOR_TOKENS[current]){
                this.tokenizeOperator();
            }else{
                this.next(); //skip whitespaces
            }
        }
        return this.tokens;
    }

    private tokenizeNumber(){
        let current = this.peek(0);
        let tokenText = "";
        while (true){
            if(current == '.'){
                if(tokenText.indexOf('.')!=-1){
                    throw new Error("Invalid float number");
                }
            }else if(!this.isNumber(current)){
                break;
            }
            tokenText+=current;
            current=this.next();
        }
        this.tokens.push(new Token(TokenType.NUMBER, tokenText))
    }

    private tokenizeOperator(){
        const current = this.peek(0);
        const token = Lexer.OPERATOR_TOKENS[current];
        this.tokens.push(new Token(token));
        this.next();
    }


    private isNumber(value:string):boolean{
        return value >= '0' && value <= '9';
    }

    private next():string{
        this.pos++;
        return this.peek(0);
    }

    private peek(relativePosition:number):string{
        const position = this.pos+relativePosition;
        if(position>=this.input.length){
            return '\0';
        }
        return this.input.charAt(position);
    }

    private addToken(type:TokenType, text:string=""){
        this.tokens.push(new Token(type, text));
    }

}
