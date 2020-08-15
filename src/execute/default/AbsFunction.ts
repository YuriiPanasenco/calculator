import Function from '../Function';
import NumberValue from "../NumberValue";
import Value from "../Value";

export default class AbsFunction implements Function{

    execute(args: Array<Value>): Value {
        if(args.length!=1){
            throw new Error("One arg expected");
        }
        return new NumberValue(Math.abs(args[0].asNumber()));
    }
}
