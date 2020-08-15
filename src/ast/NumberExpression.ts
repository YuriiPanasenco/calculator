import Expression from "./Expression";
import Value from "../execute/Value";
import NumberValue from "../execute/NumberValue";


export default class NumberExpression implements Expression{

    private readonly value:Value;

    constructor(value: number) {
        this.value = new NumberValue(value);
    }

    eval(): Value {
        return this.value;
    }

    toString(){
        return this.value.asString();
    }

}
