let args = process.argv;
let n = parseInt(args[2]);

// check odd and even code
if(n%2==0){
    console.log(n+" is even ");
}else{
    console.log(n+" is odd");
}