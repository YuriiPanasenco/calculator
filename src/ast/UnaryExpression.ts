import Expression from "./Expression";


export default class UnaryExpression implements Expression{

    private expr:Expression;
    private operation:string;


    constructor(operation: string, expr: Expression) {
        this.operation = operation;
        this.expr = expr;
    }

    eval(): number {
        let res;
        switch (this.operation){
            case "-": res = -this.expr.eval();  break;
            case "+":
            default:
                res = this.expr.eval();  break;
        }
        return res;
    }

    toString(){
        return this.operation+this.expr.toString();
    }
}
