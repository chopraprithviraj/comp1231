// if/else statement
let age = 20;
function checkAge0() {
    if (age >= 18) {
        console.log(true);
    }else {
        console.log(false);
    }   
}
checkAge0();

//using ? operator
function checkAge1(){
    let reqAge = (age >= 18) ? 'Permitted' : 'Did parents allow you ?';
    console.log(reqAge);
}
checkAge1()

//Using min (a,b) function
function min(a,b){
    if(a < b){
        console.log('a is less then b');
    }else{
        console.log('b is more than a');
    }
}
min(15,20);

// using ? Operator
function min(a,b){
    let msg =  a < b ? `${a} is less then ${b}`: `${b} is more than ${a}`;
    console.log(msg);
}

