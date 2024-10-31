
function add (num1 : number, num2 : number):number{
    return num1 + num2
}
add(12, 34);

const addArray=(a:number, b:number):number => a -b;

// objects --> function --> method

const richMan={
    name:'bill gets',
    money:0,
    business(money:number):string{
        return `total money is: ${this.money + money}`;
    }
}

const arrayNum : number[]=[23, 43,74,25];
const newArr:number[] = arrayNum.map((num:number):number => num * num);