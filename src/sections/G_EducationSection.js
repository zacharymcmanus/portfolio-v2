import React, {Component} from 'react';
import styled from 'styled-components';
import { media } from '../util';
import { EDUCATION } from '../data';
import {
	Section,
	GAAnchor
} from '../components';
import {
	COLORS,
	TYPOGRAPHY
} from '../atoms';


const OneExperience = ({ info: { logoPath, company, link, position, duration } }) => (
	<ExperienceDiv>
		<ImageDiv>
			<img src={logoPath} alt={company} />
		</ImageDiv>
		<div>
			<CompanyAnchor target='_blank' rel="noopener noreferrer" href={link}>
				<TYPOGRAPHY.H5 align='inherit' color='inherit'>{company}</TYPOGRAPHY.H5>
			</CompanyAnchor>
			<StyledP align='inherit' color={COLORS.GREY_2} weight={400}>{position}</StyledP>
			<StyledS1 align='inherit' color={COLORS.GREY_3}>{duration}</StyledS1>
		</div>
	</ExperienceDiv>
);

export class EducationSection extends Component {
	render() {
		return (
			<Section id={this.props.id} title='Education'>
				<div>
					{EDUCATION.map((info, i) => <OneExperience key={i} info={info} />)}
				</div>
			</Section>
		)
	}
}

const ExperienceDiv = styled.div`
	display: flex;
	align-items: center;
	padding: 4rem 3rem;

	:first-child {
		padding-top: 3rem;
	}

	:last-child {
		padding-bottom: 3rem;
	}

	:not(:last-child) {
		border-bottom: 1px solid ${COLORS.GREY_7};
	}

	${media.sizeV`
		flex-direction: column;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	`}
`;

const ImageDiv = styled.div`
	flex: 0 0 auto;
	display: flex;
	justify-content: center;
	width: 12rem;
	height: 12rem;
	margin-right: 3rem;
	overflow: hidden;

	img {
		height: 100%;
		width: auto;
	}

	${media.sizeIV`
		height: 10rem;
		width: 10rem;
	`}

	${media.sizeV`
		flex-direction: column;
		margin: 0 auto 1rem auto;
	`}
`;

const CompanyAnchor = styled(GAAnchor)`
	:link,
	:visited{
		cursor: ${props => props.href ? 'pointer' : 'none'};
		color: ${props => props.href ? COLORS.PRIMARY : COLORS.GREY_1};
		text-decoration: none;
	};

	:hover{
		text-decoration: ${props => props.href ? 'underline' : 'none'};
	};

	${media.sizeV`
		text-align: center;
	`}
`;

const StyledP = styled(TYPOGRAPHY.P)`
	margin: .18rem 0;

	${media.sizeV`
		text-align: center;
	`}
`;

const StyledS1 = styled(TYPOGRAPHY.S1)`
	margin-bottom: 1.4rem;

	${media.sizeV`
		text-align: center;
	`}
`;

