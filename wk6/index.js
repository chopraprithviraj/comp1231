console.log('It Works')


function favAnimal(animal) {
    console.log('my favourite animal is' , animal)
}

favAnimal('Goose')

function random(num1) {
    return Math.floor(Math.random() * num1)
}

const randomNum = random(30)
console.log(randomNum)

function sum (num1 , num2){
    return num1 + num2
}
console.log(sum(4, 5))

function collectionUserData(ip, city, browser) {
    console.log(
        `${ip} : ${city} : ${browser}`
    )
}

collectionUserData('8.8.8.8', 'Winnipeg', 'Tor')

function getUserEmail(email) {
    console.log(
        `User email is : ${email}`
    )
}

getUserEmail('PrithviRaj.Chopra@georgebrown.ca')

function cube(num){
    return Math.cbrt(num)
}

console.log(cube(8))

function add7(num){
    return num + 7
}
console.log(add7(7))

const alertMe = document.querySelector('button')
console.log(alertMe)

alertMe.onclick = function(){
    alert( `Welcome`)
}