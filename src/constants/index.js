import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	vue,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	getnet,
	aastu,
	threejs,
	github,
	linkedin,
	telegram,
	twitter,
	instagram,
	shemach,
	recipe,
	recipe2,
	minabIcon,
	kena,
	sheger,
	plan,
	a2sv,
	splitbor,
	tarixchi,
} from "../assets";

export const socialLinks = [
	{
		id: "github",
		icon: github,
		link: "https://github.com/yonas1219",
		bg: "#181717",
	},
	{
		id: "linkedin",
		icon: linkedin,
		link: "https://www.linkedin.com/in/yonas-enchalew-2a869822a/",
		bg: "#0077B5",
	},
	{
		id: "twitter",
		icon: twitter,
		link: "https://twitter.com/YonasYo1219",
		bg: "#1DA1F2",
	},
	{
		id: "instagram",
		icon: instagram,
		link: "https://www.instagram.com/jann_19_19/?hl=en",
		bg: "#E1306C",
	},
	{
		id: "telegram",
		icon: telegram,
		link: "https://t.me/yonas1993",
		bg: "#0088CC",
	},
];

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "projects",
		title: "Projects",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Mobile  Developer",
		icon: web,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "AI / Machine Learning Engineer",
		icon: web,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Vue js",
		icon: vue,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Machine Learning Engineer",
		company_name: "Dan Energy Ethiopia Research and Development",
		website: "https://www.danenergyethiopia.com/",
		icon: minabIcon,
		iconBg: "#E6DEDD",
		date: "Oct 2023 - 2024",
		points: [
			"Optimized code generation pipelines, leading to a 20% reduction in code generation time. Leveraged AI models to accurately predict and suggest JavaScript code snippets, significantly streamlining the development process for engineers and researchers.",
			"Enhanced productivity by 25% through the implementation of AI-driven solutions, enabling faster prototyping and minimizing manual coding errors, thereby improving overall development efficiency.",
		],
	},

	{
		title: "Front end Developer intern",
		company_name: "Get-net software solutions",
		icon: getnet,
		website: "https://www.getnetsoft.com/",
		iconBg: "#E6DEDD",
		date: "Jun 2023 - sept 2023",
		points: [
			"Developing  web application using React.js and other related technologies.",
			"Collaborating with cross-functional teams ",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Certified AWS Solutions Architect",
		company_name: "ALX africa",
		icon: a2sv,
		website: "https://www.alxafrica.com/",
		iconBg: "#E6DEDD",
		date: "Dec 2023 - 2024 ",

		points: [
			"I earned the AWS Certified Solutions Architect certification, which validates my ability to design and implement highly scalable,reliable, and cost-effective systems on the AWS platform",
			"I earned my AWS Cloud Practitioner certificate, demonstrating my foundational knowledge of AWS cloud services and solutions.",
		],
	},
	{
		title: "Software Developer intern ",
		company_name: "AASTU Rock-Library Website",
		icon: aastu,
		website: "http://www.aastu.edu.et/",
		iconBg: "#E6DEDD",
		date: "2019 - 2020",
		points: [
			"Built an online platform for creating a dataset on mineral rocks in Ethiopia using VueJS and NodeJS. The Platform allows researchers to upload their findings and making it accessible to the public.",
			"My contributions led to a 50% increase in data submission rate from researchers,as the platform made it easier to upload and access findings, significantly improving data availability for the public.",
			"The integration I worked on improved the workflow efficiency by 30%, resulting in faster data processing and a smoother experience for researchers and users.",
		],
	},
];

const projects = [
	{
		name: "Store It",
		description:
			"Welcome to the ultimate solution for managing your documents! Our platform provides a secure and convenient space to store, organize, and access all your files anytime, anywhere.",
		tags: [
			{
				name: "Vue",
				color: "blue-text-gradient",
			},
			{
				name: "Hasura",
				color: "green-text-gradient",
			},
			{
				name: "graphql",
				color: "pink-text-gradient",
			},
			{
				name: "Go",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Pinia",
				color: "blue-text-gradient",
			},
		],
		image: recipe,
		source_code_link: "https://github.com/Yonas1219/store_it",
		web_link: "https://store-it-sooty.vercel.app/sign-in",
	},
	{
			name: "YC Directory",
			description:
				"Showcase your startup, connect with entrepreneurs, and compete in virtual pitch competitions. Submit ideas, vote, and get noticed!",
			tags: [
				{
					name: "Vue",
					color: "blue-text-gradient",
				},
				{
					name: "Nuxt.js",
					color: "green-text-gradient",
				},
				{
					name: "Axios",
					color: "blue-text-gradient",
				},
				{
					name: "Headless",
					color: "pink-text-gradient",
				},
	
				{
					name: "tailwind",
					color: "pink-text-gradient",
				},
				{
					name: "Pinia",
					color: "blue-text-gradient",
				},
				{
					name: ".Net",
					color: "blue-text-gradient",
				},
			],
			image: splitbor,
			source_code_link: "https://github.com/Yonas1219/yc_directory",
			web_link: "https://yc-directory-flame.vercel.app/",
		},
	
	{
		name: "Sheger Gebeta",
		description:
			"Indulge in culinary exploration! Discover and share delectable recipes on this intuitive, user-friendly platform designed for passionate food enthusiasts. Join the flavorful journey!",
		tags: [
			{
				name: "Vue",
				color: "blue-text-gradient",
			},
			{
				name: "Nuxt.js",
				color: "green-text-gradient",
			},
			{
				name: "Vue Apollo",
				color: "blue-text-gradient",
			},
			{
				name: "graphql",
				color: "pink-text-gradient",
			},

			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Pinia",
				color: "blue-text-gradient",
			},
		],
		image: sheger,
		source_code_link: "",
		web_link: "https://preview.shegergebeta.com/",
	},
	{
		name: "Plan international",
		description:
			"The goal of the project is to empower working and stay-at-home moms through establishing home-based childcare services in their own homes. In doing so, they will have their own business in a sector that is in high demand and continues to do so.",
		tags: [
			{
				name: "Vue",
				color: "blue-text-gradient",
			},
			{
				name: "Nuxt.js",
				color: "green-text-gradient",
			},
			{
				name: "Vue Apollo",
				color: "blue-text-gradient",
			},
			{
				name: "graphql",
				color: "pink-text-gradient",
			},

			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Pinia",
				color: "blue-text-gradient",
			},
		],
		image: plan,
		source_code_link: "",
		web_link: "https://staging.uymp.org/",
	},

	{
		name: "Tarixchi - Your Gateway to Unlock Uzbekistan's Hidden History",
		description:
			"Unique platform dedicated to unveiling the rich tapestry of Uzbekistan's history, one historically meaningful document at a time.",
		tags: [
			{
				name: "Vue",
				color: "blue-text-gradient",
			},
			{
				name: "Nuxt.js",
				color: "green-text-gradient",
			},
			{
				name: "Axios",
				color: "blue-text-gradient",
			},
			{
				name: "Headless",
				color: "pink-text-gradient",
			},

			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Pinia",
				color: "blue-text-gradient",
			},
			{
				name: ".Net",
				color: "blue-text-gradient",
			},
		],
		image: tarixchi,
		source_code_link: "",
		web_link: "https://tarixchi.vercel.app/",
	},
	//
	{
		name: "Shemach",
		description:
			"simple ecommerce platform that help users to make order of product and see the product they orderd, help them to search product and checkout",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Redux",
				color: "blue-text-gradient",
			},
		],
		image: shemach,
		source_code_link: "https://github.com/Yonas1219/shemach-main",
		web_link: "https://shemach-612da.web.app/",
	}
];

export { services, technologies, experiences, projects };
