
import Function from './Function'
import SinFunction from "./default/SinFunction";
import CosFunction from "./default/CosFunction";

export default class Functions{

    private static functions:Record<string, Function> = {
        "sin": new SinFunction(),
        "cos": new CosFunction(),
    };

    public static isExists(key:string):boolean{
        return !!Functions.functions[key];

    }

    public set(key:string, value:Function){
        Functions.functions[key]=value;
    }

    public static get(key):Function{
        if(!Functions.isExists(key)){
            throw new Error("Function with name: "+key+" does not exist");
        }
        return Functions.functions[key];
    }

}
