function isPerfectNumber(number) {
  if (number <= 1) {
    return false;
  }

  let sumOfDivisors = 1; // 1 é sempre um divisor

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      sumOfDivisors += i;
      if (i !== number / i) {
        sumOfDivisors += number / i;
      }
    }
  }

  return sumOfDivisors === number;
}

function displayPerfectNumbersUpToN(n) {
  const perfectNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
}

const n = parseInt(prompt("Digite um número inteiro positivo (n):"));

if (n >= 2) {
  const perfectNumbers = displayPerfectNumbersUpToN(n);
  console.log(`Números perfeitos até ${n}: ${perfectNumbers.join(", ")}`);
} else {
  console.log("Por favor, digite um número inteiro positivo maior ou igual a 2.");
}
