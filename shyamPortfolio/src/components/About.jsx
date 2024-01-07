import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2 md:pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-l md:text-xl mt-2">
        As an aspiring Full Stack MERN  developer, I am deeply passionate about creating innovative web applications that leave a lasting impact. Beyond my Development expertise, I am expert in solving problems using Data Structures and Algorithms with JAVA . I am committed to staying at the forefront of technology trends and continuously learning to refine my craft. Whether it's building seamless user interfaces or architecting robust backend systems, I approach every project with enthusiasm and a commitment to excellence.

        </p>

        <br />
  

        <p className="text-l md:text-xl">
        Beyond the realm of coding, I find extreme joy in the world of books. Whether it's getting lost in the plot of a novel, exploring the pages of a non-fiction work books have always been my constant companions.
      <br />
      <br />

      I am dedicated to pushing the boundaries of what's possible in web development, and I look forward to creating meaningful solutions that make a difference
        </p>
      </div>
    </div>
  );
};

export default About;