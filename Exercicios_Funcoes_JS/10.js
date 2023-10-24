function somaImposto(taxaImposto, custo) {
  // Calcula o valor do imposto a ser adicionado
  const imposto = (taxaImposto / 100) * custo;
  
  // Calcula o custo total após a inclusão do imposto
  const custoTotal = custo + imposto;

  // Retorna o custo total
  return custoTotal;
}

// Exemplo de uso da função
const taxaImposto = 10; // Taxa de imposto de 10%
const custo = 100;     // Custo original do item

const custoComImposto = somaImposto(taxaImposto, custo);

console.log(`O custo do item com ${taxaImposto}% de imposto é: R$${custoComImposto}`);
