function verificarPositivo(numero) {
  if (numero > 0) {
    return 'P'; // Retorna 'P' se for positivo
  } else {
    return 'N'; // Retorna 'N' se for zero ou negativo
  }
}

// Exemplo de uso da função
const valor = 10; // Você pode substituir este valor pelo que desejar

const resultado = verificarPositivo(valor);
console.log(`O resultado é: ${resultado}`);
