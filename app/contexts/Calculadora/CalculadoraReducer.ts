export const initialState: InitialStateCalculadora = {
  tmb: 0,
  get: 0,
  imc: 0,
  aguaDiaria: 0,
  caloriasParaObjetivo: 0,
  awsers: {
    altura: 0,
    idade: 0,
    nivelAtividade: 0,
    objetivo: '',
    peso: 0,
    sexo: '',
    quantidadeRefeicoes: 0
  },
  planoAlimentar: null,
};
  
function reducer(
  state = initialState,
  action: any
): InitialStateCalculadora {
  switch (action.type) {
    case 'FILL_STORE':
      return {
        ...state,
        ...action.value
      }
    case 'SAVE_CALC_SIMULATION':
      return {
        ...state,
        tmb: action.tmb,
        get: action.get,
        imc: action.imc,
        aguaDiaria: action.aguaDiaria,
        caloriasParaObjetivo: action.caloriasParaObjetivo,
        awsers: action.awsers
      };
    case 'SALVAR_PLANO_ALIMENTAR':
      return {
        ...state, planoAlimentar: action.planoAlimentar, awsers: { ...state.awsers, quantidadeRefeicoes: action.quantidadeRefeicoes }
      }
    case 'LIMPA_PLANO_ALIMENTAR':
      return {
        ...state,
        planoAlimentar: null
      }
    default:
      return state;
  }
}

export default reducer;
