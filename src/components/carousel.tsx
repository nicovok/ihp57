// TODO átalakítás vanilla js-re
import { type FC, useState, useEffect, type ReactNode } from "react";

interface CarouselProps {
  slides: ReactNode[];
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (currentSlide >= slides.length) setCurrentSlide(0);
    if (currentSlide < 0) setCurrentSlide(slides.length - 1);
  }, [currentSlide]);

  return (
    <div className="mt-10 max-w-2xl space-y-10">
      {slides.map((slide, i) => (
        <div key={i} className={currentSlide == i ? "block" : "hidden"}>
          {slide}
        </div>
      ))}
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <button
          onClick={() => setCurrentSlide((current) => current - 1)}
          className="flex w-48 justify-between px-4 py-2 gap-4 border border-black"
        >
          <img src="/icons/arrow-left.svg" className="aspect-square w-6" />
          Előző
        </button>
        <p className="hidden md:block break-keep">
          {currentSlide + 1} / {slides.length}
        </p>
        <button
          onClick={() => setCurrentSlide((current) => current + 1)}
          className="flex w-48 justify-between flex-row-reverse px-4 py-2 gap-4 border border-black"
        >
          <img src="/icons/arrow-right.svg" className="aspect-square w-6" />
          Következő
        </button>
      </div>
    </div>
  );
};

export { Carousel };
