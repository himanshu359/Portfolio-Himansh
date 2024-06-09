import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import logo from '../../assets/logo.png'
import './Navbar.css'
import { iconContainer } from '../Utils/utils';
import { motion } from "framer-motion";
import { Links } from '../constant/StringConstants';


const Navbar = () => {
    const handleIconClick=(link:string)=>{
        window.open(link, '_blank', 'noopener,noreferrer');
    }
  return (
    <nav className='navbarMainHeader'>
        <div className='navbarContentDiv'>
            <motion.img 
             variants={iconContainer(2.5)}
             initial="initial"
             animate="animate"
            className='logo' src={logo} alt='logo'/>
        </div>
        <div className='iconsDiv'>
            <FaLinkedin onClick={()=>handleIconClick(Links.linkedIn)} title='linkedIn'/>
            <FaGithub onClick={()=>handleIconClick(Links.gitHub)} title='github'/>
            <SiLeetcode onClick={()=>handleIconClick(Links.leetcode)} title='leetcode'/>
            <FaCode onClick={()=>handleIconClick(Links.bfeDev)} title='BFE.dev'/>
        </div>
    </nav>
)
}

export default Navbar