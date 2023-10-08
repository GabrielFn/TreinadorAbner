interface CalculadoraContextTypes {
  state: InitialStateCalculadora;
  saveCalcSimulation: (props: SaveCalcSimulationProps) => void;
}

interface InitialStateCalculadora {
  tmb: number;
  get: number;
  imc: number;
  aguaDiaria: number;
  caloriasParaObjetivo: number;
  awsers: AwsersTypes;
}

interface AwsersTypes {
  sexo: string;
  idade: number;
  peso: number;
  altura: number;
  objetivo: string;
  nivelAtividade: number,
}