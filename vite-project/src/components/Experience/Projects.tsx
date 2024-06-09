import { iconContainer } from '../Utils/utils';
import './Experience.css'
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className='experienece'>
        <motion.h2 
        className='expHeader'>Projects</motion.h2>
        <motion.div 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1.5 }}
        className='projectContainer'>
         <motion.div 
         variants={iconContainer(2.5)}
         initial="initial"
         animate="animate"
         className='contacts'> Comming Soon . . .</motion.div>
        </motion.div>
    </div>
  )
}

export default Projects