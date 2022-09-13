import styled from "styled-components";
import { MoveUpAndDown, FadeIn } from "../../Animations.styled";

const StyledBanner = styled.section`
	background: url("/images/deratization-bg.jpg") center top / cover no-repeat;
	position: relative;
	transform-origin: left;
	animation: ${FadeIn} 2s ease-in-out forwards;

	@media (max-width: 768px) {
		background: url("/images/deratization-bg.jpg") center top / cover
			no-repeat;
		background-position: right;

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 1),
				rgba(0, 0, 0, 0.5)
			);
			position: absolute;
			top: 0;
			left: 0;
		}
	}
`;

export const Content = styled.div`
	min-height: 100vh;
	display: flex;
	position: relative;
	z-index: 1;

	@media (min-width: 1600px) {
		min-height: 75vh;
	}

	@media (max-width: 992px) {
		padding: 10vw 0;
		min-height: unset;
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
		width: 90%;
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

	@media (max-width: 768px) {
		margin-top: 5rem;
		padding: 2em 0;
	}
`;

export const Title = styled.span`
	font-size: clamp(5rem, 12.5vw, 12.5rem);
	text-transform: uppercase;
	text-shadow: 3px 1px 3px rgba(0, 0, 0, 0.15);

	@media (max-width: 768px) {
		font-size: 7rem;
	}
`;

export const Subtitle = styled.span`
	display: block;
	font-size: clamp(1.6rem, 3vw, 3.75rem);
	text-indent: 0.75rem;
	font-family: "Open Sans", sans-serif;
	font-weight: 600;

	@media (max-width: 768px) {
		text-indent: 0.3rem;
	}
`;

export default StyledBanner;
