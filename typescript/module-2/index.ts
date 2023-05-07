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


//generics

const numbers: Array<number> = [1, 2, 3, 4, 5, 6];

//custom generics template

type custome_generic<T> = Array<T> // T mane jekono type hote pare

const istring: custome_generic<string> = ["aa"];

//generic tupple

type genericTopple<X, Y> = [X, Y];
interface anyInterface<U,T>{
    name: T,
    numbers: U
}

const check_kori: genericTopple<number, string> = [1, "hello"];

// for object with custom type same for interface

type customObject = {
    name: string,
    age:number
}

const responce: genericTopple<customObject, string> = [{
    name: "shahid",
    age:12
},
"hello fellas"
]
// generic with interface

interface customInterface<T,U = undefined>{
    name: T,
    age: U
}

const responce_dui: customInterface<string, number> = {
    name: "shahid",
    age:20
}

//generic in funtion

const func_gen = <T>(arg: T): T => {
    return arg;
}
console.log(func_gen("string"));

// constrains in generics

type users = {
    name: string,
    age: number,
    other:string
}

const userData:users = {
    name: "shahid",
    age: 10,
    other:"hello"
}

// constrains set in generics mane generic diye bole dilam je eigula thakte hobe
// protome ki ki thakte hobe setar ekta interface banabo

interface eigula_thakte_hobe{
    name: string,
    age:number
}
//ekhn function e applay korlam
const applay_korlam = <T extends eigula_thakte_hobe>(arg: T): T => {
    return arg;
}
applay_korlam(userData);


function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  console.log(getArrayItem(users, 0, 'name'))
