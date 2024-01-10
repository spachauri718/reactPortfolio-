import React from "react";

import bookit from "../assets/portfolio/bookit.png";
import playbox from "../assets/portfolio/playbox.png";
import funProject from "../assets/portfolio/funProjects.png";
import yelpcamp from "../assets/portfolio/yelpcamp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: playbox,
      demoLink: "https://playbox-toystore-3f329.web.app/",
      codeLink : "https://github.com/spachauri718/postHero-"
    },
    {
      id: 2,
      src: bookit,
      demoLink: "https://drive.google.com/file/d/1hm0B0yCNSe4rnR7rZpY23qlcKgy4h3JE/view?usp=sharing",
      codeLink : "https://github.com/spachauri718/bookIt"
    },
    {
      id: 3,
      src:yelpcamp,
      demoLink: "https://yelp-camp-01.vercel.app/",
      codeLink : "https://github.com/spachauri718/yelpcamp"
    },
    
    {
      id: 4,
      src: funProject,
      demoLink :"https://main--shyam-small-fun-projects.netlify.app/",
      codeLink : "https://github.com/spachauri718/allSmallProjects"
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pb-3">
            Portfolio
          </p>
          <p className="py-6">Some of My Projects are</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demoLink,codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200  hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href= {codeLink} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
