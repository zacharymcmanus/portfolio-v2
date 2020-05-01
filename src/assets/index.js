// Import fonts and its variants
import FONT_HEAVY from './fonts/StratumNo1 Heavy.ttf';
import FONT_BOLD from './fonts/StratumNo1 Bold.ttf';
import FONT_MEDIUM from './fonts/StratumNo1 Medium.ttf';
import FONT_REGULAR from './fonts/StratumNo1 Regular.ttf';
import FONT_LIGHT from './fonts/StratumNo1 Light.ttf';
import FONT_THIN from './fonts/StratumNo1 Thin.ttf';

// Import PDF
import resumePDF from './zacharymcmanus-resume.pdf';

// Avatar image
import avatarJPG2 from './avatar-2.jpg';

// Experiences images
import svptiPNG from './experiences/svpti.png';
import vmcfPNG from './experiences/vmcf.png';
import vcPNG from './experiences/vc.png';

// Education images
import csusPNG from './education/csus.png';
import cdPNG from './education/cd.png';

// Organizations images
import tedPNG from './organizations/tedxoak.png';
import vawPNG from './organizations/vaw.png';

// Extracirricular images
import bookPNG from './outside/book.png';
import workoutPNG from './outside/workout.png';
import cameraPNG from './outside/camera.png';
import planePNG from './outside/plane.png';

// Portfolio images
import dronePNG from './portfolio/drone.png';
import flashcardsPNG from './portfolio/flashcards.png';
import grouplyPNG from './portfolio/grouply.png';
import miscasasPNG from './portfolio/miscasas.png';
import sketcherPNG from './portfolio/sketcher-io.png';
import trainEliteJPG from './portfolio/train-elite.jpg';
import visurestPNG from './portfolio/visurest.png';
import wanderPinsPNG from './portfolio/wander-pins.png';
import zphotosPNG from './portfolio/z-photos.png';

// Menu SVGs
import { ReactComponent as MenuSVG } from './icons/menu.svg';

// About SVGs
import { ReactComponent as TranslateSVG } from './icons/google_translate.svg';
import { ReactComponent as GmailSVG } from './icons/gmail.svg';
import { ReactComponent as PinSVG } from './icons/pin.svg';

// Social SVGs
import { ReactComponent as GitHubSVG } from './icons/github.svg';
import { ReactComponent as LinkedInSVG } from './icons/linkedin.svg';
import { ReactComponent as TwitterSVG } from './icons/twitter.svg';
import { ReactComponent as CodePenSVG } from './icons/codepen.svg';

// Technology SVGs
import { ReactComponent as PythonSvg } from './technologies/python.svg';
import { ReactComponent as JavaSvg } from './technologies/java.svg';
import { ReactComponent as SwiftSvg } from './technologies/swift.svg';
import { ReactComponent as JavaScriptSVG } from './technologies/javascript.svg';
import { ReactComponent as Html5Svg } from './technologies/html5.svg';
import { ReactComponent as Css3Svg } from './technologies/css3.svg';
import { ReactComponent as ReactSvg } from './technologies/react.svg';
import { ReactComponent as ReduxSvg } from './technologies/redux.svg';
import { ReactComponent as AngularSvg } from './technologies/angular.svg';
import { ReactComponent as TypescriptSvg } from './technologies/typescript.svg';
import { ReactComponent as DjangoSvg } from './technologies/django.svg';
import { ReactComponent as JquerySvg } from './technologies/jquery.svg';
import { ReactComponent as SassSvg } from './technologies/sass.svg';
import { ReactComponent as Firebase } from './technologies/firebase.svg';
import { ReactComponent as MySQLSvg } from './technologies/mysql.svg';
import { ReactComponent as MongoDBSvg } from './technologies/mongodb.svg';
import { ReactComponent as AWSSvg } from './technologies/amazonaws.svg';
import { ReactComponent as GitSvg } from './technologies/git.svg';
import { ReactComponent as NodeJSSvg } from './technologies/node-dot-js.svg';
import { ReactComponent as JestSvg } from './technologies/jest.svg';
import { ReactComponent as AdobeIllSvg } from './technologies/adobeillustrator.svg';
import { ReactComponent as AdobePSSvg } from './technologies/adobephotoshop.svg';
import { ReactComponent as GraphQLSvg } from './technologies/graphql.svg';
import { ReactComponent as GatsbySvg } from './technologies/gatsby.svg';

// ------------------------------------------

export const fonts = {
	FONT_HEAVY,
	FONT_BOLD,
	FONT_MEDIUM,
	FONT_REGULAR,
	FONT_LIGHT,
	FONT_THIN
}

export { resumePDF };

export { avatarJPG2 };

export const experiencesPNGs = {
	svptiPNG,
	vmcfPNG,
	vcPNG
};

export const educationPNGs = {
	cdPNG,
	csusPNG,
};

export const organizationsPNGs = {
	tedPNG,
	vawPNG
};

export const outsidePNGs = {
	bookPNG,
	workoutPNG,
	cameraPNG,
	planePNG
};

export const portfolioImages = {
	dronePNG,
	flashcardsPNG, 
	grouplyPNG,
	miscasasPNG,
	sketcherPNG,
	trainEliteJPG,
	visurestPNG,
	wanderPinsPNG,
	zphotosPNG
};

export const icons = {
	TranslateSVG,
	GmailSVG,
	MenuSVG,
	PinSVG,
	GitHubSVG,
	TwitterSVG,
	CodePenSVG,
	LinkedInSVG,
};

export const technologies = [
	// Row 1 
	{
		name: 'JavaScript',
		bgColor: '#F7DF1E',
		Svg: JavaScriptSVG
	},
	{
		name: 'TypeScript',
		bgColor: '#007ACC',
		Svg: TypescriptSvg
	},
	{
		name: 'Python',
		bgColor: '#3776AB',
		Svg: PythonSvg
	},
	{
		name: 'Java',
		bgColor: '#007396',
		Svg: JavaSvg
	},
	{
		name: 'Swift',
		bgColor: '#FA7343',
		Svg: SwiftSvg
	},
	{
		name: 'Node.js',
		bgColor: '#339933',
		Svg: NodeJSSvg
	},
	// Row 2
	{
		name: 'HTML',
		bgColor: '#E34F26',
		Svg: Html5Svg
	},
	// 5
	{
		name: 'CSS',
		bgColor: '#1572B6',
		Svg: Css3Svg
	},
	{
		name: 'Sass',
		bgColor: '#CC6699',
		Svg: SassSvg
	},
	{
		name: 'jQuery',
		bgColor: '#0769AD',
		Svg: JquerySvg
	},
	{
		name: 'MySQL',
		bgColor: '#3776AB',
		Svg: MySQLSvg
	},
	{
		name: 'MongoDB',
		bgColor: '#47A248',
		Svg: MongoDBSvg
	},
	// Row 3
	{
		name: 'Angular',
		bgColor: '#DD0031',
		Svg: AngularSvg
	},
	{
		name: 'React',
		bgColor: '#61DAFB',
		Svg: ReactSvg
	},
	{
		name: 'Redux',
		bgColor: '#764ABC',
		Svg: ReduxSvg
	},
	{
		name: 'GraphQL',
		bgColor: '#E10098',
		Svg: GraphQLSvg
	},
	{
		name: 'Gatsby',
		bgColor: '#663399',
		Svg: GatsbySvg
	},
	{
		name: 'Firebase',
		bgColor: '#FFCA28',
		Svg: Firebase
	},
	// Row 4
	{
		name: 'Django',
		bgColor: '#092E20',
		Svg: DjangoSvg
	},
	{
		name: 'AWS',
		bgColor: '#232F3E',
		Svg: AWSSvg
	},
	{
		name: 'Git',
		bgColor: '#F05032',
		Svg: GitSvg
	},
	// 19
	{
		name: 'Jest',
		bgColor: '#C21325',
		Svg: JestSvg
	},
	{
		name: 'Illustrator',
		bgColor: '#FF7C00',
		Svg: AdobeIllSvg
	},
	{
		name: 'Photoshop',
		bgColor: '#00C8FF',
		Svg: AdobePSSvg
	},
];
