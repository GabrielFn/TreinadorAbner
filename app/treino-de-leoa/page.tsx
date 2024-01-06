import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  faHeartCrack,
  faArrowDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../components/Carousel";
import Depoiments from "../components/Depoiments";
import ModulesReverseCarousel from "../components/ModulesReverseCarousel";
import RedirectButton from "../components/RedirectButton";

const mont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function TreinoDeLeoa() {
  return (
    <>
      <div className="bg-black w-full bg-[url('/back.png')] bg-top bg-no-repeat pb-16 lg:bg-none relative">
        <div className="w-full -bottom-[1px] h-[60px] rotate-180 bg-[url('/wave.svg')] absolute bg-[length:100%_100%]"></div>
        <div className="lg:flex-col-reverse lg:items-center max-w-6xl mx-auto px-4 flex pt-32 lg:pt-0 pb-32">
          <div className="flex-1 max-w-xl lg:text-center -mt-8">
            <h1 className="text-white text-4xl font-extrabold">
              DESPERTE A <span className="text-brand-color">LEOA</span> EM
              VOCÊ!! DOMINE SEU CORPO COM O INCRÍVEL{" "}
              <span className="text-brand-color">TREINO DE LEOA</span>
            </h1>
            <br />
            <h2 className={`text-white text-lg ${mont.className}`}>
              Serei seu parceiro na jornada para transformação física e
              autoconfiança! <br />
              <br />
              Junte-se a mim para trilhar um caminho de conquistas, moldando não
              apenas seu corpo, mas também sua determinação, com o apoio
              especializado do Treino de Leoa.
            </h2>
            <button className="py-7 px-14 rounded-full mt-6 bg-brand-color text-white text-center hover:scale-110 transition-all">
              <b>QUERO COMEÇAR MINHA JORNADA AGORA</b>
            </button>
          </div>
          <div className="hidden lg:flex lg:justify-center pt-16">
            <Image
              src="/trainer.jpg"
              alt="Treinador abner"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto flex lg:flex-col my-10 gap-4 items-center justify-around">
          <div className="lg:-mt-[170px] lg:z-40 flex-1">
            <Image
              src="/mulher-frustrada.png"
              alt="Mulher frustrada"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-7 px-4 flex-[2]">
            <h2 className="text-4xl font-bold lg:text-center lg:mt-6 lg:text-3xl">
              SE VOCÊ PROCURA…
            </h2>
            <ol className={`${mont.className} text-lg font-medium`}>
              <li className="border-b p-2">
                <p>Direção na Academia</p>
                <p className="text-xs">
                  Elimine a sensação de estar perdida na academia. Receba
                  orientação passo a passo para tornar cada sessão de treino
                  eficaz e focada em seus objetivos individuais.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Plano de Treino Personalizado</p>
                <p className="text-xs">
                  Não se preocupe em escolher os exercícios certos. Vou criar um
                  plano de treino exclusivo, ajustado ao seu corpo e metas, para
                  garantir resultados reais e tangíveis.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Progresso Visível</p>
                <p className="text-xs">
                  Diga adeus às tentativas frustradas. Com a minha orientação,
                  você verá resultados concretos e motivadores, experimentando a
                  transformação que sempre desejou.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Equilíbrio Alimentar Sustentável</p>
                <p className="text-xs">
                  Elimine a frustração de manter uma alimentação saudável. Irei
                  ensinar abordagens realistas e práticas para nutrir seu corpo,
                  estabelecendo um equilíbrio duradouro.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Superação de Limites</p>
                <p className="text-xs">
                  Você não está sozinha nessa jornada. Com o meu apoio, você irá
                  ultrapassar barreiras, alcançando metas que pareciam
                  inalcançáveis e desenvolvendo a confiança para explorar novos
                  horizontes.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full pb-36 pt-36 relative bg-gradient-to-r from-[#331b3b] z-20 to-[#000000] flex justify-center">
        <div className="absolute w-full h-full top-0 bg-[url('/trainer-2.png')] z-10 bg-right-bottom bg-auto lg:bg-[length:400px] bg-no-repeat lg:bg-top max-w-6xl mx-auto"></div>
        <div className="absolute w-full h-full top-0 bg-[url('/menu-logo.png')] opacity-20 bg-[90%] bg-no-repeat bg-auto lg:bg-[length:400px] lg:bg-top max-w-6xl mx-auto"></div>
        <div className="w-full h-[60px] -top-[1px] bg-[url('/promo-divider.svg')] absolute bg-[length:100%_100%]"></div>
        <div className="max-w-6xl mx-auto flex z-20 w-full px-4 lg:justify-center lg:pt-[230px]">
          <div className="flex gap-4 flex-col max-w-lg lg:max-w-xl lg:text-center">
            <h1 className="text-white text-3xl font-extrabold">
              A <span className="text-brand-color">melhor plataforma</span> de
              treinos para você
            </h1>
            <p className={`${mont.className} text-lg text-white`}>
              Nossa plataforma é o guia prático que o libertará da zona de
              conforto, permitindo-lhe viver sua vida dos sonhos com equilíbrio
              mental e a forma física ideal durante todo o ano. Compreendemos as
              lutas que você enfrentou e criamos uma abordagem que vai além de
              meros treinos e dietas. Nossa personalização, orientação constante
              e comunidade de apoio irão ajudá-lo a superar obstáculos e a
              alcançar um progresso real.
            </p>
            <p className={`${mont.className} text-lg text-white font-bold`}>
              Prepare-se para se transformar em uma força da natureza,
              enfrentando desafios como uma verdadeira Leoa.
            </p>

            <button className="py-7 px-14 rounded-full mt-6 bg-brand-color text-white text-center hover:scale-110 transition-all">
              <b>COMEÇAR AGORA</b>
            </button>
          </div>
        </div>
        <div className="w-full h-[60px] -bottom-[2px] rotate-180 bg-[url('/promo-divider.svg')] absolute z-20"></div>
      </div>
      <div id="results" className="flex flex-col gap-12 pb-16 relative">
        <div className="max-w-6xl mx-auto flex pt-16 flex-col items-center">
          <div className="text-center flex flex-col gap-4 max-w-4xl mx-4">
            <h2 className="text-4xl font-extrabold">
              ESSE <span className="text-brand-color">RESULTADO</span> SERÁ O
              SEU FUTURO!
            </h2>
            <p className={`${mont.className} text-lg font-normal`}>
              Minhas alunas se tornam protagonistas das suas histórias!
            </p>
            <p className={`${mont.className} text-lg font-normal`}>
              Aqui elas criaram uma rotina saudável com treino de verdade,
              desenvolveram disciplina e foco em todas as áreas da vida,
              resgataram a autoestima e hoje estão muito mais felizes e
              satisfeitas com uma saúde física e mental impecável junto com o
              corpo dos sonhos!
            </p>
          </div>
        </div>
        <div>
          <Carousel />
        </div>
        <div className="flex justify-center px-4">
          <button className="py-7 px-14 rounded-full bg-brand-color text-white text-center hover:scale-110 transition-all">
            <b>QUERO ESSE RESULTADO AGORA</b>
          </button>
        </div>
      </div>
      <div id="depoiments" className="bg-black relative pt-16 pb-24">
        <div className="w-full h-[60px] -top-[2px]  bg-[url('/time-offer-divider.svg')] absolute z-20 bg-[length:100%_100%]"></div>
        <div className="px-4 max-w-6xl mx-auto flex pt-16 flex-col pb-[40px]">
          <h2 className="text-white text-4xl font-bold text-center mb-5">
            CONHEÇA ALGUMAS{" "}
            <span className="text-brand-color">HISTÓRIAS DE SUCESSO</span>
          </h2>
          <p
            className={`${mont.className} text-lg font-normal text-white text-center`}
          >
            Já transformamos e seguimos transformando a vida de dezenas de
            alunas!
          </p>
          <p
            className={`${mont.className} text-lg font-normal text-white text-center`}
          >
            Veja a seguir o depoimento de algumas delas.
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex pb-8 lg:max-w-2xl">
          <Depoiments />
        </div>
        <div className="flex justify-center px-4">
          <button className="py-7 px-14 rounded-full bg-brand-color text-white text-center hover:scale-110 transition-all">
            <b>QUERO TER UMA HISTÓRIA DE SUCESSO</b>
          </button>
        </div>
        <div className="w-full h-[60px] -bottom-[1px] rotate-180  bg-[url('/time-offer-divider.svg')] absolute z-20"></div>
      </div>
      <div>
        <div className="max-w-xl mx-auto flex lg:flex-col my-10 gap-4 items-center justify-around">
          <div className="flex flex-col gap-5 lg:gap-7 px-4 flex-[2]">
            <h2 className="text-4xl font-bold text-center lg:mt-6 lg:text-3xl">
              SE VOCÊ SE SENTE...
            </h2>
            <ol className={`${mont.className} text-lg font-medium`}>
              <li className="border-b p-2">
                <p className="flex">
                  <span className="w-[30px]">
                    <FontAwesomeIcon icon={faHeartCrack} color="red" />
                  </span>
                  Desorientada e perdida na academia.
                </p>
              </li>
              <li className="border-b p-2">
                <p className="flex">
                  <span className="w-[30px]">
                    <FontAwesomeIcon icon={faHeartCrack} color="red" />
                  </span>
                  Sem orientação para selecionar o exercício ideal para o seu
                  corpo.
                </p>
              </li>
              <li className="border-b p-2">
                <p className="flex">
                  <span className="w-[30px]">
                    <FontAwesomeIcon icon={faHeartCrack} color="red" />
                  </span>
                  Exausta de tentativas sem ver progresso algum.
                </p>
              </li>
              <li className="border-b p-2">
                <p className="flex">
                  <span className="w-[30px]">
                    <FontAwesomeIcon icon={faHeartCrack} color="red" />
                  </span>
                  Desapontada por não conseguir manter uma dieta saudável.
                </p>
              </li>
              <li className="border-b p-2">
                <p className="flex">
                  <span className="w-[30px]">
                    <FontAwesomeIcon icon={faHeartCrack} color="red" />
                  </span>
                  Sem apoio para avançar e experimentar algo novo.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="modules" className="bg-black relative pt-16 pb-24">
        <div className="w-full -top-[2px] h-[60px] bg-[url('/wave.svg')] absolute"></div>
        <div className="px-4 max-w-4xl mx-auto flex pt-16 flex-col pb-[40px]">
          <h2 className="text-white text-4xl font-bold text-center mb-5">
            O Treino de Leoa é{" "}
            <span className="text-brand-color">
              exatamente
              <br /> o que você precisa!
            </span>
          </h2>
          <p
            className={`${mont.className} text-lg font-normal text-white text-center`}
          >
            Alcançar a força de uma Leoa é para toda mulher que busca resultados
            consistentes, alcançar seus objetivos e viver sua melhor versão, não
            apenas porque deseja, mas porque merece! Ser uma Leoa é o nosso
            propósito, e vamos juntos conquistar esse poder.
          </p>
        </div>
        <div className="flex justify-center px-4">
          <button className="py-7 px-14 rounded-full bg-brand-color text-white text-center hover:scale-110 transition-all">
            <b>QUERO ME TRANSFORMAR EM UMA LEOA</b>
          </button>
        </div>

        <div className="px-4 max-w-5xl lg:max-w-sm mx-auto flex pt-24 pb-[40px] gap-6 items-center">
          <hr className="flex-1 h-[1px] border-none bg-brand-color" />
          <div>
            <FontAwesomeIcon icon={faArrowDown} className="text-brand-color" />
          </div>
          <hr className="flex-1 h-[1px] border-none bg-brand-color" />
        </div>

        <div className="max-w-6xl mt-24 lg:mt-4 mb-16 mx-auto px-4 flex lg:flex-col-reverse">
          <div
            className={`flex-[3] text-white max-w-2xl mx-auto lg:text-center ${mont.className}`}
          >
            <h2 className="text-white text-4xl font-bold mb-5">
              UM APP COMPLETO COM <br />
              <span className="text-brand-color">TUDO O QUE VOCÊ PRECISA</span>
            </h2>
            <p>
              Ter o treino mais intenso, a dieta mais eficaz, e os melhores
              equipamentos pode não ser suficiente se você não contar com a
              orientação certa e um ambiente que ressoe com você. É provável que
              se sinta cansada e desmotivada
            </p>
            <p className="mt-3">
              No Treino de Leoa, garantimos que seu esforço seja direcionado da
              maneira correta, oferecendo uma série de vantagens para
              impulsionar seu progresso e manter sua motivação elevada ao longo
              dessa jornada.
            </p>
          </div>
          <div className="flex-[2] flex justify-end lg:justify-center">
            <Image
              className="h-auto w-auto"
              src="/app-model.png"
              alt="app presentation"
              width={180}
              height={300}
            />
          </div>
        </div>
        {/* <ModulesCarousel /> */}
        <ModulesReverseCarousel />
        <div className="w-full h-[60px] -bottom-[2px] rotate-180 bg-[url('/promo-divider.svg')] absolute z-20"></div>
      </div>
      <div
        id="price"
        className={`flex flex-col gap-12 pb-16 relative ${mont.className}`}
      >
        <div className="max-w-6xl mx-auto flex pt-16 flex-col items-center">
          <div className="text-center flex flex-col gap-4 max-w-4xl mx-4">
            <h2 className="text-4xl font-extrabold">
              TODA <span className="text-brand-color">EVOLUÇÃO</span> INICIA-SE
              COM UMA ESCOLHA!
            </h2>
            <p className={`${mont.className} text-lg font-normal`}>
              Basta de desperdiçar sua energia no que não traz resultados.
              Decida agora transformar sua vida com o Treino de Leoa e sinta a
              diferença já nos primeiros treinos!
            </p>
          </div>
          <div className="flex mt-16 gap-4 items-center lg:flex-col-reverse">
            <div className="w-max-[350px] bg-black text-white p-6 text-center gap-2 rounded-lg flex-1">
              <h1 className="text-3xl">Plano Mensal</h1>

              <h2 className="text-5xl mt-4 font-extrabold">
                R$49,90 <small className="text-xl">à vista</small>
              </h2>

              <ul className="text-left mt-6 text-sm flex flex-col border-t border-[#FFFFFF33]">
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Treinos específicos com atualizações mensais (academia e casa)
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Dietas específicas conforme o seu objetivo com atualizações da nutri
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Comunidade vip de suporte premium via whatsapp
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Progressão de carga inteligente
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Treinos com vídeo aulas de todos os exercícios ensinando a execução correta de cada exercício
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Apostila de alongamentos
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Correções dos exercícios através de vídeos no whatsapp
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Bônus: treinos de barriga negativa, zumba e vários e-books para perder barriga
                </li>
              </ul>
              <RedirectButton className="py-7 px-14 rounded-full bg-white hover:scale-110 text-black text-center transition-all mt-6 w-full" link="https://payfast.greenn.com.br/30896/offer/PnVsex">
                <b>ASSINE AGORA!</b>
              </RedirectButton>
              <p className="text-xs mt-4 font-bold italic">
                *renovado automaticamente a cada trimestre*
              </p>
            </div>
            <div className="w-max-[350px] bg-black text-white p-6 text-center gap-2 rounded-lg flex-1">
              <h1 className="text-3xl">Plano Trimestral</h1>

              <h2 className="text-5xl mt-4 font-extrabold">
                <small className="text-xl">3x de</small> R$42,28
              </h2>
              <h4 className="text-xl">ou R$119,76 à vista</h4>

              <ul className="text-left mt-6 text-sm flex flex-col border-t border-[#FFFFFF33]">
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Treinos específicos com atualizações mensais (academia e casa)
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Dietas específicas conforme o seu objetivo com atualizações da nutri
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Comunidade vip de suporte premium via whatsapp
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Progressão de carga inteligente
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Treinos com vídeo aulas de todos os exercícios ensinando a execução correta de cada exercício
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Apostila de alongamentos
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Correções dos exercícios através de vídeos no whatsapp
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Bônus: treinos de barriga negativa, zumba e vários e-books para perder barriga
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Desconto de 20% (economize R$29,94)
                </li>
              </ul>
              <RedirectButton link="https://payfast.greenn.com.br/42283/offer/iH1ck4" className="py-7 px-14 rounded-full bg-white hover:scale-110 text-black text-center transition-all mt-6 w-full">
                <b>ASSINE AGORA!</b>
              </RedirectButton>
              <p className="text-xs mt-4 font-bold italic">
                *renovado automaticamente a cada trimestre*
              </p>
            </div>
            <div className="w-max-[350px] bg-brand-color text-white p-6 text-center flex flex-col gap-2 rounded-lg relative flex-1">
              <Image
                src="/star.webp"
                width={80}
                height={80}
                alt="star"
                className="absolute -top-10 left-1/2 transform -translate-x-1/2"
              />
              <h1 className="text-3xl font-bold mt-4">Plano Semestral</h1>
              <h3 className="text-lg">O MAIS VENDIDO 🔥</h3>

              <h2 className="text-5xl mt-4 font-extrabold">
                <small className="text-xl">6x de</small> R$41,35
              </h2>
              <h4 className="text-xl">ou R$224,55 à vista</h4>

              <ul className="text-left mt-6 text-sm flex flex-col border-t border-[#FFFFFF33]">
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Treinos específicos com atualizações mensais (academia e casa)
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Dietas específicas conforme o seu objetivo com atualizações da nutri
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Comunidade vip de suporte premium via whatsapp
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Progressão de carga inteligente
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Treinos com vídeo aulas de todos os exercícios ensinando a execução correta de cada exercício
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Apostila de alongamentos
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Correções dos exercícios através de vídeos no whatsapp
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Bônus: treinos de barriga negativa, zumba e vários e-books para perder barriga
                </li>
                <li className="flex py-2 border-b border-[#FFFFFF33]">
                  <span className="min-w-[25px]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      color="lightgreen"
                    />
                  </span>
                  Desconto de 25% (economize R$74,85)
                </li>
              </ul>
              <RedirectButton link="https://payfast.greenn.com.br/42286/offer/dcq3To" className="py-7 px-14 rounded-full bg-black text-white text-center transition-all mt-6 animate-attention">
                <b>ASSINE AGORA!</b>
              </RedirectButton>
              <p className="text-xs mt-2 font-bold italic">
                *renovado automaticamente a cada ano*
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-full pb-36 pt-36 relative bg-black flex justify-center"
      >
        <div className="w-full h-[60px] -top-[2px]  bg-[url('/time-offer-divider.svg')] absolute z-20"></div>
        <div className="max-w-6xl mx-auto flex pt-8 px-4 items-center text-white flex-[2] gap-4 lg:flex-col-reverse">
          <div className="flex-[2] lg:text-center">
            <h2 className="text-4xl font-extrabold">
              AINDA TEM ALGUMA DÚVIDA?
            </h2>
            <p className={`${mont.className} text-lg font-normal mt-8`}>
              Certo, leoa! Conte com nossa equipe de suporte ao cliente
              especializada no Treino de Leoa para esclarecer todas as suas
              perguntas e orientá-la na tomada da decisão certa.
            </p>
            <button className="py-7 px-14 rounded-full bg-[#25D366] mt-8 text-white text-center hover:scale-110 transition-all">
              <b>FALAR COM O TIME DE ATENDIMENTO</b>
            </button>
          </div>
          <div className="relative w-full h-full flex-1 justify-end flex lg:absolute lg:justify-center">
            <Image width={300} height={300} src="/whats_logo.svg" alt="whats" />
          </div>
        </div>
      </div>
    </>
  );
}
