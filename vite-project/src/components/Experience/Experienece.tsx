import { ExperienceDetails } from '../constant/StringConstants'
import './Experience.css'
import { motion } from "framer-motion";


const Experienece = () => {
  return (
    <div className='experienece'>
        <motion.h2
        className='expHeader'>
        Experienece
        </motion.h2>
        <div>
          {ExperienceDetails.map((exp)=>(
            <div key={exp.id}className="expContainer">
              <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1}}
              className='expInnerCont'>
                <p className='expYear'>{exp.year}</p>
              </motion.div>
              <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1}}
              className="expDesc">
                <h5 className="expComapny">{exp.role} - <span>{exp.company}</span></h5>
                <h5 className='expComapny'> {`Client - ${exp.client}`} </h5>
                <p className='expDescInner'> {exp.description} </p>
                {exp.technologies.map((tech, index)=>(
                  <span key={index} className="expTech"> {tech} </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Experienece