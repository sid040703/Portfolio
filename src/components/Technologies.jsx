import React from "react"
import { RiReactjsLine } from "react-icons/ri"
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";
const container = (duration)=>(
    {
        initial:{y:-10},
        animate:{
           y:[10,-10],
            
        
        transition:{duration : duration ,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"    
        }
    }
    }
)

const Technologies=()=>{
    return(
     <div className="border-neutral-800 pb-24">
     <motion.h1 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:1.5}}
     className="my-20 text-center text-4xl">Technologies</motion.h1>
     <motion.div 
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:1.5}}
     className="flex flex-wrap items-center justify-center gap-4">
    <motion.div 
     variants={container(2.5)}
     initial="initial"
     animate="animate"
    className="rounded-2xl border-2 border-neutral-800 p-4">
    <RiReactjsLine className="text-4xl text-cyan-400"/>
    
    </motion.div>
    <motion.div
     variants={container(4)}
     initial="initial"
     animate="animate" className="rounded-2xl border-2 border-neutral-800 p-4">
    <FaHtml5 className="text-4xl text-orange-800"/>
    
    </motion.div>
    <motion.div 
     variants={container(6)}
     initial="initial"
     animate="animate"
     className="rounded-2xl border-2 border-neutral-800 p-4">
    <IoLogoCss3 className="text-4xl text-blue-400"/>
    
    </motion.div>
    <motion.div 
     variants={container(8)}
     initial="initial"
     animate="animate"
    className="rounded-2xl border-2 border-neutral-800 p-4">
    <IoLogoJavascript className="text-4xl text-orange-400"/>
    
    </motion.div>
    <motion.div
     variants={container(4)}
     initial="initial"
     animate="animate"
    className="rounded-2xl border-2 border-neutral-800 p-4">
    <RiTailwindCssFill className="text-4xl text-cyan-400"/>
    
    </motion.div>
    <motion.div
     variants={container(7)}
     initial="initial"
     animate="animate"
    className="rounded-2xl border-2 border-neutral-800 p-4">
    <FaBootstrap className="text-4xl text-purple-500"/>
    
    </motion.div>
    <motion.div 
     variants={container(4)}
     initial="initial"
     animate="animate"
    className="rounded-2xl border-2 border-neutral-800 p-4">
    <SiMysql className="text-4xl text-blue-800"/>
    
    </motion.div>
     </motion.div>
     </div>
    )
}
export default Technologies