import Function from '../Function';
import NumberValue from "../NumberValue";
import Value from "../Value";

export default class MaxFunction implements Function{

    execute(args: Array<Value>): Value {
        if(args.length!=2){
            throw new Error("Two arg expected");
        }
        return new NumberValue(Math.max(args[0].asNumber(), args[1].asNumber()));
    }
}
