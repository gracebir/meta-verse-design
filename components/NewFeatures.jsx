import styles from "../styles";

const NewFeatures = ({title, imgUrl, subtitle}) => (
  <div className="flex flex-col items-start gap-4">
    <div className="bg-[#323f5d] px-5 py-5 rounded-[24px]">
      <img className="w-[20px] h-[18px] object-contain" src={imgUrl} alt={title} />
    </div>
    <h3 className="text-white text-[1.5rem] font-bold leading-[30px]">{title}</h3>
    <p className="text-[#B0B0B0] leading-[30px] text-[1rem]">{subtitle}</p>
  </div>
);

export default NewFeatures;
