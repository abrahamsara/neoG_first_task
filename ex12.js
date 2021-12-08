var superman={
    name:"superman",
    power:"flight",
    costumeColor:"blue",
    strength:0,
    stealth:0,
    intelligence:100
}

var batman={
    name:"batman",
    power:"martil arts",
    costumeColor:"black",
    strength:100,
    stealth:100,
    intelligence:1000
}
console.log(superman.strength)
console.log(batman.strength)
console.log(superman.stealth)
console.log(batman.stealth)
console.log(superman.strength>batman.strength);
console.log(superman.stealth>batman.stealth);

let superheros=[superman.batman]

for (let i=0;i<superheros.length;i++){
    let currenthero=superheros[i]
    console.log(currenthero.name)
    console.log(currenthero.costumeColor)
}