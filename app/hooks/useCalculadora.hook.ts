
const useCalculadora = () => {
  const calculaTMB = (sexo: string, peso: number, altura: number, idade: number) => {
    if (sexo === 'M') {
      return (10 * peso) + (6.25 * altura) - (5 * idade) + 5
    } else {
      return (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }
  }

  const calculaGET = (tmb: number, nivelAtividade: number) => {
    return tmb * nivelAtividade;
  }

  const calculaIMC = (peso: number, altura: number) => {
    return peso / ((altura * 2) / 100);
  }

  const calculaAguaDiaria = (peso: number) => {
    return 45 * peso;
  }

  const calculaCaloriasParaObjetivo = (objetivo: string, get: number) => {
    switch (objetivo) {
      case 'perderPeso':
        return get - 500;
      case 'ganharPeso':
        return get + 500
      default:
        return get;
    }
  }

  const calculaQuantidadesPorObjetivo = (objetivo: string, caloriasParaObjetivo: number,  peso: number) => {
    let carboidratos: number;
    let proteinas: number;
    let gorduras: number;

    switch (objetivo) {
      case 'perderPeso':
        gorduras = peso * 0.7; // 0,7g de gordura por kg de peso
        proteinas = peso * 1.5; // 1,5g de proteína por kg de peso
        carboidratos = (caloriasParaObjetivo - (gorduras * 9 + proteinas * 4)) / 4; // Carboidratos preenchem as calorias restantes
        break;
      case 'ganharPeso':
        gorduras = peso * 1; // 1g de gordura por kg de peso
        proteinas = peso * 2.2; // 2,2g de proteína por kg de peso
        carboidratos = (caloriasParaObjetivo - (gorduras * 9 + proteinas * 4)) / 4; // Carboidratos preenchem as calorias restantes
        break;
      default:
        gorduras = peso * 1; // 1g de gordura por kg de peso
        proteinas = peso * 2; // 2g de proteína por kg de peso
        carboidratos = (caloriasParaObjetivo - (gorduras * 9 + proteinas * 4)) / 4; // Carboidratos preenchem as calorias restantes
        break;
    }

    return {
      gorduras,
      proteinas,
      carboidratos
    }
  }

  const categoriasIMC = (imc: number) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 24.9) {
      return "Peso normal";
    } else if (imc < 29.9) {
      return "Sobrepeso";
    } else if (imc < 34.9) {
      return "Obesidade grau I";
    } else if (imc < 39.9) {
      return "Obesidade grau II";
    } else {
      return "Obesidade grau III (obesidade mórbida)";
    }
  };

  return {
    calculaTMB,
    calculaGET,
    calculaIMC,
    categoriasIMC,
    calculaAguaDiaria,
    calculaCaloriasParaObjetivo,
    calculaQuantidadesPorObjetivo
  }
};

export default useCalculadora;
