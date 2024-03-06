function task1() {
    for (let i = 1; i <= 10; i++){
        console.log(';)'.repeat(i));
    }
}

function task2(n) {
    counter = 0;
    while (n > 49) {
        n /= 2;
        counter += 1;
    }
    return counter;
}

for (let i = 70; i > 39; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

function task4() {
    let counter = 1, sum=0;
    while (counter < 101) { 
        sum += counter;
        counter += 1;
    }
    return sum;
}

//console.log(task1());
//console.log(task2(1000));
//console.log(task3());
//console.log(task4());