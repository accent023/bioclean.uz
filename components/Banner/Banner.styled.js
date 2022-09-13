import styled from "styled-components";
import { MoveUpAndDown, FadeIn } from "../../Animations.styled";

const StyledBanner = styled.section`
	background: url("/images/deratization-bg.jpg") center top / cover no-repeat;
	position: relative;
	transform-origin: left;
	animation: ${FadeIn} 2s ease-in-out forwards;
`;

export const Content = styled.div`
	min-height: 100vh;
	display: flex;

	@media (min-width: 1600px) {
		min-height: 75vh;
	}
`;

export const Main = styled.div`
	color: #fff;
	margin-top: 8.5em;

	h1 {
		line-height: 1.1;
		margin-bottom: 1em;
	}

	p {
		font-size: 1.85rem;
		max-width: 56ch;
		margin-bottom: 3em;
	}

	svg {
		width: 1.5rem;
		fill: ${({ theme }) => theme.colors.white};
		animation: ${MoveUpAndDown} 750ms ease-in-out alternate infinite;
	}

	@media (min-width: 1600px) {
		margin-top: 7em;

		svg {
			width: 1.25rem;
		}
	}
`;

export const Title = styled.span`
	font-size: clamp(5rem, 10vw, 12.5rem);
	text-transform: uppercase;
	text-shadow: 3px 1px 3px rgba(0, 0, 0, 0.15);
`;

export const Subtitle = styled.span`
	display: block;
	font-size: 3.75rem;
	text-indent: 0.75rem;
	font-family: "Open Sans", sans-serif;
	font-weight: 600;
`;

export default StyledBanner;
