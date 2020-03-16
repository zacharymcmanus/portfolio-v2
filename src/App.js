import React, { Component } from 'react';
import ReactGA from 'react-ga';
import ScrollReveal from 'scrollreveal';
import { MeteorShowers } from './components';
import { GOOGLE_ANALYTICS } from './data';
import {
	GlobalStyle,
	SCROLL_REVEAL_CONFIG
} from './atoms'
import {
	NavBar,
	HeroSection,
	ProfileSection,
	TechnologiesSection,
	PortfolioSection,
	ExperiencesSection,
	EducationSection,
	OrganizationsSection,
	ExtracurricularSection,
	FooterSection
} from './sections';


// Initialize GA (Google Analytics) to collect traffic data.
ReactGA.initialize(GOOGLE_ANALYTICS);

class App extends Component {
	componentDidMount() {
	    // Register a pageview event for GA
	    ReactGA.pageview(window.location.pathname + window.location.search);
	    // ScrollReveal().reveal('.scrollreveal', SCROLL_REVEAL_CONFIG);
	}

	render() {
		return (
			<>
				<GlobalStyle />
				<MeteorShowers num={10} />
				<NavBar />
				<HeroSection id='home' />
				<ProfileSection id='about' />
				<TechnologiesSection id='skills' />
				<ExperiencesSection id='experiences' />
				<EducationSection id='education' />
				<PortfolioSection id='portfolio' />
				<OrganizationsSection id='organizations' />
				<ExtracurricularSection id='hobbies' />
				<FooterSection id='footer' />
			</>
		)
	}
}

export default App;
