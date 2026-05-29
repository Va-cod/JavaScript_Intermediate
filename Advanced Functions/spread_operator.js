let numbers = [10, 20, 50, 60];

function addition(num1, num2, num3){
    return (num1 + num2 + num3);
}

const result = addition(...numbers);

console.log(result);