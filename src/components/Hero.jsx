import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  const short = "Wahab";
  const full = "Abdul Wahab";
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className=''>
          <h1 className="font-black text-white lg:text-[67px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[80px] ">Hi, I'm <span className='text-[#915eff]'>
            <span className='lg:inline hidden'>{full}</span>
            <span className='inline lg:hidden'>{short}</span>
          </span></h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[34px] ">I develop full stack web applications, 3D <br className='sm:block hidden' /> visuals & user interfaces </p>
        </div>

      </div>
      <ComputersCanvas />

      <div className='absolute sm:bottom-10 bottom-16 w-full flex justify-center items-center '>
        <a href="#about">
          <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
            animate={{y:[0,24,0]}}
            transition={{duration:1.5, repeat:Infinity, repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero