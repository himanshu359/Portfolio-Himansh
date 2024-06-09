import "./About.css";
import { Summary } from "../constant/StringConstants";
import myImage from "../../assets/myImage.jpg";
import { motion } from "framer-motion";
import { animateContainer } from "../Utils/utils";

const About = () => {
  return (
    <div className="aboutMainClass">
      <div className="aboutMainChild">
        <div className="aboutContainer">
          <div className="aboutContainerChild">
            <motion.h1
              variants={animateContainer(0)}
              initial='hidden'
              animate="visible"
              className="headerClass"
            >
              Himanshu Singh
            </motion.h1>
            <motion.span 
             variants={animateContainer(0.5)}
             initial='hidden'
             animate="visible"
            className="designation">Full Stack Developer</motion.span>
            <motion.p
             variants={animateContainer(1)}
             initial='hidden'
             animate="visible" 
            className="profileSummary">{Summary}</motion.p>
          </div>
        </div>
        <div className="profileImage">
          <div className="profileImageChild">
            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{diration:1,delay:1.2}} src={myImage} alt="Himanshu Singh" className="myImageClass" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
