// // Description : find the output of the following: 
// function f(){
//     console.log(arguments);
// }

// function f(a,b) {
//     return a+b;
// }

// console.log(f(2,3,4,5));

// function f(x,y,z,t) {
//     return x + y + z + t; 
// }
// console.log(f(2,3,4,5));

// // output : 14 14 [because last function is being pointed which returns x+y+z+t]

// //----------------------------------------------------------
// // Sample 

// function fn(param1,param2) {
//     console.log("inside fn" , param1 , param2);
// }
// fn("Hello ","hi");
// // if there is something -->
// // default --> undefined
// fn("Hello");
// // fn()
// fn("Hello" , "HI" , "By");
// //arguments 
// // emulate
// function fn(param1,param2) {
//     console.log(arguments);
//     console.log(param1,param2);
// }
// fn("Hello", "Hi");
// // if there is something -->
// // default --> undefined
// fn("Hello");
// // fn()
// fn("Hello" , "HI" , "By");
//-----------------------

// console.log("Before declaration" , a); // undefined
// var a ;
// console.log("Afrer Declaration" , a); // undefined
// a = 10;
// console.log("after initialization" , a); // 10

// function fn(){ // seprate GEC(global execution stack) is made for function
//     console.log("Before declaration" , a); // undefined
//     var a ;
//     console.log("Afrer Declaration" , a); // undefined
//     a = 20;
//     console.log("after initialization" , a);
// }
// fn();

// ques
function fn() {
    console.log(a);
    var a ; 
    console.log(a);
    a = 20;
    if(true){
        var a = 30;
        console.log("35", a); // 30
    }
    console.log("After initialization 12", a); // 30 because var has function scope
}
fn()

function fn2() {
    console.log(a);
    var a ; // let a gives error because of temporal Deadzone
    console.log(a); 
    a = 20; 
    if(true){
        let a = 30;
        console.log("35", a); // 30
    }
    console.log("After initialization 12", a); //20
}
fn2()