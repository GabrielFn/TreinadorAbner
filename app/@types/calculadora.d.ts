interface CalculadoraContextTypes {
  state: InitialStateCalculadora;
  dispatch: React.Dispatch<any>;
  saveCalcSimulation: (props: SaveCalcSimulationProps) => void;
  salvarPlanoAlimentar: (quantidadeRefeicoes: number) => void;
}

interface InitialStateCalculadora {
  tmb: number;
  get: number;
  imc: number;
  aguaDiaria: number;
  caloriasParaObjetivo: number;
  awsers: AwsersTypes;
  planoAlimentar: PlanoAlimentarTypes | null;
}

interface PlanoAlimentarTypes {
  quantidadesTotais: QuantidadesTypes;
  quantidadesPorRefeicao: QuantidadesTypes;
}

interface QuantidadesTypes {
  carboidratos: number;
  proteinas: number;
  gorduras: number;
}

interface AwsersTypes {
  sexo: string;
  idade: number;
  peso: number;
  altura: number;
  objetivo: string;
  nivelAtividade: number,
  quantidadeRefeicoes: number
}