import Value from "./Value";


export default interface Function{
    execute(args:Array<Value>):Value;
}
