import "./Summary.css";
import { AboutText } from "../constant/StringConstants";
import working from "../../assets/working.jpg";
import {motion} from 'framer-motion'

const Summary = () => {
  return (
    <div className="summaryDiv">
      <motion.h2 
      className="summaryHeading">About Me</motion.h2>
      <div className="summaryContainer">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="summaryInnerContainer">
          <div className="imageSection">
            <img src={working} alt="myImage" className="summaryImage"/>
          </div>
        </motion.div>
        <motion.div
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}} 
        className="summaryParaContainer">
          <div className="summaryParaInner">
            <p className="paraSubText">{AboutText}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Summary;
