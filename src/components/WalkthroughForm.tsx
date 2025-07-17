'use client';

import { useState } from 'react';

type WalkthroughFormProps = {
  step: number;
  setStep: (n: number) => void;
};

export default function WalkthroughForm({ step, setStep }: WalkthroughFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (step === 3 && name.trim()) setStep(4);
    else if (step === 4 && email.trim()) setStep(5);
  };

  const isContinueDisabled =
    (step === 3 && !name.trim()) || (step === 4 && !email.trim());

  return (
    <>
      <div className="h-full text-center flex flex-col pb-[10%]">
        {step === 3 && (
          <>
            <span className="font-bagoss font-normal text-[16px]">Let&apos;s start with the basics. Type in your first name.</span>
            <div className="flex flex-col mt-auto">
              <input
                type="text"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-brandblack text-white font-normal rounded-19 font-medium border-solid border-2 border-white p-3 outline-none mb-2"
              />
              <button
                onClick={() => handleNext()}
                disabled={isContinueDisabled}
                className={`mt-auto py-3 font-medium ${
                  isContinueDisabled
                    ? 'w-full bg-white text-brandblack font-normal rounded-19 font-sohne font-medium opacity-50 cursor-not-allowed'
                    : 'w-full bg-white text-brandblack font-normal rounded-19 font-sohne font-medium hover:bg-gray-200 transition'
                }`}
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <span className="font-bagoss font-normal text-[16px]">How should we contact you? Type in your email address.</span>
            <div className="flex flex-col mt-auto">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-brandblack text-white font-normal rounded-19 font-medium border-solid border-2 border-white p-3 outline-none mb-2"
              />

              <button
                onClick={() => handleNext()}
                disabled={isContinueDisabled}
                className={`mt-auto py-3 font-medium ${
                  isContinueDisabled
                    ? 'w-full bg-white text-brandblack font-normal rounded-19 font-sohne font-medium opacity-50 cursor-not-allowed'
                    : 'w-full bg-white text-brandblack font-normal rounded-19 font-sohne font-medium hover:bg-gray-200 transition'
                }`}
              >
                Continue
              </button>
            </div>
          </>
        )}

         {step === 5 && (
          <>
            <span className="font-bagoss font-normal text-[16px]">
              Thanks, <span className="font-semibold">{name || 'there'}</span>! Now, it&apos;s time to get a reality check.
              <br />
              <br />
              This will take 2-3 minutes.
            </span>
            <div className="flex flex-col mt-auto">
              <button
                onClick={() => setStep(1)}
                disabled={isContinueDisabled}
                className="mt-auto py-3 w-full bg-white text-brandblack font-normal rounded-19 font-sohne font-medium hover:bg-gray-200 transition"
              >
                Continue
              </button>
            </div>

          </>
        )}
      </div>
    </>
  );
}
