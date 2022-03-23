// rearrang all even at front and odd at back

let arr = [1,2,3,4,5,6];

let odd = [];
let even = [];

let i = 0;
while(arr.length > 0 ){
    let val = arr.shift();
    if(val % 2 == 0){
        even.push(val);
    }else{
        odd.push(val);
    }
}

arr = even.concat(odd);
displayArray(arr);
displayArray(odd);
displayArray(even);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}