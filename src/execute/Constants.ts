

export default class Constants{

    private static constants:Record<string, number> = {
        "PI":Math.PI,
        "E":Math.E,
    };

    public static isExists(key:string):boolean{
        return !!Constants.constants[key];

    }

    public static get(key):number{
        if(!Constants.isExists(key)){
            throw new Error("Constant with name: "+key+" does not exist");
        }
        return Constants.constants[key];
    }

}
