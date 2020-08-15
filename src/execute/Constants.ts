import Value from "./Value";
import NumberValue from "./NumberValue";


export default class Constants{

    private static constants:Record<string, Value> = {
        "PI":new NumberValue(Math.PI),
        "E":new NumberValue(Math.E),
    };

    public static isExists(key:string):boolean{
        return !!Constants.constants[key];

    }

    public set(key:string, value:Value){
        Constants.constants[key]=value;
    }

    public static get(key):Value{
        if(!Constants.isExists(key)){
            throw new Error("Constant with name: "+key+" does not exist");
        }
        return Constants.constants[key];
    }

}
