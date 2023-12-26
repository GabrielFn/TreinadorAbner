"use client";

const ModulesReverseCarousel: React.FunctionComponent = () => {
  const images = [
    { id: "1", src: "/cursos/3-dias-da-semana.webp" },
    { id: "2", src: "/cursos/5-dias-da-semana.webp" },
    { id: "5", src: "/cursos/emagrece-10.webp" },
    { id: "6", src: "/cursos/fit-4-weeks.webp" },
    { id: "8", src: "/cursos/perca-3-em-2.webp" },
    { id: "9", src: "/cursos/zumba.webp" },
    { id: "3", src: "/cursos/barriga-negativa.webp" },
    { id: "4", src: "/cursos/e-books.webp" },
    { id: "7", src: "/cursos/nutricao.webp" },
  ];

  return (
    <div className="relative w-full overflow-hidden h-[115px]">
      <div className="absolute flex">
        <section className="flex animate-reverseSwipe">
          {images.map(({ id, src }) => (
            <div className="image" key={id}>
              <img
                src={src}
                alt={id}
                className="h-[100px] min-w-[200px] px-1 object-cover"
              />
            </div>
          ))}
        </section>
        <section className="flex animate-reverseSwipe">
          {images.map(({ id, src }) => (
            <div className="image" key={id}>
              <img
                src={src}
                alt={id}
                className="h-[100px] min-w-[200px] px-1 object-cover"
              />
            </div>
          ))}
        </section>
        <section className="flex animate-reverseSwipe">
          {images.map(({ id, src }) => (
            <div className="image" key={id}>
              <img
                src={src}
                alt={id}
                className="h-[100px] min-w-[200px] px-1 object-cover"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ModulesReverseCarousel;
