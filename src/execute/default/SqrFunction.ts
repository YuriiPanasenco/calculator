import Function from '../Function';
import NumberValue from "../NumberValue";
import Value from "../Value";

export default class SqrFunction implements Function{

    execute(args: Array<Value>): Value {
        if(args.length!=1){
            throw new Error("One arg expected");
        }
        return new NumberValue(args[0].asNumber()**2);
    }
}
