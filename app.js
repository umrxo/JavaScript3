//start 1

let x = +prompt('Введите число')

for(let i = 1; x>=i;i++){
    if(i == 1){
        console.log('banana '+i);
    }else{
        console.log('bananas '+i);
    }
}

//end 1


//start 2

let sum = 0
let count = +prompt("Введите количество циклов");

for(let i = 0;i<=count;i++){
    if(i % 2 == 0){
       sum = sum + i;
    }
}alert("Сумма четных чисел = " + sum);



//end 2


//start 3

let num = +prompt('Введите число')
let pow = +prompt('Введите степень')
let answer = 1

for(let i = 1;i <= pow;i++){
    answer *= num
}console.log('Ответ = ' + answer);


//end 3