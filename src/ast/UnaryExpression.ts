import Expression from "./Expression";
import Value from "../execute/Value";
import NumberValue from "../execute/NumberValue";


export default class UnaryExpression implements Expression{

    private expr:Expression;
    private operation:string;


    constructor(operation: string, expr: Expression) {
        this.operation = operation;
        this.expr = expr;
    }

    eval(): Value {
        let res:number;
        switch (this.operation){
            case "-": res = -this.expr.eval().asNumber();  break;
            case "+":
            default:
                res = this.expr.eval().asNumber();  break;
        }
        return new NumberValue(res);
    }

    toString(){
        return this.operation+this.expr.toString();
    }
}
