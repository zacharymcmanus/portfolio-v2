import React from 'react';
import styled from 'styled-components';
import {
	Socials,
	GAAnchor
} from '../components';
import {
	COLORS,
	TYPOGRAPHY
} from '../atoms';


export const FooterSection = ({ id }) => (
	<Section id={id}>
		<StyledH3 color={COLORS.WHITE} align='center'>Let's develop something great together!</StyledH3>
		<StyledP color={COLORS.GREY_6} align='center'>
			Shoot me an email at: <A href="mailto: zacharymcmanus@gmail.com" rel="noopener noreferrer">zacharymcmanus@gmail.com</A>
		</StyledP>
		<TYPOGRAPHY.S2 color={COLORS.GREY_5} align='center'>&copy; 2020 Zachary McManus, All Rights Reserved.</TYPOGRAPHY.S2>
		<StyledSocials small />
	</Section>
);

const Section = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8rem 6rem 7rem 6rem;
	background-color: #00000020;
`;

const StyledH3 = styled(TYPOGRAPHY.H3)`
	margin-bottom: 3rem;
`;

const StyledP = styled(TYPOGRAPHY.P)`
	margin-bottom: 3rem;
`;

const A = styled(GAAnchor)`
	:link,
	:visited {
		padding: .1rem .5rem;
		background-color: ${COLORS.PRIMARY};
		color: ${COLORS.WHITE};
		text-decoration: none;
	}

	:hover {
		border-bottom: 2px solid ${COLORS.WHITE};
	}
`;

const StyledSocials = styled(Socials)`
	margin-top: 1.2rem;
	margin-bottom: 2rem;
`;
