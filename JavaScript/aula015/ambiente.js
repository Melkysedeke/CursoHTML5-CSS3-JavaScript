let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

num[3] = 6
console.log(`Nosso vetor é o ${num}`)
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`Tamanho do nosso vetor é o ${num.length}`)
num.sort()
console.log(`Nosso vetor é o ${num}`)
for (c=0;c<num.length;c++){
    console.log(num[c])
}