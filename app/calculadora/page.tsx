"use client";

import { FormEvent, useContext, useState } from "react";
import { Montserrat } from "next/font/google";
import { CalculadoraContext } from "../contexts/Calculadora/CalculadoraContext";

const mont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Calculadora() {
  const { saveCalcSimulation, state } = useContext(CalculadoraContext);

  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const awsers: AwsersTypes = {
      sexo: String(formData.get("sexo")),
      idade: Number(formData.get("idade")),
      peso: Number(formData.get("peso")),
      altura: Number(formData.get("altura")),
      objetivo: String(formData.get("objetivo")),
      nivelAtividade: Number(formData.get("nivelAtividade")),
      quantidadeRefeicoes: 0,
    };

    saveCalcSimulation(awsers);
  }

  return (
    <div className={`${mont.className} bg-black pb-9 text-white`}>
      <div className="max-w-6xl mx-auto mt-8 lg:mt-0 px-4 pt-9">
        <h1 className="text-white text-3xl lg:text-xl font-extrabold text-center">
          Calculadora de Taxa Metabólica Basal, Gasto Energético Total e
          Distribuição de Macronutrientes
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col max-w-xl mx-auto mt-8 bg-zinc-900 p-6 rounded-lg gap-6"
        >
          <div>
            <label>Sexo:</label>
            <div className="flex gap-4">
              <label htmlFor="masculino" className="flex gap-2">
                <input
                  id="masculino"
                  name="sexo"
                  type="radio"
                  value="M"
                  required
                />{" "}
                Masculino
              </label>
              <label htmlFor="feminino" className="flex gap-2">
                <input id="feminino" name="sexo" type="radio" value="F" />{" "}
                Feminino
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="idade">Idade (anos):</label>
            <input
              type="number"
              id="idade"
              name="idade"
              required
              className="bg-zinc-800 py-2 px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="peso">Peso (kg):</label>
            <input
              type="number"
              id="peso"
              name="peso"
              required
              className="bg-zinc-800 py-2 px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="altura">Altura (cm):</label>
            <input
              type="number"
              id="altura"
              name="altura"
              required
              className="bg-zinc-800 py-2 px-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Objetivo:</label>
            <div className="flex flex-col gap-1 text-xs lg:gap-2">
              <label htmlFor="manterPeso" className="flex gap-2 items-start">
                <input
                  required
                  id="manterPeso"
                  name="objetivo"
                  type="radio"
                  value="manterPeso"
                />{" "}
                Manter o peso
              </label>
              <label htmlFor="perderPeso" className="flex gap-2 items-start">
                <input
                  id="perderPeso"
                  name="objetivo"
                  type="radio"
                  value="perderPeso"
                />{" "}
                Perder peso
              </label>
              <label htmlFor="ganharPeso" className="flex gap-2 items-start">
                <input
                  id="ganharPeso"
                  name="objetivo"
                  type="radio"
                  value="ganharPeso"
                />{" "}
                Ganhar peso
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Nível de Atividade Física:</label>
            <div className="flex flex-col gap-1 text-xs lg:gap-2">
              <label htmlFor="sendentario" className="flex gap-2 items-start">
                <input
                  required
                  id="sendentario"
                  name="nivelAtividade"
                  type="radio"
                  value="1.2"
                />{" "}
                Sedentário (pouco ou nenhum exercício)
              </label>
              <label
                htmlFor="levementeAtivo"
                className="flex gap-2 items-start"
              >
                <input
                  id="levementeAtivo"
                  name="nivelAtividade"
                  type="radio"
                  value="1.375"
                />{" "}
                Levemente ativo (exercício leve/esportes 1-3 dias por semana)
              </label>
              <label
                htmlFor="moderadamentAtivo"
                className="flex gap-2 items-start"
              >
                <input
                  id="moderadamentAtivo"
                  name="nivelAtividade"
                  type="radio"
                  value="1.55"
                />{" "}
                Moderadamente ativo (exercício moderado/esportes 3-5 dias por
                semana)
              </label>
              <label htmlFor="muitoAtivo" className="flex gap-2 items-start">
                <input
                  id="muitoAtivo"
                  name="nivelAtividade"
                  type="radio"
                  value="1.725"
                />{" "}
                Muito ativo (exercício pesado/esportes 6-7 dias por semana)
              </label>
              <label
                htmlFor="extremamenteAtivo"
                className="flex gap-2 items-start"
              >
                <input
                  id="extremamenteAtivo"
                  name="nivelAtividade"
                  type="radio"
                  value="1.9"
                />{" "}
                Extremamente ativo (exercício muito pesado/trabalho físico)
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="bg-brand-color w-full p-4 rounded-full font-bold"
            >
              {loading ? (
                <div
                  className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                "Calcular"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
