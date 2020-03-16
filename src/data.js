import {
	icons,
	portfolioImages,
	experiencesPNGs,
	educationPNGs,
	organizationsPNGs,
	outsidePNGs
} from './assets';

export const GOOGLE_ANALYTICS = 'UA-158029763-1';

export const SOCIALS = [
	{
		Svg: icons.LinkedInSVG,
		link: 'https://www.linkedin.com/in/zacharymcmanus/'
	},
	{
		Svg: icons.GitHubSVG,
		link: 'https://github.com/zacharymcmanus'
	},
	{
		Svg: icons.CodePenSVG,
		link: 'https://codepen.io/zacharymcmanus/'
	},
	{
		Svg: icons.TwitterSVG,
		link: 'https://twitter.com/zachary_mcmanus'
	},
];

// Icons are from "./assets" and follows the order of the exported icons array
export const PORTFOLIO = [
	{
        imgPath: portfolioImages.visurestPNG,
        icons: [12, 1, 6, 7],
        title: 'Visurest',
		text: 'Mobile app built in Ionic 4 to record rest time and track total workout duration.',
        sourceLink: 'https://github.com/zacharymcmanus/visurest'
    },
    {
        imgPath: portfolioImages.dronePNG,
        icons: [6, 7, 0, 13, 5],
        title: 'JavaScript Drone',
        text: 'Built a controller for DJI Tello Drone with a React frontend and Node.js backend.',
        sourceLink: 'https://github.com/zacharymcmanus/drone-controller'
    },
    {
        imgPath: portfolioImages.miscasasPNG,
        icons: [12, 1, 6, 7, 11, 5],
        title: 'Miscasas',
        text: 'All-in-one rental manager app built in MEAN.',
        sourceLink: 'https://github.com/zacharymcmanus/miscasas'
    },
    {
        imgPath: portfolioImages.zphotosPNG,
        icons: [6, 7, 0],
        title: 'Zachary McManus Photography',
        text: 'My personal photography page utilizing css grid, flexbox, and custom media queries.',
        liveLink: 'https://zacharymcmanus.github.io/photography-portfolio/',
        sourceLink: 'https://github.com/zacharymcmanus/photography-portfolio'
    },
    {
        imgPath: portfolioImages.wanderPinsPNG,
        icons: [6, 7, 0, 13, 15, 11],
        title: 'WanderPins',
        text: 'Global map for users to upload geo-located images and to connect with people from all around the world.',
        liveLink: 'https://wanderpins-h2kpdnvji.now.sh',
        sourceLink: 'https://github.com/zacharymcmanus/wander-pins'
	},
	{
        imgPath: portfolioImages.flashcardsPNG,
        icons: [6, 7, 0, 13, 7],
        title: 'Front-End Ninja',
        text: 'A flashcard app to master common front-end concepts and methodologies.',
        sourceLink: 'https://github.com/zacharymcmanus/react-flashcards',
        liveLink: 'https://react-study-flashcards.herokuapp.com/'
    },
    {
        imgPath: portfolioImages.grouplyPNG,
        icons: [6, 7, 0, 13, 17],
        title: 'Grouply',
        text: 'Live chat app for users to join specific chat channels to collaborate on certain interests and ideas.',
        liveLink: 'https://slack-d70c3.firebaseapp.com/',
        sourceLink: 'https://github.com/zacharymcmanus/grouply'
    },
    {
        imgPath: portfolioImages.sketcherPNG,
        icons: [6, 7, 0],
        title: 'Sketcher.io',
        text: 'Quickly draw out a wireframe, sketch, or idea that comes to mind.',
        sourceLink: 'https://github.com/zacharymcmanus/sketcher.io',
        liveLink: 'https://zacharymcmanus.github.io/sketcher.io/'
    },
    {
    	imgPath: portfolioImages.trainEliteJPG,
    	icons: [6,7,0,10,18],
    	title: 'TrainElite',
    	text: 'My first full-stack app built in Python, Django, and SQLite for users to easily log their training, nutrition, and fitness goals.'
    }
];

// Array of experiences, makes it easy to add or remove in the future
export const EXPERIENCES = [
	{
		logoPath: experiencesPNGs.svptiPNG,
		company: 'Silicon Valley Polytechnic Institute',
		link: 'https://www.svpti.com/',
		position: 'Front-End Software Engineer',
		duration: 'December 2019 - February 2020',
		details: [
			'Designed and developed custom UI for new payment platform.',
			'Refactored multiple Angular services using modern JavaScript features in ES6+.',
			'Created multiple unit tests to validate that certain functions perform as designed using Jasmine & Karma.',
			'Applied responsive design using css grid, flexbox, and custom media queries to ensure the application is streamlined across multiple devices',
			'Managed deployed application with AWS EC2 Ubuntu using Nginx with SSL.'
		]
	},
	{
		logoPath: experiencesPNGs.vmcfPNG,
		company: 'Valley Medical Center Foundation',
		link: 'https://vmcfoundation.org/',
		position: 'Full-Stack Software Engineer',
		duration: 'November 2018 - August 2019',
		details: [
			'Developed watchlist for tracking live auction bidding items for fundraising events using JavaScript, Node.js, Express, Socket.io, and MongoDB, facilitating over $500K raised per year.',
			'Resolved data flows issues related to saving updates to auction items, improving edit time by 2X as well as donation package accuracy utilizing JavaScript and jQuery.',
			'Implemented websockets for real-time updates using JavaScript, Node.js, Express, MongoDB and Socket.IO, reducing processing load by over 5000%.',
			'Designed UI utilizing Balsamiq to create well thought out wireframes with easy to follow user interface (UI).',
			'Participated in scrum agile development, actively engaging in daily standups, code reviews, planning sessions, and QA testing of new features going into production. ',
			'Recruited and trained three new developers utilizing self-designed candidate-selection process.',
			'Performed application testing on multiple devices (mobile, tablet, desktop) for streamlined user experience.',
			'Managed deployment of application using Media Temple and Plesk.'
		]
	},
	{
		logoPath: experiencesPNGs.vcPNG,
		company: 'VibrantCare Physical Therapy',
		link: 'https://vibrantcare.com/',
		position: 'Physical Therapy Technician',
		duration: 'January 2016 - May 2018',
		details: [
			'Educated patients about their specific conditions and how to create an effective plan to help them improve their strength and range of motion while reducing pain levels.',
			'Treated patients by helping them perform prescribed exercises, monitor motion, measure mobility, and apply certain modalities such as ultrasound or electrical stimulation.',
			'Created home exercise programs for patients to take home.',
			'Responsible for ordering office and physical therapy supplies when needed.',
			'Coordinated patient evaluations and follow up appointments among multiple clinicians.',
			'Communicated effectively between company staff, MD personnel, and insurance companies through telephone, fax, and written communication lines.',
			'Exceeded patient expectations by continuously providing excellent customer service and catering to each individual’s specific needs.'
		]
	}
];

export const EDUCATION = [
	{
		logoPath: educationPNGs.cdPNG,
		company: 'Coding Dojo',
		link: 'https://www.codingdojo.com/',
		position: 'Certificate in Full-Stack Web Development',
		duration: '2018'
	},
	{
		logoPath: educationPNGs.csusPNG,
		company: 'California State University, Sacramento',
		link: 'https://www.csus.edu/',
		position: 'Bachelor of Science in Exercise Science',
		duration: '2015'
	}
]

export const ORGANIZATIONS = [
	{
		logoPath: organizationsPNGs.tedPNG,
		company: 'TEDxOakland',
		link: 'https://tedxoakland.org/',
		position: 'Web Developer',
		details: [
			'Responsible for keeping the website content up-to-date and ensuring pages are easily navigable on all devices.'
		]
	},
	{
		logoPath: organizationsPNGs.vawPNG,
		company: 'Volunteers Around the World',
		link: 'http://www.volunteersaroundtheworld.org/',
		position: 'Medical Mission Volunteer & Spanish Translator',
		details: [
			'For 2 weeks, I traveled to various communities in the Dominican Republic (2016) and Vietnam (2017) to set up health clinics and help provide free care. Some of my roles included shadowing medical doctors during clinical evaluations, performing vital signs and triage, recording patient intake and medical history, managing pharmacy by properly distributing prescribed medications to patients, & educating patients about hygiene, proper nutrition, and first aid.'
		]
	}
];

export const EXTRACURRICULAR = [
	{
		img: outsidePNGs.workoutPNG,
		title: 'Exercise',
		text: 'I enjoy all types of physical activitiy especially CrossFit, surfing, yoga, and hiking.'
	},
	{
		img: outsidePNGs.planePNG,
		title: 'Travel',
		text: 'I like traveling around the world to experience diverse cultures, food, and languages.'
	},
	{
		img: outsidePNGs.cameraPNG,
		title: 'Photography',
		text: 'I love being able to capture special moments with a photograph.'
	},
	{
		img: outsidePNGs.bookPNG,
		title: 'Learning',
		text: 'A majority of my free time is spent discovering new ideas and picking up skills from various online courses,  tutorials, and podcasts.'
	}
];


