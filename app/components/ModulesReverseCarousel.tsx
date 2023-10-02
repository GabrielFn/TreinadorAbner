"use client";

const ModulesReverseCarousel: React.FunctionComponent = () => {
  const images = [
    { id: "1", src: "/away.webp" },
    { id: "2", src: "/away.webp" },
    { id: "3", src: "/away.webp" },
    { id: "4", src: "/away.webp" },
    { id: "5", src: "/away.webp" },
    { id: "6", src: "/away.webp" },
    { id: "7", src: "/away.webp" },
    { id: "8", src: "/away.webp" },
    { id: "9", src: "/away.webp" },
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
