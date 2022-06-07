function sum() {
    let sum = 0
    for(let i=100; i<1001; i++) {
        if(i%3 == 0 && (i+3)%10 == 0) {
            console.log(i)
            sum = sum + i
        }
    }
    console.log(sum)
}

sum()