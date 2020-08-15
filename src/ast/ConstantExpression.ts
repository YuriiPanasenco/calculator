import Expression from "./Expression";
import Constants from "../execute/Constants";
import Value from "../execute/Value";


export default class ConstantExpression implements Expression{

    private readonly name:string;


    constructor(name: string) {
        this.name = name;
    }

    eval(): Value {
        return Constants.get(this.name);
    }

    toString(){
        return this.name;
    }
}
