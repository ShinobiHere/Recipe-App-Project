import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import React from 'react'
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}>
        <Veggie />
        <Popular />
    </motion.div>
  )
}

export default Home