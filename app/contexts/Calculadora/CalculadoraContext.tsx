"use client";

import React, { PropsWithChildren, useEffect, useReducer } from "react";
import useCalculadora from "@/app/hooks/useCalculadora.hook";
import { useRouter } from "next/navigation";
import reducer, { initialState } from "./CalculadoraReducer";

export const CalculadoraContext = React.createContext<CalculadoraContextTypes>({
  saveCalcSimulation: () => null,
  state: initialState,
});

const calculadoraLocalState = JSON.parse(
  localStorage.getItem("calculadoraTreinadorAbner") || "{}"
);

const CalculadoraProvider: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { push } = useRouter();
  const {
    calculaTMB,
    calculaGET,
    calculaIMC,
    calculaAguaDiaria,
    calculaCaloriasParaObjetivo,
  } = useCalculadora();

  const [state, dispatch] = useReducer(
    reducer,
    calculadoraLocalState || initialState
  );

  useEffect(() => {
    localStorage.setItem("calculadoraTreinadorAbner", JSON.stringify(state));
  }, [state]);

  const saveCalcSimulation = async (props: AwsersTypes) => {
    const tmb = await calculaTMB(
      props.sexo,
      props.peso,
      props.altura,
      props.idade
    );
    const get = await calculaGET(tmb, props.nivelAtividade);
    const imc = await calculaIMC(props.peso, props.altura);
    const aguaDiaria = await calculaAguaDiaria(props.peso);
    const caloriasParaObjetivo = await calculaCaloriasParaObjetivo(
      props.objetivo,
      get
    );

    dispatch({
      type: "SAVE_CALC_SIMULATION",
      tmb,
      get,
      imc,
      aguaDiaria,
      caloriasParaObjetivo,
      awsers: props,
    });

    push("/calculadora/resultado");
  };

  return (
    <CalculadoraContext.Provider
      value={{
        state,
        saveCalcSimulation,
      }}
    >
      {children}
    </CalculadoraContext.Provider>
  );
};

export default CalculadoraProvider;
