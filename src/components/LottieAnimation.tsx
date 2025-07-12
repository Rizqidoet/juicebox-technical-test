'use client';

import Lottie from 'lottie-react';
import animationData from '@/assets/lottie/JB2G_Lottie.json';

export default function LottieAnimation() {
  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
