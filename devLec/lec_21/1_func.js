let args = process.argv;
let n = parseInt(args[2]);

for(let i=2;i<=n;i++){
    let isPrime = IsPrime(i);
    if(isPrime == true){
        console.log(i);
    }
}

function IsPrime(x){
    let isPrime = true;
    for(let div=2;div*div<=n;div++){
        if(x%div == 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}