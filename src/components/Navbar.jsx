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
         <FaLinkedin/>
         <FaGithub/>
         <FaSquareXTwitter/>
        </div>

       </nav>
    )
}
export default Navbar;