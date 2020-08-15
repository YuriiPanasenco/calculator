import Expression from "./Expression";


export default class BinaryExpression implements Expression{

    private readonly expr1:Expression;
    private readonly expr2:Expression;

    private readonly operation:string;

    constructor(operation: string, expr1: Expression, expr2: Expression) {
        this.operation = operation;
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    eval(): number {
        let res;
        switch (this.operation){
            case "*": res = this.expr1.eval() * this.expr2.eval();  break;
            case "/": res = this.expr1.eval() / this.expr2.eval();  break;
            case "-": res = this.expr1.eval() - this.expr2.eval();  break;
            case "+":
            default:
                res = this.expr1.eval() + this.expr2.eval();  break;
        }
        return res;
    }


    toString(){
        return "("+this.expr1.toString()+this.operation+this.expr2.toString()+")";
    }

}
