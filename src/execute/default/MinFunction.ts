import Function from '../Function';
import NumberValue from "../NumberValue";
import Value from "../Value";

export default class MinFunction implements Function{

    execute(args: Array<Value>): Value {
        if(args.length!=2){
            throw new Error("Two arg expected");
        }
        return new NumberValue(Math.min(args[0].asNumber(), args[1].asNumber()));
    }
}
