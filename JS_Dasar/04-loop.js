/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i=2; i <= 100; i++) { 
    let PrimeNum = true

    if (i !=2 && i % 2 === 0) {
        PrimeNum = false;
    }

    for (let j=2; j <= 2; j++) {
    if (1 % j === 0)
    PrimeNum = false;
    }

    if (PrimeNum) {
    console.log(i)}
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;
let PrimeNum;

/// EDIT HERE
fiftiethPrime = 2;
let n = 2;

while (primeCounter < 50) {
    PrimeNum = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0 ) {
            PrimeNum = false;
        }
    }
        if (PrimeNum) {
            fiftiethPrime = n 
            primeCounter++
        }
        n++
    }

    console.log(fiftiethPrime)

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd

/// EDIT HERE
fiftiethOdd = 1
let n = 1

do  {
    if (n % 2 == 1) {
        fiftiethOdd = n
        oddCounter++
    }
    n++
}
while (oddCounter < 50)

    console.log(fiftiethOdd)
