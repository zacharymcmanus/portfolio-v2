import React, {Component} from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../atoms';
import { Section } from '../components';
import { icons } from '../assets';


const ListItemComponent = ({ svg, value }) => (
	<ListItem>
		<IconDiv>{svg}</IconDiv>
		<TYPOGRAPHY.P>{value}</TYPOGRAPHY.P>
	</ListItem>
);

export class ProfileSection extends Component {
	render() {
		return (
			<Section id={this.props.id} title='ABOUT ME'>
				<WrapperDiv>
					<AboutDiv className='scrollreveal'>
						<StyledH5>Profile</StyledH5>
						<TYPOGRAPHY.P>
							Software engineer with a goal to improve people's lives by developing software that is both innovative and intuitive. Although I have full-stack experience, I really enjoy front-end development, where I'm constantly developing my creative side and focusing on providing the user a visually unique experience. I particularly specialize in HTML, CSS, JavaScript, React, and Angular to build applications that are fast, scalable and responsive.
						</TYPOGRAPHY.P>
					</AboutDiv>
					<InfoDiv className='scrollreveal'>
						<StyledH5>Info</StyledH5>
						<Ul>
							<ListItemComponent svg={<icons.GmailSVG />}
								value='zacharymcmanus&#64;gmail.com' />
							<ListItemComponent svg={<icons.PinSVG />}
								value='Sunnyvale, CA' />
							<ListItemComponent svg={<icons.TranslateSVG />}
								value='English, Spanish' />
						</Ul>
					</InfoDiv>
				</WrapperDiv>
			</Section>
		)
	}
};

const WrapperDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem .6rem;
`;

const AboutDiv = styled.div`
	flex: 1 1 60%;
	padding: 2rem;
`;

const InfoDiv = styled.div`
	flex: 1 0 40%;
	padding: 2rem;
`;

const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-content: space-between;
	list-style: none;
`;

const ListItem = styled.li`
	display: flex;
	align-items: flex-start;

	:not(:first-child) {
		margin-top: 1.2rem;
	};
`;

const StyledH5 = styled(TYPOGRAPHY.H5)`
	margin-bottom: 1.5rem;
`;

const IconDiv = styled.div`
	width: 2.5rem;
	height: auto;
	margin-right: 1.55rem;

	& > * {
		display: block;
		margin: auto;
	}
`;
