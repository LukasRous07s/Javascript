/*
let uzivatel = {
    id: 1,
    username: "uzivatel",
    password: "heslo123",
    age: 23,
    color: "blue",
    number: 33,
    male: false,
}

console.log(uzivatel.male)
console.log(uzivatel.color)

uzivatel.age = 25
*/


/* 
spocitej delku zadaneho textu bez pouziti specialnich funkci
let text = prompt("zadejte text")
let pocet = 0


for(let znak of text){
    pocet++
}
console.log(pocet)
*/

// v poli slov vypsat pocet pismen pro kazde slovo a prepsat tuto hodnotu poctem pomoci map funkce

let pole = ["jmeno", "mango", "jahoda", "strom", "string"]
pole.map((nums) => pole.push(nums.length))

console.log(pole)