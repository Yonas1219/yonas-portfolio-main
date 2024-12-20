import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc";
import { yonaspic } from "../assets/index";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 1000,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 leading-[30px] flex flex-col lg:flex-row lg:h-[300px]"
			>
				<img
					src={yonaspic}
					alt=""
					className="lg:mx-0 md:mx-20 rounded-xl object-contain shadow-card"
				/>
				<p className="text-secondary text-[17px] lg:ml-12 lg:mt-0 mt-8"> 
I am a versatile software engineer with a passion for building innovative solutions across web, mobile, and AI domains. I specialize in creating efficient, scalable applications using the MERN stack. Additionally, I have experience in mobile app development and AI integration, crafting intelligent systems that deliver exceptional user experiences.  
Driven by curiosity and a commitment to continuous growth, I’m eager to tackle challenging projects and expand my skill set. If you’re looking for a developer with a dynamic skill set to bring your vision to life, let’s connect! |
					<span className="text-violet-400"> +251988109146</span>
				</p>
			</motion.div>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
