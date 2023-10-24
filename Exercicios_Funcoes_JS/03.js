// Função para identificar o maior número entre três números
function encontrarMaiorNumero(a, b, c) {
  return Math.max(a, b, c);
}

// Função para identificar o menor número entre três números
function encontrarMenorNumero(a, b, c) {
  return Math.min(a, b, c);
}

// Receber três números do usuário
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

// Chamar as funções para encontrar o maior e o menor número
const maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);
const menorNumero = encontrarMenorNumero(numero1, numero2, numero3);

// Exibir os resultados
console.log(`O maior número é: ${maiorNumero}`);
console.log(`O menor número é: ${menorNumero}`);
