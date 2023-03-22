'use client';
import { motion } from 'framer-motion'
import { TypingText, TitleText, StartSteps } from '../components'
import styles from '../styles';
import { 
  fadeIn,
  staggerContainer,
} from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings}`}>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
     className={`${styles.innerWidth} mx-auto`}>
      <TypingText title="| People on the World" textStyles="text-center"/>
      <TitleText title={<>Track friends around you and <br className='hidden lg:block'/> invite them to play together in<br className='hidden lg:block'/> the same world</>} textStyles="text-center"/>
      <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img
        className='h-full w-full object-cover'
         src='/map.png' alt='map'/>
         <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img className='w-full h-full' src="people-01.png" alt="people" />
         </div>
         <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img className='w-full h-full' src="people-02.png" alt="people" />
         </div>
         <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img className='w-full h-full' src="people-03.png" alt="people" />
         </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
