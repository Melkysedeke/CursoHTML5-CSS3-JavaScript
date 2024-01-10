let valores = [8,1,7,4,2,9]

// for (c=0;c<valores.length;c++){
//     console.log(valores[c])
// }

for (c in valores){
    console.log(valores[c])
}

let pos = valores.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}