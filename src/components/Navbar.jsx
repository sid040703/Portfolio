import Siddhi from "../assets/siddhi.png"
import {  VscFlame } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import React from "react"
 const Navbar =()=>{
    return(
       <nav className=" mb-15 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center text-3xl" >
            
        {/* <img width="30px" height="30px" src={Siddhi} alt="Navabr Logo"/> */}
        < VscFlame/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="www.linkedin.com/in/siddhi-ove-304596250" target="_blank" rel="noopener noreferrer">
         <FaLinkedin />
         </a>
         <a href="https://github.com/sid040703" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
         <FaSquareXTwitter/>
        </div>

       </nav>
    )
}
export default Navbar;