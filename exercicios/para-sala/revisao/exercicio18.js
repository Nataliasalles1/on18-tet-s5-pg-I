// reduce(): recebe uma array e retorna um valor só. Redutor.
// Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduz = num.reduce((acumulador,valorAtual) => acumulador + valorAtual)

console.log(reduz)