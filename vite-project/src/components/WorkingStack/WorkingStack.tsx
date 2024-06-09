import "./WorkingStack.css";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";
import { iconContainer } from "../Utils/utils";

const WorkingStack = () => {
  return (
    <div className="workingStackDiv">
      <motion.h2 
      className="technologyHeading"> Technology </motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="stackContainer">
        <motion.div
        variants={iconContainer(2.5)}
        initial="initial"
        animate="animate"
        className="stackContainerInnerDiv">
          <RiReactjsLine className="reactjs" />
        </motion.div>
        <motion.div 
          variants={iconContainer(3)}
          initial="initial"
          animate="animate"
        className="stackContainerInnerDiv">
          <FaNodeJs className="nodejs" />
        </motion.div>
        <motion.div 
          variants={iconContainer(5)}
          initial="initial"
          animate="animate"
        className="stackContainerInnerDiv">
          <SiMongodb className="mongodb" />
        </motion.div>
        <motion.div 
         variants={iconContainer(3)}
         initial="initial"
         animate="animate"
        className="stackContainerInnerDiv">
          <RiJavascriptLine className="javascript" />
        </motion.div>
        <motion.div 
         variants={iconContainer(6)}
         initial="initial"
         animate="animate"
        className="stackContainerInnerDiv">
          <BiLogoTypescript className="css" />
        </motion.div>
        <motion.div 
         variants={iconContainer(4)}
         initial="initial"
         animate="animate"
        className="stackContainerInnerDiv">
          <RiCss3Line className="css" />
        </motion.div>
        <motion.div 
         variants={iconContainer(5)}
         initial="initial"
         animate="animate"
        className="stackContainerInnerDiv">
          <DiMysql className="mySql" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkingStack;
