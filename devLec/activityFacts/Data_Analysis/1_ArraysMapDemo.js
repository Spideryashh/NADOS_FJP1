// map  takes input a callback fn(with  value and index)
// map itself is a function
// 
// map return an array

let arr = [2,5,9,8,15,11,6];
let sqarr=arr.map(function(v,i){
    console.log(v + " @ " + i);
    return v*v;
});
console.log(sqarr);