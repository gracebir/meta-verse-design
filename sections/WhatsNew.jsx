'use client';
import { motion } from 'framer-motion'
import { TypingText, TitleText, NewFeatures } from '../components'
import styles from '../styles';
import { newFeatures } from '../constants';
import { 
  fadeIn,
  planetVariants,
  staggerContainer,
} from '../utils/motion';
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row-reverse`}
    >
      <motion.div 
      className={`${styles.flexCenter} flex-1`}
      variants={planetVariants("right")}>
      <img 
        className='w-[90%] h-[90%] object-contain'
        src='./whats-new.png'/>
      </motion.div>
      <motion.div
      variants={fadeIn("right", "tween", 0.25, 1)}
      className='flex flex-col flex-[0.75]'
      >
        <TypingText title="| Whats New?"/>
        <TitleText title={<>What's new about Metaversus?</>}/>
        <div className="flex flex-col gap-8 md:flex-row lg:flex-row md:gap-[46px] lg:gap-[46px] mt-12">
          {newFeatures.map((newfeature, i)=> (
            <NewFeatures {...newfeature} key={i}/>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
