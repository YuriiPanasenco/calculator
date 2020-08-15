import Expression from "./Expression";
import Value from "../execute/Value";
import NumberValue from "../execute/NumberValue";


export default class BinaryExpression implements Expression{

    private readonly expr1:Expression;
    private readonly expr2:Expression;

    private readonly operation:string;

    constructor(operation: string, expr1: Expression, expr2: Expression) {
        this.operation = operation;
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    eval(): Value {
        let res:number;
        const number1:number = this.expr1.eval().asNumber();
        const number2:number = this.expr2.eval().asNumber();
        switch (this.operation){
            case "*": res = number1 * number2;  break;
            case "/": res = number1 / number2;  break;
            case "-": res = number1 - number2;  break;
            case "+":
            default:
                res = number1 + number2;  break;
        }
        return new NumberValue(res);
    }


    toString(){
        return "("+this.expr1.toString()+this.operation+this.expr2.toString()+")";
    }

}
