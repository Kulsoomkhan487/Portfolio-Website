import React from "react";
import Image from "next/image";

const HeroSectrion = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-14">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-700 via bg-purple-600">
              Hello, I'am {""}
            </span>
            Kulsoom Khan
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl mb-6 text-center sm:text-left">
            {" "}
            "I am a passionate Web Developer, Graphic Designer, and Shopify
            expert, also skilled as an Amazon Virtual Assistant. Currently
            pursuing graduation, I bring creativity and technical expertise to
            projects, helping businesses grow with innovative designs and
            effective digital solutions."
          </p>
        </div>
        <div>
          <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via bg-purple-600 to-pink-700 hover:bg-slate-200 text-white">
            Hire Me
          </button>
          <button className="px-1 py-1 rounded-full w-full sm:w-fit hover:bg-slate-800 text-white bg-gradient-to-br from-blue-500 via bg-purple-600 to-pink-700 mr-4 mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download Cv
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
        <div className="absolute right-20 mt-0 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] ">
          <img
            src="girl.png"
            alt="Description of girl"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectrion;
