import { Montserrat } from 'next/font/google'
import Menu from './Menu';
import Carousel from './Carousel';
import Depoiments from './Depoiments';

const mont = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      <div className="bg-black w-full bg-[url('/back.png')] bg-top bg-no-repeat pb-16 lg:bg-none relative">
        <div className="w-full -bottom-[1px] h-[60px] rotate-180 bg-[url('/wave.svg')] absolute"></div>
        <div className="flex flex-wrap max-w-6xl mx-auto px-4 py-5 relative">
          <div className="lg:flex-1">
            <img
              src="/menu-logo.png"
              alt="Treinador abner"
              className="lg:w-[65px]"
              width={85}
              height={85}
            />
          </div>
          <Menu />
        </div>
        <div className="lg:flex-col-reverse lg:items-center max-w-6xl mx-auto px-4 flex pt-32 lg:pt-0 pb-32">
          <div className="flex-1 max-w-xl lg:text-center -mt-8">
            <h1 className="text-white text-4xl font-extrabold">
              DESPERTE A <span className="text-brand-color">LEOA</span> EM VOCÊ!! DOMINE SEU CORPO COM O INCRÍVEL <span className="text-brand-color">TREINO DE LEOA</span>
            </h1>
            <br />
            <h2 className={`text-white text-lg ${mont.className}`}>
              Serei seu parceiro na jornada para transformação física e autoconfiança! <br /><br />
              Junte-se a mim para trilhar um caminho de conquistas, moldando não apenas seu corpo, mas também sua determinação, com o apoio especializado do Treino de Leoa.
            </h2>
            <button className="py-7 px-14 rounded-full mt-6 bg-brand-color text-white text-center hover:scale-110 transition-all"><b>QUERO COMEÇAR MINHA JORNADA AGORA</b></button>
          </div>
          <div className="hidden lg:flex lg:justify-center pt-16">
            <img
              src="/trainer.jpg"
              alt="Treinador abner"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-6xl mx-auto flex lg:flex-col my-10 gap-4 items-center justify-around'>
          <div className='lg:-mt-[170px] lg:z-50 flex-1'>
            <img
              src="/mulher-frustrada.png"
              alt="Mulher frustrada"
              width={400}
              height={400}
            />
          </div>
          <div className='flex flex-col gap-5 lg:gap-7 px-4 flex-[2]'>
            <h2 className="text-4xl font-bold lg:text-center lg:mt-6 lg:text-3xl">SE VOCÊ PROCURA…</h2>
            <ol className={`${mont.className} text-lg font-medium`}>
              <li className="border-b p-2">
                <p>
                  Direção na Academia
                </p>
                <p className='text-xs'>
                  Elimine a sensação de estar perdida na academia. Receba orientação passo a passo para tornar cada sessão de treino eficaz e focada em seus objetivos individuais.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Plano de Treino Personalizado</p>
                <p className='text-xs'>
                  Não se preocupe em escolher os exercícios certos. Vou criar um plano de treino exclusivo, ajustado ao seu corpo e metas, para garantir resultados reais e tangíveis.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Progresso Visível</p>
                <p className='text-xs'>
                  Diga adeus às tentativas frustradas. Com a minha orientação, você verá resultados concretos e motivadores, experimentando a transformação que sempre desejou.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Equilíbrio Alimentar Sustentável</p>
                <p className='text-xs'>
                  Elimine a frustração de manter uma alimentação saudável. Irei ensinar abordagens realistas e práticas para nutrir seu corpo, estabelecendo um equilíbrio duradouro.
                </p>
              </li>
              <li className="border-b p-2">
                <p>Superação de Limites</p>
                <p className='text-xs'>
                  Você não está sozinha nessa jornada. Com o meu apoio, você irá ultrapassar barreiras, alcançando metas que pareciam inalcançáveis e desenvolvendo a confiança para explorar novos horizontes.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full pb-36 pt-36 relative bg-gradient-to-r from-[#331b3b] z-20 to-[#000000] flex justify-center">
        <div className="absolute w-full h-full top-0 bg-[url('/trainer-2.png')] z-10 bg-right-bottom bg-auto lg:bg-[length:400px] bg-no-repeat lg:bg-top max-w-6xl mx-auto"></div>
        <div className="absolute w-full h-full top-0 bg-[url('/menu-logo.png')] opacity-20 bg-[90%] bg-no-repeat bg-auto lg:bg-[length:400px] lg:bg-top max-w-6xl mx-auto"></div>
        <div className="w-full h-[60px] -top-[1px] bg-[url('/promo-divider.svg')] absolute"></div>
        <div className="max-w-6xl mx-auto flex z-20 w-full px-4 lg:justify-center lg:pt-[230px]">
          <div className="flex gap-4 flex-col max-w-lg lg:max-w-xl lg:text-center">
            <h1 className="text-white text-3xl font-extrabold">A <span className="text-brand-color">melhor plataforma</span> de treinos para você</h1>
            <p className={`${mont.className} text-lg text-white`}>Nossa plataforma é o guia prático que o libertará da zona de conforto, permitindo-lhe viver sua vida dos sonhos com equilíbrio mental e a forma física ideal durante todo o ano. Compreendemos as lutas que você enfrentou e criamos uma abordagem que vai além de meros treinos e dietas. Nossa personalização, orientação constante e comunidade de apoio irão ajudá-lo a superar obstáculos e a alcançar um progresso real.</p>
            <p className={`${mont.className} text-lg text-white font-bold`}>Prepare-se para se transformar em uma força da natureza, enfrentando desafios como uma verdadeira Leoa.</p>

            <button className="py-7 px-14 rounded-full mt-6 bg-brand-color text-white text-center hover:scale-110 transition-all"><b>COMEÇAR AGORA</b></button>
          </div>
        </div>
        <div className="w-full h-[60px] -bottom-[2px] rotate-180 bg-[url('/promo-divider.svg')] absolute z-20"></div>
      </div>
      <div id="results" className='flex flex-col gap-12 pb-16 relative'>
        <div className="max-w-6xl mx-auto flex pt-16 flex-col items-center">
          <div className='text-center flex flex-col gap-4 max-w-4xl mx-4'>
            <h2 className='text-4xl font-extrabold'>ESSE <span className="text-brand-color">RESULTADO</span> SERÁ O SEU FUTURO!</h2>
            <p className={`${mont.className} text-lg font-normal`}>Minhas alunas se tornam protagonistas das suas histórias!</p>
            <p className={`${mont.className} text-lg font-normal`}>Aqui elas criaram uma rotina saudável com treino de verdade, desenvolveram disciplina e foco em todas as áreas da vida, resgataram a autoestima e hoje estão muito mais felizes e satisfeitas com uma saúde física e mental impecável junto com o corpo dos sonhos!</p>
          </div>
        </div>
        <div>
          <Carousel />
        </div>
        <div className='flex justify-center px-4'>
          <button className="py-7 px-14 rounded-full bg-brand-color text-white text-center hover:scale-110 transition-all"><b>QUERO ESSE RESULTADO AGORA</b></button>
        </div>
      </div>
      <div id="depoiments" className='bg-black relative pt-16 pb-24'>
        <div className="w-full h-[60px] -top-[2px]  bg-[url('/time-offer-divider.svg')] absolute z-20"></div>
        <div className="px-4 max-w-6xl mx-auto flex pt-16 flex-col pb-[40px]">
          <h2 className="text-white text-4xl font-bold text-center mb-5">CONHEÇA ALGUMAS <span className="text-brand-color">HISTÓRIAS DE SUCESSO</span></h2>
          <p className={`${mont.className} text-lg font-normal text-white text-center`}>Já transformamos e seguimos transformando a vida de dezenas de alunas!</p>
          <p className={`${mont.className} text-lg font-normal text-white text-center`}>Veja a seguir o depoimento de algumas delas.</p>
        </div>
        <div className="max-w-6xl mx-auto flex pb-8 lg:max-w-2xl">
          <Depoiments />
        </div>
        <div className='flex justify-center px-4'>
          <button className="py-7 px-14 rounded-full bg-brand-color text-white text-center hover:scale-110 transition-all"><b>QUERO TER UMA HISTÓRIA DE SUCESSO</b></button>
        </div>
        <div className="w-full h-[60px] -bottom-[1px] rotate-180  bg-[url('/time-offer-divider.svg')] absolute z-20"></div>
      </div>
    </>
  )
}
