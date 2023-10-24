// Defina o número de lançamentos
const numLancamentos = 1000000;

// Objeto para armazenar a contagem de cada número
const contagem = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

// Simular os lançamentos e contar a frequência
for (let i = 0; i < numLancamentos; i++) {
  const resultadoLancamento = Math.floor(Math.random() * 6) + 1; // Gera números de 1 a 6
  contagem[resultadoLancamento]++;
}

// Exibir a frequência de cada número
for (let numero = 1; numero <= 6; numero++) {
  const frequencia = (contagem[numero] / numLancamentos) * 100;
  console.log(`Número ${numero}: ${frequencia.toFixed(2)}%`);
}
