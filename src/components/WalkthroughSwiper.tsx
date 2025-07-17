'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';

type WalkthroughSwiperProps = {
  onNext: () => void;
};

export default function WalkthroughSwiper({ onNext }: WalkthroughSwiperProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      text: `Professionals around the world shared how they feel about technology and I've listened. Now it's your turn.`,
    },
    {
      text: `I'll ask you a handful of meaningful questions and compare your responses with people in your industry.`,
    },
    {
      text: `You'll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!`,
      final: true,
    },
  ];
  return (
      <>
      <div className="h-full text-center flex flex-col pb-[10%]">
        <section className="max-w-80 text-center mx-auto">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="pagination"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {slides.map((slide, i) => {
              return (
                <>
                  <div className="text-center">
                    <SwiperSlide key={i}>
                      <div className="h-[10rem]">
                        <p className="text-xl font-bagoss font-normal text-white leading-snug">
                          {slide.text.length <= 55 ? (
                            slide.text
                          ) : (
                            <>
                              {slide.text.slice(0, 55)}
                              <span className="text-neutral-500">{slide.text.slice(55)}</span>
                            </>
                          )}
                        </p>
                      </div>
                    </SwiperSlide>
                  </div>
                </>
              )
            })}
          </Swiper>
        </section>

        <button
          onClick={() => {
            if (activeIndex === (slides.length - 1)) onNext();
          }}
          className={`mt-auto font-medium py-3 ${
            activeIndex === (slides.length - 1)
              ? 'w-full bg-white text-brandblack font-bagoss font-normal rounded-19 font-medium'
              : 'w-full bg-brandblack text-white font-bagoss font-normal rounded-19 font-medium border-solid border-2 border-white opacity-50 cursor-not-allowed'
          }`}
          disabled={activeIndex !== (slides.length - 1)}
        >
          {activeIndex === (slides.length - 1) ? 'Get started' : 'Continue'}
        </button>
      </div>
      </>
  );
}
