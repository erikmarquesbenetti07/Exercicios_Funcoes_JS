function imprimirPadrao(n) {
  for (let i = 1; i <= n; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
      linha += j + " ";
    }
    console.log(linha);
  }
}

// Receber o valor de n do usuário
const n = parseInt(prompt("Digite um número inteiro (n):"));

if (!isNaN(n) && n >= 1) {
  imprimirPadrao(n);
} else {
  console.log("Por favor, digite um número inteiro positivo.");
}
