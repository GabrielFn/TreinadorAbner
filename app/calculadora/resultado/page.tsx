"use client";

import { CalculadoraContext } from "@/app/contexts/Calculadora/CalculadoraContext";
import { Montserrat } from "next/font/google";
import { useContext } from "react";

const mont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Resultado() {
  const {
    state: { tmb, get, imc, aguaDiaria, caloriasParaObjetivo },
  } = useContext(CalculadoraContext);

  const IMCCategory = (imc: number) => {
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

  return (
    <div className={`${mont.className} bg-black flex-1`}>
      <div className="max-w-6xl mx-auto mt-8 lg:mt-0 pt-9 text-white px-4">
        <h1 className="text-3xl lg:text-xl font-extrabold text-center">
          Seus Resultados De
          <br />
          <span className="text-brand-color">Taxa Metebólica Basal (TMB)</span>
        </h1>
        <div className="flex justify-center mt-9 gap-4 flex-wrap">
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Taxa metabólica basal</h3>
            <p className="text-4xl">
              {tmb.toFixed(0)} <span className="text-sm">calorias</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Gasto enegético total</h3>
            <p className="text-4xl">
              {get.toFixed(0)} <span className="text-sm">calorias</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Índice de massa corporal (IMC)</h3>
            <p className="text-4xl">
              {imc.toFixed(2)}{" "}
              <span className="text-sm">{IMCCategory(imc)}</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Consumo recomendado para objetivo</h3>
            <p className="text-4xl">
              {caloriasParaObjetivo.toFixed(0)}{" "}
              <span className="text-sm">calorias</span>
            </p>
          </div>
          <div className="bg-zinc-800 w-[32%] lg:grow py-4 px-6 lg:px-4 rounded-lg flex flex-col gap-2 justify-between">
            <h3>Ingestão Diária de Água Recomendada</h3>
            <p className="text-4xl">
              {aguaDiaria} <span className="text-sm">ml</span>
            </p>
          </div>
        </div>
        <p className="mt-6">
          Com base em seus dados, a melhor estimativa para suas calorias de
          manutenção é {get.toFixed(0)} calorias por dia com base na fórmula
          Mifflin-St Jeor, que é amplamente conhecida por ser a mais precisa.
        </p>
      </div>
    </div>
  );
}
