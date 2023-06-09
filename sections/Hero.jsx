'use client';
import { motion } from 'framer-motion'
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section 
  className={`${styles.yPaddings} sm:pl-36 pl-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className="flex flex-col"
    >
      <div className={`${styles.innerWidth} mx-auto flex justify-center items-center flex-col relative z-10`}>
        <motion.h1
        className={styles.heroHeading}
         variants={textVariant(1.1)}>
          Metaverse
        </motion.h1>
        <motion.div
        className="flex flex-row justify-center items-center"
         variants={textVariant(1.2)}>
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}/>
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div 
        className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"/>
          <img 
          className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
          src="/cover.png" 
          alt="cover" />
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] sm:right-28 right-10 relative z-10">
              <img 
              className="sm:w-[155px] w-[100px] h-[100px] sm:h-[155px] object-contain"
              src="./stamp.png" 
              alt="stamp" />
            </div>
          </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
