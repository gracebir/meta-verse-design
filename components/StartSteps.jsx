import styles from "../styles";

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} gap-[30px]`}>
    <div className={`text-white ${styles.flexCenter} font-bold text-[20px] bg-[#323f5d] rounded-[24px] px-6 py-5`}>0{number}</div>
    <p className="text-[#B0B0B0] flex-1 text-[1.2rem] font-normal leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
