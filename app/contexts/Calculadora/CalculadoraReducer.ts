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
    sexo: ''
  }
};
  
function reducer(
  state = initialState,
  action: any
): InitialStateCalculadora {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default reducer;
