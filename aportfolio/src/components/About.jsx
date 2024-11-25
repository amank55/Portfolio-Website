import React from 'react'
import { Tilt } from 'react-tilt';

import {motion} from 'framer-motion'

import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard = ({index, title, icon}) => {
  return (
   <Tilt className = "xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
       <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
   </Tilt>
  )
}
const About = () => {
  return (
   <>
   <motion.div variants={textVariant}>
    <p className={styles.sectionSubText}>
      Introduction
    </p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
   </motion.div>

   <motion.p
     variants={fadeIn("","",0.1,1)}
     className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
   >
    Hello and welcome to my portfolio! 👋 I’m Aman, a first-year student at USAR, passionate about creating seamless digital experiences through frontend and backend development.
I thrive on challenges and take pride in my ability to learn quickly, adapt to new technologies, and transform ideas into real-world solutions. As I embark on my journey in the tech world, I’m eager to showcase my growing skill set through exciting projects and collaborations.
Feel free to explore my portfolio and join me as I navigate the ever-evolving world of web development. Let’s create something extraordinary together! 🚀
   </motion.p>

   <div className='mt-20 flex flex-wrap gap-10'>
     {services.map((service, index) => (
      <ServiceCard key = {service.title} index = {index}{...service}/>
     ))}
   </div>
   </>
  )
}

export default About