"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import "./style.module.css";
import Link from "next/link";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Trusted Car Repair Services",
    description: "At AutoFix, your car is in expert hands with our certified mechanics.",
    buttonText: "Book a Service",
    buttonUrl: "#services",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Fast & Reliable Repairs",
    description: "From engine diagnostics to brake repair – we get you back on the road fast.",
    buttonText: "Learn More",
    buttonUrl: "#about",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Digital Vehicle Health Reports",
    description: "Get detailed, transparent checkups with every service you book at AutoFix.",
    buttonText: "View Reports",
    buttonUrl: "#report",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
  }
];
const HeroCTA = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setCurrentSlide(index);
  };

  const replaceBrokenImage = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const fallbacks = [
      "https://picsum.photos/id/1018/1920/1080",
      "https://picsum.photos/id/1015/1920/1080",
      "https://picsum.photos/id/1019/1920/1080"
    ];
    event.currentTarget.src = fallbacks[currentSlide % fallbacks.length];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) next();
    }, 3000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative h-[80vh] min-h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-800 ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <div className="absolute inset-0 bg-slate-800">
              <Image width={1000} height={1000} src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-80"
                onError={replaceBrokenImage}
                loading="lazy" />
            </div>

            <div className="container mx-auto px-6 h-full flex items-center">
              <div
                className={`max-w-2xl text-white transition-all duration-700 ${currentSlide === index
                  ? "translate-x-0 opacity-100 delay-300"
                  : "translate-x-10 opacity-0"
                  }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <div className="flex items-center gap-6">
                  <Link
                  href={slide.buttonUrl}
                  className="inline-block bg-red-500 hover:bg-white text-white hover:text-slate-800 px-6 py-3 rounded-lg text-lg font-semibold transition-colors animate-fade-in"
                >
                  {slide.buttonText}
                </Link>
                <Link
                  href={slide.buttonUrl}
                  className="flex items-center gap-2 bg-red-500 hover:bg-white text-white hover:text-slate-800 px-4 py-3 rounded-lg text-lg font-semibold transition-colors animate-fade-in"
                >
                  Dicover More <BiSolidRightTopArrowCircle />
                </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20 transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-20 transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-4 md:w-6" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCTA;