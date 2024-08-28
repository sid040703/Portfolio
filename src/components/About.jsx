import React from "react"
import { ABOUT_TEXT } from "../constants"
const About=()=>{
    return(
        <div className=" border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <div className="w-full  lg:p-8">
              <div className="flex justify-center ">
               <p className="text-justify ">{ABOUT_TEXT}</p>
              </div>
             
            </div>

        </div>

        </div>
    )
}
export default About