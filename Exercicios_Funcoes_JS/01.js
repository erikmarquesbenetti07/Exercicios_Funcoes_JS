// Função para converter de Celsius para Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Função para converter de Fahrenheit para Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Função para exibir o menu e lidar com a escolha do usuário
  function showMenu() {
    console.log("Escolha a conversão desejada:");
    console.log("1. Celsius para Fahrenheit");
    console.log("2. Fahrenheit para Celsius");
  
    const choice = prompt("Digite o número da opção desejada:");
  
    if (choice === "1") {
      const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
      const fahrenheit = celsiusToFahrenheit(celsius);
      console.log(`${celsius} graus Celsius são equivalentes a ${fahrenheit} graus Fahrenheit.`);
    } else if (choice === "2") {
      const fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
      const celsius = fahrenheitToCelsius(fahrenheit);
      console.log(`${fahrenheit} graus Fahrenheit são equivalentes a ${celsius} graus Celsius.`);
    } else {
      console.log("Opção inválida. Por favor, escolha 1 ou 2.");
    }
  }
  
  // Chamar a função para exibir o menu
  showMenu();
  