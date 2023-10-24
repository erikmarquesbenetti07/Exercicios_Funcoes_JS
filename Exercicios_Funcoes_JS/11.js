function converterHora(hora24, minutos) {
  let periodo = 'A.M.';
  let hora12;

  if (hora24 >= 12) {
    periodo = 'P.M.';
  }

  if (hora24 === 0) {
    hora12 = 12;
  } else if (hora24 > 12) {
    hora12 = hora24 - 12;
  } else {
    hora12 = hora24;
  }

  return `${hora12}:${minutos} ${periodo}`;
}

function exibirHoraConvertida() {
  const hora24 = parseInt(prompt("Digite a hora (0-23):"));
  const minutos = parseInt(prompt("Digite os minutos (0-59):"));

  if (hora24 >= 0 && hora24 <= 23 && minutos >= 0 && minutos <= 59) {
    const horaConvertida = converterHora(hora24, minutos);
    console.log(`Hora convertida: ${horaConvertida}`);
  } else {
    console.log("Por favor, digite uma hora e minutos válidos.");
  }
}

let continuar = true;

while (continuar) {
  exibirHoraConvertida();
  const resposta = prompt("Deseja converter outra hora? (S para Sim, qualquer tecla para Não)");
  continuar = resposta.toUpperCase() === 'S';
}
