function addition(...numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return (total)
}

const result = addition(10, 20, 30, 40, 50);

console.log(result);