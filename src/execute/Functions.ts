
import Function from './Function'
import SinFunction from "./default/SinFunction";
import CosFunction from "./default/CosFunction";
import AbsFunction from "./default/AbsFunction";
import AtanFunction from "./default/AtanFunction";
import ExpFunction from "./default/ExpFunction";
import LnFunction from "./default/LnFunction";
import RoundFunction from "./default/RoundFunction";
import SqrtFunction from "./default/SqrtFunction";
import SqrFunction from "./default/SqrFunction";
import MinFunction from "./default/MinFunction";
import MaxFunction from "./default/MaxFunction";

export default class Functions{

    private static functions:Record<string, Function> = {
        "abs": new AbsFunction(),
        "atan": new AtanFunction(),
        "cos": new CosFunction(),
        "sin": new SinFunction(),
        "exp": new ExpFunction(),
        "ln": new LnFunction(),
        "round": new RoundFunction(),
        "sqrt": new SqrtFunction(),
        "sqr": new SqrFunction(),
        "min": new MinFunction(),
        "max": new MaxFunction(),
    };

    public static isExists(key:string):boolean{
        return !!Functions.functions[key];

    }

    public set(key:string, value:Function){
        Functions.functions[key]=value;
    }

    public static get(key:string):Function{
        if(!Functions.isExists(key.toLowerCase())){
            throw new Error("Function with name: "+key+" does not exist");
        }
        return Functions.functions[key.toLowerCase()];
    }

}
