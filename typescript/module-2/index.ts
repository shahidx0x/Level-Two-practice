//type asertion  jeta holo amra typescript er theke besi buji , nijera e type set kore dei
let email: any = "shahid@dev.com";
 (email as string).length // eita tsx e  use kora jabe
// <string>email.length => eta normally nodejs a use kora jabe 2ta e same kaj

function sokal_sokal_pracice(x: number | string): number | string | undefined{
    if (typeof x === "number") return x;
    if (typeof x === "string") return `string ${x}`;
}


console.log(sokal_sokal_pracice(23) as number); // amra jani oy ki return korbo tai boila dila age theke nicher ta o same
console.log(<number>sokal_sokal_pracice(430)); //ei babe o dewa jay but tsx e kaj korbe na
console.log(<string>sokal_sokal_pracice("tsx e kaj korbe na kintu"));
console.log(sokal_sokal_pracice("hello") as string);

//interface vs type alias

// interface use korbo  object related kaj e r type alias use korbo premitive data er belay besi . vice versa use kora jabe but efficient hobe na code readability kom thakbe,complex hoye jabe

interface Ikicci{
    pola_ki_valo:boolean
}

interface INotunUser extends Ikicci{
    name: string,
    age:number
}

let notun_maal: INotunUser = {
    name: "shahid",
    age: 34,
    pola_ki_valo:true
}

//array function eigula te type alias use kora efficient

//using type alias
type notunJinis = (n: number, nn: number) => void;
const usekoramare:notunJinis = (x,y) => console.log(x,y);

//using interface

interface ISameJinis{
    (eida: number, rekta: number) : number
}

const usekorInterface: ISameJinis = (x, y) => {
    return x; // number
}