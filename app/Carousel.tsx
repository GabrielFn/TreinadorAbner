"use client";

const CarouselRender: React.FunctionComponent = () => {
  const images = [
    { id: '1', src: '/results/result_1.jpg' },
    { id: '2', src: '/results/result_2.png' },
    { id: '3', src: '/results/result_3.jpg' },
    { id: '4', src: '/results/result_4.png' },
    { id: '5', src: '/results/result_5.jpg' },
    { id: '6', src: '/results/result_6.png' },
    { id: '7', src: '/results/result_7.jpg' },
    { id: '8', src: '/results/result_8.png' },
    { id: '9', src: '/results/result_9.jpg' },
    { id: '10', src: '/results/result_10.png' },
    { id: '11', src: '/results/result_11.jpg' },
    { id: '12', src: '/results/result_12.png' },
    { id: '13', src: '/results/result_13.jpg' },
    { id: '14', src: '/results/result_14.png' },
    { id: '15', src: '/results/result_15.png' },
    { id: '16', src: '/results/result_16.png' }
  ]

  return (
    <div className="relative w-full overflow-hidden h-80">
      <div className="absolute flex">
        <section className="flex animate-swipe">
          {images.map(({ id, src }) => (
            <div className="image" key={id}>
              <img src={src} alt={id} className="max-w-[400px] h-80 px-4 object-cover" />
            </div>
          ))}
        </section>
        <section className="flex animate-swipe">
          {images.map(({ id, src }) => (
            <div className="image" key={id}>
              <img src={src} alt={id} className="max-w-[400px] h-80 px-4 object-cover" />
            </div>
          ))}
        </section>
        <section className="flex animate-swipe">
          {images.map(({ id, src }) => (
            <div className="image" key={id}>
              <img src={src} alt={id} className="max-w-[400px] h-80 px-4 object-cover" />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
};

export default CarouselRender;
