const doubleIt = num => num * 2;
const add = (num1, num2) => num1 + num2;
const give10 = () => 10;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const total = sum * diff;
    return total;
}

const result = doubleIt(50);
const result1 = add(10, 20);
const result2 = give10();
const result3 = doMath(15, 10);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);