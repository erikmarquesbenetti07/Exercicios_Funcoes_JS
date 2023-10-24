function contarDigitos(numero) {
  // Converte o número para uma string e usa o método length para contar os dígitos
  return Math.abs(numero).toString().length;
}

// Exemplo de uso da função
const numero = 12345; // Substitua pelo número que desejar

const quantidadeDeDigitos = contarDigitos(numero);

console.log(`O número ${numero} tem ${quantidadeDeDigitos} dígitos.`);
