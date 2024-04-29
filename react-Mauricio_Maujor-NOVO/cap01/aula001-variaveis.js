// ES6: const / let

const var1 = 10
console.log(var1)
//var1 = 100   // ERROR

let var2 = 100
{
    let var3 = 200
    console.log(var2)
    console.log(var3)
}
console.log(var2)
//console.log(var3)   // ERROR