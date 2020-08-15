import Value from "./Value";


export default class NumberValue implements Value{

    private readonly value:number;

    constructor(value: number) {
        this.value = value;
    }

    asNumber(): number {
        return this.value;
    }

    asString(): string {
        if(this.value==0){
            return "0";
        }
        return this.value.toString();
    }

    toString(){
        return this.asString();
    }

}
