"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";

const mont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const depoiments = [
  {
    id: 1,
    image: '/results/result_11.jpg',
    title: 'Jacqueline Barcout',
    text: [
      "Comecei a treinar no começo de Fevereiro e ainda fiquei quase dois meses sem ir pra academia. As mudanças de hábitos (treino e alimentação) fizeram com que eu me visse e me sentisse melhor, tanto no mental como no fisico!",
      'Estou aqui mostrando o antes e depois pra motivar quem está com a idéia de começar. Quem está me acompanhando nesse processo é o Treinador Abner, durante a consultoria me tira as dúvidas e me ajuda em tudo que preciso. E meninas, ele é focado em em resultados para nós mulheres, vai sem medo que é show!'
    ]
  },
];

const Depoiments: React.FunctionComponent = () => {
  const [depoimentPosition, setDepoimentPosition] = useState(0);

  return (
    <div className="w-full lg:w-auto flex flex-col gap-8 px-4">
      <div
        className={`flex justify-center gap-4 w-full text-white ${mont.className} font-semibold`}
      >
        {depoiments.map((depoiment, index) =>  (
          <button key={depoiment.id} onClick={() => setDepoimentPosition(index)} className="bg-brand-color flex flex-1 items-center rounded-lg max-w-[250px] text-left hover:scale-105 focus:scale-105 transition-transform">
            <div className={`w-full h-full flex-[2] bg-cover rounded-l-lg bg-no-repeat`}>
              <img src={depoiment.image} alt={depoiment.title} className="px-4 object-cover" />
            </div>
            <p className="px-4 py-2 flex-[3] text-xs md:text-[8px]">Relato {depoiment.title}</p>
          </button>
        ))}
      </div>
      <div className="bg-brand-color rounded-lg flex ml-[80px] lg:ml-0 lg:flex-col lg:mt-[80px]">
        <div className="flex-[2] flex items-center lg:justify-center lg:-mt-[80px] lg:pl-14 lg:pr-14 md:pl-4 md:pr-4">
          <img src={depoiments[depoimentPosition].image} className="-ml-[80px] rounded-2xl lg:m-0" />
        </div>
        <div className="flex-[3] pt-14 pr-14 pb-14 lg:pl-14 lg:pt-8 md:pr-4 md:pl-4 text-white">
          <h3 className={`text-2xl mb-4 font-bold ${mont.className}`}>
            {depoiments[depoimentPosition].title}
          </h3>
          <div className="flex flex-col gap-6">
          {
            depoiments[depoimentPosition].text.map((text, index) => (
              <p className={`text-base ${mont.className}`} key={`key_${index}`}>
                {text}
              </p>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoiments;
