import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-2 md:pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-l md:text-xl mt-2"
        >
          As an aspiring Full Stack MERN developer, I am deeply passionate about
          creating innovative web applications that leave a lasting impact.
          Beyond my Development expertise, I am expert in solving problems using
          Data Structures and Algorithms with JAVA. I am committed to staying at
          the forefront of technology trends and continuously learning to
          refine my craft. Whether it's building seamless user interfaces or
          architecting robust backend systems, I approach every project with
          enthusiasm and a commitment to excellence.
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-l md:text-xl"
        >
          Beyond the realm of coding, I find extreme joy in the world of books.
          Whether it's getting lost in the plot of a novel, exploring the pages
          of a non-fiction work books have always been my constant companions.
          <br />
          <br />
          I am dedicated to pushing the boundaries of what's possible in web
          development, and I look forward to creating meaningful solutions that
          make a difference
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
