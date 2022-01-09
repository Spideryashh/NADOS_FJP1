let arr = [
    {name : "a", age: 17, gender:"M" },
    {name : "b", age: 19, gender:"F" },
    {name : "c", age: 19, gender:"M" },
    {name : "d", age: 18, gender:"F" },
    {name : "e", age: 23, gender:"F" },
    {name : "f", age: 15, gender:"M" },
    {name : "g", age: 13, gender:"M" },
    {name : "h", age: 22, gender:"F" }
]

//age of all ladies 
let ladies = arr.filter(v => v.gender == "F").map(v => v.age);
console.log(ladies);