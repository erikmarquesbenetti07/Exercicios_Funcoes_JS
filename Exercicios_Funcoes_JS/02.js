// Função para calcular a soma de três números
function soma(a, b, c) {
  return a + b + c;
}

// Função para calcular a média de três números
function media(a, b, c) {
  const total = soma(a, b, c);
  return total / 3;
}

// Exemplo de uso:
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

const resultadoSoma = soma(numero1, numero2, numero3);
const resultadoMedia = media(numero1, numero2, numero3);

console.log(`A soma dos números é: ${resultadoSoma}`);
console.log(`A média dos números é: ${resultadoMedia}`);
