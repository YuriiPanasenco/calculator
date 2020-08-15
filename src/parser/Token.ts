
import TokenType from "./TokenType";

export default class Token {

    public readonly type:TokenType;
    public readonly text:string;

    constructor(type?: TokenType, text?: string) {
        this.type = type;
        this.text = text;
    }

    public toString():string{
        if(this.text){
            return TokenType[this.type] + ": " + this.text;
        }else{
            return TokenType[this.type];
        }
    }

}
