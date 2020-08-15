import Expression from "./Expression";


export default class NumberExpression implements Expression{

    private readonly value:number;

    constructor(value: number) {
        this.value = value;
    }

    eval(): number {
        return this.value;
    }

    toString(){
        return this.value;
    }

}
