import Function from '../Function';
import NumberValue from "../NumberValue";
import Value from "../Value";

export default class SqrtFunction implements Function{

    execute(args: Array<Value>): Value {
        if(args.length!=1){
            throw new Error("One arg expected");
        }
        return new NumberValue(Math.sqrt(args[0].asNumber()));
    }
}
