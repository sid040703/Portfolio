import React from "react"
import {CONTACT} from "../constants"
import { motion } from "framer-motion"

const Contact=()=>{
    return(
<div className="border-neutral-900 pb-20">
<motion.h1 
whileInView={{opacity:1,y:0}}
initial={{opacity:0,y:-100}}
transition={{duration:1.5}}
className="my-10 text-center text-4xl">Get In Touch</motion.h1>
<div className="text-center">
    <p className="my-4">{CONTACT.address}</p>
    <p className="my-4">{CONTACT.phoneNo}</p>
    <a href="" className="">{CONTACT.email}</a>

</div>
</div>
    )
}
export default Contact