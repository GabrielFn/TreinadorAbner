
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

  return {
    calculaTMB,
    calculaGET,
    calculaIMC,
    calculaAguaDiaria,
    calculaCaloriasParaObjetivo
  }
};

export default useCalculadora;
