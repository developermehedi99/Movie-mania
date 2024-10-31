"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(12, 34);
const addArray = (a, b) => a - b;
// objects --> function --> method
const richMan = {
    name: 'bill gets',
    money: 0,
    business(money) {
        return `total money is: ${this.money + money}`;
    }
};
const arrayNum = [23, 43, 74, 25];
const newArr = arrayNum.map((num) => num * num);
