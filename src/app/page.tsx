"use client";

import LottieAnimation from "@/components/LottieAnimation";
import WalkthroughForm from "@/components/WalkthroughForm";
import WalkthroughHero from "@/components/WalkthroughHero";
import WalkthroughSwiper from "@/components/WalkthroughSwiper";
import { useState } from "react";

export default function HomePage() {
  const [step, setStep] = useState(1);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-3">
      <section className="min-h-screen grid grid-rows-[10%_50%_40%]">
        <div className="grid grid-cols-3 content-center">
          <div className="text-start">
            {
              step && (step > 1 && step < 5) ? <button onClick={() => setStep(step - 1)} className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

              </button> : ""
            }
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold font-pp">juicebox</h2>
          </div>
          <div className="text-end self-auto">
            <button className="text-sm" onClick={() => setStep(1)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>

            </button>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <LottieAnimation />
          {
            step && step === 1 && (
              <>
                <div className="absolute inset-0">
                  <span className="absolute top-[10%] left-0 text-neutral-200 text-xs font-sohne font-normal">
                    WA businesses feel confident about future growth
                  </span>
                  <span className="absolute top-[20%] right-0 text-neutral-200 text-xs font-sohne font-normal">
                    AI can&apos;t replace creativity
                  </span>
                  <span className="absolute top-[35%] left-0 text-neutral-200 text-xs font-sohne font-normal">
                    Sales measure true success
                  </span>
                  <span className="absolute bottom-[30%] right-0 text-neutral-200 text-xs font-sohne font-normal">
                    Human connection drives WA business
                  </span>
                  <span className="absolute bottom-[10%] left-0 text-neutral-200 text-xs font-sohne font-normal">
                    The primary barrier to digital
                  </span>
                  <span className="absolute bottom-[6%] left-0 text-neutral-200 text-xs font-sohne font-normal">
                    transformation is financial investment
                  </span>
                </div>
              </>
            )
          }
        </div>
        <div>
          {step === 1 && <WalkthroughHero onNext={() => setStep(2)}/>}
          {step === 2 && <WalkthroughSwiper onNext={() => setStep(3)} />}
          {(step >= 3 && step <= 5) && (
            <WalkthroughForm step={step} setStep={setStep} />
          )}
        </div>
      </section>
    </main>
  );
}
