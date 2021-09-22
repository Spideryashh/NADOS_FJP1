let args = process.argv;
let n = parseInt(args[2]); //input

let isprime = true;
for(let div = 2;div*div<=n;div++){
    if(n%div==0){
        isprime = false;
        break;
    }
}
if(isprime == true){
    console.log(n+" is prime");
}else{
    console.log(n+" is not prime");
}