'use client'
import React from 'react'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@/lib/utils'
import GridPattern from '../ui/grid-pattern';
import { Button } from '../ui/button';
import AvatarCircles from '../ui/avatar-circles';
import { avatars, userNum } from '@/constants';

const LandingPage = () => {
  return (
    <div className="relative flex h-[500px] w-full px-3 gap-[5rem] items-center overflow-hidden rounded-lg  ">
    <div className=' flex-wrap w-[50%] flex flex-col gap-8'>
        <p className="pointer-events-none  bg-gradient-to-b from-black to-gray-300/50 text-bold bg-clip-text text-center text-5xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10 ">
            Transform the Way You Study with AI-Powered Tools
        </p>
        <p className='text-xl px-3 mx-auto'>Generate flashcards, mind maps, practice questions, and podcasts from your study materials in seconds. Supercharge your learning with StudMind.ai</p>
        <div className='mt-4 flex gap-6 px-3'>
            <Button
                type="button"
                className="bg-purple-gradient bg-cover capitalize rounded-full text-xl py-[1.5rem] px-[2rem]"
            >
                Get Started
            </Button>
            <Button
                type="button"
                className="bg-black-gradient bg-cover capitalize rounded-full text-xl py-[1.5rem] px-[2rem]"
            >
               Explore Features
            </Button>
        </div>
        <div className='mt-4 flex gap-3 pl-4'>
            <p className='text-xl'>Trusted by over {userNum}+ Students</p>
            <AvatarCircles numPeople={99} avatarUrls={avatars} />;
        </div>
    </div>
    <div className='w-[50%]'>
        <DotLottieReact
        src="https://lottie.host/500382da-9cfa-4b14-8741-7f15ad6703f8/ZJlognYiyX.lottie"
        loop
        autoplay
        width={200}
        height={200}
        />
    </div>
    <GridPattern
      squares={[
        [4, 4],
        [5, 1],
        [8, 2],
        [5, 3],
        [5, 5],
        [10, 10],
        [12, 15],
        [15, 10],
        [10, 15],
        [15, 10],
        [10, 15],
        [15, 10],
      ]}
      className={cn(
        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
      )}
    />
  </div>
  )
}

export default LandingPage