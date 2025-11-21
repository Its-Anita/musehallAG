import React, { useState } from 'react';
import Alicia from '../assets/Images/Alicia.jpg';
import Daniel from '../assets/Images/Daniel.jpg';
import Leo from '../assets/Images/Leo.jpg';
import Martha from '../assets/Images/Martha.jpg';
import testimonialImg from '../assets/Images/Testimonial.jpg';

const Testimonials = () => {
    const testimonials = [
    {
      name: "Alicia M.",
      role: "Art Collector",
      image: Alicia,
      quote:
        "Their curation is flawless each piece feels intentional, soulful, and timeless. Perfect for anyone looking to elevate their home or workspace with fine art.",
    },
    {
      name: "Daniel K.",
      role: "Creative Director",
      image: Daniel,
      quote:
        "The gallery understands visual storytelling on a deeper level. Every artwork feels like a conversation waiting to happen.",
    },
    {
      name: "Martha W.",
      role: "Interior Designer",
      image: Martha,
      quote:
        "I source pieces for my premium clients here. The versatility, mood, and emotional depth are unmatched.",
    },
    {
      name: "Leo S.",
      role: "Digital Artist",
      image: Leo,
      quote:
        "As an artist, I appreciate how respectfully and beautifully my work is displayed. They care about both creators and collectors.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const t = testimonials[index];


  return (
    <section className="w-full py-12 px-6 md:px-16 flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          What People Are Saying About Us
        </h2>

        {/* Client */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 justify-center md:justify-start transition-all">
          <img
            src={t.image}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.name}</h3>
            <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0 text-base sm:text-lg">
          “{t.quote}”
        </p>

        {/* Arrows */}
        <div className="flex gap-4 mt-6  justify-center md:justify-start">
          <button
            onClick={prev}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-300"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border"
          >
            →
          </button>
        </div>
      </div>

      <div>
        <img
          src={testimonialImg}
          alt="gallery room"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </section>

  );
}

export default Testimonials;
