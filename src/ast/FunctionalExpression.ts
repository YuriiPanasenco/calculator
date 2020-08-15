import Expression from "./Expression";
import Value from "../execute/Value";
import Functions from "../execute/Functions";

export default class FunctionalExpression implements Expression{

    private readonly name:string;
    private readonly args:Array<Expression> = new Array<Expression>();


    constructor(name: string, args?: Array<Expression>) {
        this.name = name;
        if(args) {
            this.args = args;
        }
    }

    public addArgument(arg:Expression){
        this.args.push(arg);
    }

    eval(): Value {
        const values = new Array(this.args.length);
        for(let i=0; i<this.args.length; i++){
            values[i]=this.args[i].eval();
        }

        return Functions.get(this.name).execute(values);
    }

    toString(){
        return this.name+"("+this.args.join(",")+")";
    }
}
