import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
function About() {
    return ( <div className="border-b border-neutral-900 pb-4">
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:2}} className="my-20 text-center text-7xl">About 
            <span className="text-neutral-500 pl-4">Me</span> </motion.h1>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:2}} className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />
            </div>
           
            </motion.div>
            
                <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:judtify-start">
                    <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:2}} className="my-2 max-w-xl py-6 ">{ABOUT_TEXT}</motion.p>
                </div>
                </div>
            
           
        </div>
       
    </div> );
}

export default About;