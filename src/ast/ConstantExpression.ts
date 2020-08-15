import Expression from "./Expression";
import Constants from "../execute/Constants";


export default class ConstantExpression implements Expression{

    private readonly name:string;


    constructor(name: string) {
        this.name = name;
    }

    eval(): number {
        return Constants.get(this.name);
    }

    toString(){
        return this.name;
    }
}
