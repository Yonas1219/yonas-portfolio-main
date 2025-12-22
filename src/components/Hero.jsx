import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { yonaspic } from "../assets/index";
import LottieHero from "./LottieHero";
import { Icon } from "@iconify/react";
import { Tilt } from "react-tilt";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} flex flex-row justify-center`}>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-60 mt-32 gap-y-8 lg:gap-y-0 lg:gap-x-40 gap-x-0">
          <div className="flex flex-col justify-center h-full gap-y-8 lg:gap-y-16">
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi , I'm <span className="text-[#915eff]">Yonas</span>
              </h1>

              <p
                className={`text-sm sm:text-base mt-2 max-w-full lg:max-w-[600px] text-secondary capitalize`}
              >
                <span className="text-[#915eff] font-medium">
                  Full-Stack Developer
                </span>{" "}
                with experience in{" "}
                <span className="text-[#915eff]">
                  React.js, Node.js, Go, Python
                </span>{" "}
                and various technologies. Proven ability to collaborate in
                teams, build responsive web applications
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-12">
              <a
                href="#projects"
                className="p-[1px] green-pink-gradient rounded-lg hover:transform hover:translate-y-[-4px] transition-all ease-in-out duration-75 hover:shadow-md"
              >
                <button className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-lg gap-x-4 w-full sm:w-fit bg-tertiary">
                  <Icon icon="grommet-icons:projects" className="text-base" />
                  <span>Projects</span>
                </button>
              </a>

              <a
                href="https://drive.google.com/file/d/1Upr20pKQQ-lDkUmVr7sssxEDOTHCJTF4/view?usp=drive_link"
                target="_blank"
                className="p-[1px] text-xl rounded-lg hover:transform hover:translate-y-[-4px] transition-all ease-in-out duration-75 hover:shadow-md"
              >
                <button className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl rounded-lg gap-x-4 w-full sm:w-fit text-black bg-[#a2a9ff]">
                  <Icon icon="simple-icons:readdotcv" className="text-2xl" />
                  <span>View Resume</span>
                </button>
              </a>
            </div>
          </div>
          <div className="p-[2px] green-pink-gradient rounded-[20px] hidden lg:block">
            <img
              src={yonaspic}
              alt=""
              className="shadow-card object-cover h-[550px] w-[450px] lg:mx-0 md:mx-20 rounded-[20px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute flex items-center justify-center w-full xs:bottom-2 bottom-10">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            ></motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
