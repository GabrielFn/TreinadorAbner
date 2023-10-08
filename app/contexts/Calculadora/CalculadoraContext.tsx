"use client";

import React, { PropsWithChildren, useEffect, useReducer } from "react";
import useCalculadora from "@/app/hooks/useCalculadora.hook";
import { useRouter } from "next/navigation";
import reducer, { initialState } from "./CalculadoraReducer";

export const CalculadoraContext = React.createContext<CalculadoraContextTypes>({
  saveCalcSimulation: () => null,
  salvarPlanoAlimentar: () => null,
  dispatch: () => null,
  state: initialState,
});

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
    calculaQuantidadesPorObjetivo,
  } = useCalculadora();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("calculadoraTreinadorAbner") || "{}")
    ) {
      dispatch({
        type: "FILL_STORE",
        value: JSON.parse(
          localStorage.getItem("calculadoraTreinadorAbner") || "{}"
        ),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("calculadoraTreinadorAbner", JSON.stringify(state));
    }
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

    dispatch({
      type: "LIMPA_PLANO_ALIMENTAR",
    });

    push("/calculadora/resultado");
  };

  const salvarPlanoAlimentar = async (quantidadeRefeicoes: number) => {
    const quantidadesTotais = calculaQuantidadesPorObjetivo(
      state.awsers.objetivo,
      state.caloriasParaObjetivo,
      state.awsers.peso
    );

    const quantidadesPorRefeicao = {
      carboidratos: quantidadesTotais.carboidratos / quantidadeRefeicoes,
      proteinas: quantidadesTotais.proteinas / quantidadeRefeicoes,
      gorduras: quantidadesTotais.gorduras / quantidadeRefeicoes,
    };

    dispatch({
      type: "SALVAR_PLANO_ALIMENTAR",
      quantidadeRefeicoes,
      planoAlimentar: {
        quantidadesTotais,
        quantidadesPorRefeicao,
      },
    });
  };

  return (
    <CalculadoraContext.Provider
      value={{
        state,
        dispatch,
        saveCalcSimulation,
        salvarPlanoAlimentar,
      }}
    >
      {children}
    </CalculadoraContext.Provider>
  );
};

export default CalculadoraProvider;
