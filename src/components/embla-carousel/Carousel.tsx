import React, { useEffect, useRef } from "react";
import EmblaCarousel from "../embla-carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";

const CarouselSlidesData = [
  {
    id: 1,
    text: "This is the best service I have ever used!",
    image:
      "https://images.pexels.com/photos/26077133/pexels-photo-26077133/free-photo-of-herd-of-antelopes-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    text: "Amazing experience, highly recommend!",
    image:
      "https://images.pexels.com/photos/19765972/pexels-photo-19765972/free-photo-of-antelope-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    text: "A wonderful journey from start to finish.",
    image:
      "https://images.pexels.com/photos/10097726/pexels-photo-10097726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    text: "Exceptional quality and customer service.",
    image:
      "https://images.pexels.com/photos/11946567/pexels-photo-11946567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 5,
    text: "I will definitely be coming back!",
    image:
      "https://images.pexels.com/photos/15871352/pexels-photo-15871352/free-photo-of-stork-flies-above-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 6,
    text: "Top-notch service and friendly staff.",
    image:
      "https://images.pexels.com/photos/15247550/pexels-photo-15247550/free-photo-of-standing-antelope-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 7,
    text: "Top-notch service and friendly staff.",
    image:
      "https://images.pexels.com/photos/15247550/pexels-photo-15247550/free-photo-of-standing-antelope-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

const EmblaCarouselShow: React.FC = () => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-text");
          } else {
            entry.target.classList.remove("animate-text");
          }
        });
      },
      { threshold: 0.85 }
    );

    const currentRefs = textRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const slides = CarouselSlidesData.map((testimonial, index) => (
    <div key={testimonial.id} className="w-full h-full flex relative">
      <img
        src={testimonial.image}
        alt="testimonial"
        className="absolute w-full h-full inset-0 object-cover aspect-square"
      />
      <div className="gradient-overlay w-full h-full">
        <div
          className="w-full h-full p-5 flex flex-col md:flex-row gap-x-10 items-start md:items-end justify-end md:justify-between text-content"
          ref={(el) => (textRefs.current[index] = el)}
        >
          <div className="flex flex-col gap-y-1.5 md:gap-y-0.5 w-full">
            <h2 className="text-base text-balance font-medium leading-6 text-white text-left">
              {testimonial.text}
            </h2>
            <p className="text-white/60 text-balance text-sm font-normal text-left">
              This is a description for card {testimonial.id}.
            </p>
          </div>
          <button className="text-white/70 text-sm md:text-balance md:border shrink-0 w-fit md:px-4 py-2 rounded-full hover:text-white md:hover:bg-white font-normal md:hover:text-neutral-900 transition-colors">
            Read more
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="bg-neutral-900">
      <div className="max-w-7xl md:[-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] md:[mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] mx-auto min-h-screen overflow-hidden p-5 flex items-center justify-center w-full">
        <EmblaCarousel
          slides={slides}
          options={OPTIONS}
          className="w-full min-h-[25rem] h-full"
        />
      </div>
    </section>
  );
};

export default EmblaCarouselShow;
