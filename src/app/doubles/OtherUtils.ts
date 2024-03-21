export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length
}

export function toUpperCaseWithCb(arg: string, callBack: LoggerServiceCallBack) {
    if(!arg) {
        callBack('Invalid argument!');
        return;
    }
    callBack(`called function with ${arg}`)
    return arg.toUpperCase();
}

export class OtherStringUtils {

    public callExternalService(){
        console.log('Calling external service!!!');
    }

    public toUpperCase(arg: String) {
        return arg.toUpperCase()
    }

    public logString(arg: String) {
        console.log(arg);
    }


}