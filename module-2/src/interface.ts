{

// type alias
type User1 = {
    name: string;
    age:number;
}

const user: User1 = {
    name:'mehedi',
    age:23
}

type userWithRoll1 = User1 & { roll : string}
// interface
interface userWithRoll2 extends User1 {roll:string}

interface User2 {
    name:string;
    age:number
}
const newUser: userWithRoll2 ={
    name:'rana',
    age:24,
    roll:'developer'
}

// type alias
type roll1 = number[];
const add:roll1 = [2,5,76,8];
// type interface
interface roll2{
    [index : number] : number
 }
const add2: roll2 = [3,56,74,3];

}