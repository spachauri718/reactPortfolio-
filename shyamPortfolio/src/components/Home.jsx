import React from 'react';
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';
import MyImage from '../assets/heroImage.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full md:flex-row">
        <div className="flex flex-col h-full justify-center text-white">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            {' '}
            I am full stack developer{' '}
          </h2>
          <p className="text-gray-500 py-5 max-w-md">
            Aspiring Full Stack MERN developer with a passion for crafting
            innovative web applications. Skilled in React, Node.js, Express.js,
            and MongoDB. Proficient in DSA solving problem with JAVA. Committed
            to delivering user-centric and efficient solutions.!
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Know More
              <span>
                <FaLongArrowAltRight />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={MyImage}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
