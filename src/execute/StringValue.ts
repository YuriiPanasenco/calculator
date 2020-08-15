import Value from "./Value";


export default class StringValue implements Value{

    private readonly value:string;

    constructor(value: string) {
        this.value = value;
    }

    asNumber(): number {
        let res:number = parseFloat(this.value);
        if(!isNaN(res)){
            return res;
        }
        throw new Error("Can not translate to number: "+this.value);
    }

    asString(): string {
        return this.value;
    }

    toString(){
        return this.asString();
    }

}
