// Função para verificar se um número é primo
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

// Função para mostrar todos os números primos de 1 até n
function displayPrimesUpToN(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// Receber um número inteiro positivo n do usuário
const n = parseInt(prompt("Digite um número inteiro positivo (n):"));

if (n >= 1) {
  console.log(`Números primos de 1 até ${n}:`);
  displayPrimesUpToN(n);
} else {
  console.log("Por favor, digite um número inteiro positivo.");
}
