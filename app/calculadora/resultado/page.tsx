"use client";

import { CalculadoraContext } from "@/app/contexts/Calculadora/CalculadoraContext";
import { Montserrat } from "next/font/google";
import { FormEvent, useContext, useEffect } from "react";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCalculadora from "@/app/hooks/useCalculadora.hook";

const mont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Resultado() {
  const { categoriasIMC } = useCalculadora();
  const {
    state: {
      tmb,
      get,
      imc,
      aguaDiaria,
      caloriasParaObjetivo,
      planoAlimentar,
      awsers,
    },
    dispatch,
    salvarPlanoAlimentar,
  } = useContext(CalculadoraContext);

  useEffect(() => () => dispatch({ type: "LIMPA_PLANO_ALIMENTAR" }), []);

  const submitSugestaoAlimentar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const quantidadeRefeicoes = Number(formData.get("quantidadeRefeicoes"));

    salvarPlanoAlimentar(quantidadeRefeicoes);
  };

  return (
    <div className={`${mont.className} bg-black flex-1 pb-16`}>
      <div className="max-w-6xl mx-auto mt-8 lg:mt-0 pt-9 text-white px-4">
        <h1 className="text-3xl lg:text-xl font-extrabold text-center">
          Seus Resultados De
          <br />
          <span className="text-brand-color">Taxa Metebólica Basal (TMB)</span>
        </h1>
        <div className="flex justify-center mt-9 gap-4 flex-wrap">
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Taxa metabólica basal</h3>
            <p className="text-4xl flex lg:flex-col lg:items-baseline items-end gap-2">
              {tmb.toFixed(0)} <span className="text-sm">calorias</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Gasto enegético total</h3>
            <p className="text-4xl flex lg:flex-col lg:items-baseline items-end gap-2">
              {get.toFixed(0)} <span className="text-sm">calorias</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Índice de massa corporal (IMC)</h3>
            <p className="text-4xl flex lg:flex-col lg:items-baseline items-end gap-2">
              {imc.toFixed(2)}{" "}
              <span className="text-sm">{categoriasIMC(imc)}</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Consumo recomendado para objetivo</h3>
            <p className="text-4xl flex lg:flex-col lg:items-baseline items-end gap-2">
              {caloriasParaObjetivo.toFixed(0)}{" "}
              <span className="text-sm">calorias</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Ingestão Diária de Água Recomendada</h3>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faDroplet}
                size="2x"
                className="text-blue-400"
              />
              <p className="text-4xl">
                {aguaDiaria} <span className="text-sm">ml</span>
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6">
          Com base em seus dados, a melhor estimativa para suas calorias de
          manutenção é {get.toFixed(0)} calorias por dia com base na fórmula
          Mifflin-St Jeor, que é amplamente conhecida por ser a mais precisa.
        </p>
      </div>

      {!planoAlimentar && (
        <div className="max-w-6xl mx-auto mt-8 lg:mt-0 pt-9 text-white px-4">
          <form
            onSubmit={submitSugestaoAlimentar}
            className="flex flex-col max-w-xl mx-auto mt-8 bg-zinc-900 p-6 rounded-lg gap-6"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="quantidadeRefeicoes">
                Quantas refeições deseja fazer durante o dia?
              </label>
              <input
                type="number"
                id="quantidadeRefeicoes"
                name="quantidadeRefeicoes"
                required
                className="bg-zinc-800 py-2 px-3 rounded-lg text-center"
              />
            </div>
            <button className="mx-auto block bg-brand-color py-6 px-8 font-semibold rounded-full">
              Gerar sugestão alimentar
            </button>
          </form>
        </div>
      )}

      {planoAlimentar && (
        <div className="max-w-6xl mx-auto mt-8 lg:mt-0 pt-9 text-white px-4 gap-8 flex flex-col">
          <h1 className="text-3xl lg:text-xl font-extrabold text-center">
            Sugestão alimentar
          </h1>
          <div className="flex gap-4 flex-wrap justify-center">
            {Object.keys([...Array(awsers.quantidadeRefeicoes)]).map((item) => (
              <div key={item} className="bg-zinc-800 p-8 rounded-lg md:grow">
                <h3 className="text-xl">Refeição {Number(item) + 1}</h3>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <p className="min-w-[150px]">Carboidratos:</p>
                    <span>
                      {planoAlimentar.quantidadesPorRefeicao.carboidratos.toFixed(
                        2
                      )}
                      g
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="min-w-[150px]">Proteinas:</p>
                    <span>
                      {planoAlimentar.quantidadesPorRefeicao.proteinas.toFixed(
                        2
                      )}
                      g
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="min-w-[150px]">Gorduras:</p>
                    <span>
                      {planoAlimentar.quantidadesPorRefeicao.gorduras.toFixed(
                        2
                      )}
                      g
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
