'use client';
import { motion } from 'framer-motion'
import { TypingText, TitleText, StartSteps } from '../components'
import styles from '../styles';
import { 
  fadeIn,
  planetVariants,
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
    </motion.div>
  </section>
);

export default World;
