//premitive type : string,number,boolean,null,undefined,bigint,symbol

const address: string = "test address";
const one: number = 1;
const isAdmin: boolean = true;
const users: null = null;
const parking_area: undefined = undefined;
// let big: bigint = 12345678901234567890n; minimum => es2020

//arry and tupple

const names: string[] = ["hello", "this", "is", "my", "name"];
const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(number);


// tuple

let couple: [string, string] = ["habil", "habila"];
couple[1] = "habilaa";
let test_kapol: [string, string, number] = ["hello", "this", 420];

console.log(test_kapol);

//object,literal type and optional type

//normal object type declaration
const car: {
    chaka: number,
    motor: string,
    tel_ase: boolean,
    ac_ase:boolean
} = {
    chaka: 2,
    motor: "volkan",
    tel_ase: true,
    ac_ase:false
}

//literal type and optional type declaration, mon moto ekta type banano jabe ja seta holo litaral type

const car_number_dui: {
    mon_moto_type:"ei lita vai",
    chaka: number,
    motor: string,
    tel_ase: boolean,
    ac_ase?:boolean
} = {
    mon_moto_type:"ei lita vai",
    chaka: 2,
    motor: "volkan",
    tel_ase: true,
    ac_ase: false // ei lok re na dile o cholbo 47 number line e optional kora
    
}
// ei bar asi normal function ar arrow function a

//arrow function the modern pola
const arrow_func = (num:number, num_dui:number):number => {
    return num + num_dui;
}
// normal function the old khet

function normal_func(num: number, num_dui: number): number{
    return num + num_dui;
}

// object er modde function er khela

let notun_pola: {
    naam: string;
    beton: number;
    beton_baraw(baraisi: number): number;       
} = {
    naam: "kabila",
    beton: 5000,
    beton_baraw(baraisi: number) {
        return this.beton + baraisi;
    }
}

//spred,rest operator er khela

const notun_jayga: string[] = ["notin", "jayga"];
const puran_jayga: string[] = ["puran", "jayga"];
notun_jayga.push(...puran_jayga);
console.log(notun_jayga);

//rest er khela suru

const bondhu = (...onkbondhu:string[]): void => {
    onkbondhu.map((ekta_bondhu: string) => console.log(`Hi kemon aso ${ekta_bondhu}`));
}

bondhu("tamim", "shahid", "priya", "adiba");

// alias use korar system

const ekta_object = {
    name: "kamal mia",
    age:"55"
}
const { name: f_name ,age:boyos} = ekta_object; // alias use korlam ei line a
console.log(f_name,boyos);

//type lias and function er type alias

type common = {
    mon_moto_type: string,
    chaka: number,
    motor: string,
    tel_ase: boolean,
    ac_ase:boolean
}

const car_number_tin:common = { //type alias use korlam
    mon_moto_type:"ei lita vai",
    chaka: 2,
    motor: "volkan",
    tel_ase: true,
    ac_ase: false // ei lok re na dile o cholbo 47 number line e optional kora
    
}

//function er belya type alias

type callbacktype = (number_one: number, number_two: number) => void;
const calculator = (x: number, y: number, calculate: callbacktype) => {
    return calculate(x,y);
}
calculator(10, 10, (number_one, number_two) => {
    console.log(number_one + number_two)
})

//union,intersection,null type,unknown type,never type

type noob_developer = {
    name:string
}
type jr_developer = noob_developer & { // <== intersaction '&' used
    exp:number
}
type sr_developer = jr_developer &{ // <== intersaction '&' used
    ldr_skill:number
}

const developer: sr_developer = {
    name: "shahid",
    exp: 2,
    ldr_skill:3
}

// null unknown never

// null : amra function er modde null pathaite pare tsconfig edit kore like func(null)

//unkown type

function ke_eida(x: unknown): void{
    console.log(typeof x);
}
ke_eida("ami string xD")
ke_eida(34)
