'use client';
import { motion } from 'framer-motion'
import { TypingText, TitleText, StartSteps } from '../components'
import styles from '../styles';
import { startingFeatures } from '../constants';
import { 
  fadeIn,
  planetVariants,
  staggerContainer,
} from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row`}>
      <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
        <img 
        className='w-[90%] h-[90%] object-contain'
        src='./get-started.png'/>
      </motion.div>
      <motion.div 
      className='flex-[0.75] flex justify-center flex-col' 
      variants={fadeIn("left", "tween", 0,2, 1)} >
        <TypingText title="| How Metaverus Works"/>
        <TitleText title={<>Get started &nbsp;
      <br className="lg:block hidden"/>with just a few<br className="lg:block hidden"/> clicks</>}/>
      <div className="mt-[31px] flex flex-col gap-6 max-w-[370px]">
        {startingFeatures.map((feature, i)=> (
          <StartSteps key={i} number={i + 1} text={feature}/>
        ))}
      </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
