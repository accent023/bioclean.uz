import styled from "styled-components";

const StyledInsect = styled.li`
	h3 {
		font-size: 2.5rem;
		margin-bottom: 0.75em;
	}

	p {
		font-size: 1.6rem;
	}

	a {
		display: flex;
		align-items: center;
		padding: 0.5em 0;
		font-family: "Jost", sans-serif;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #111;
		cursor: pointer;
		position: absolute;
		top: 100%;
		text-decoration: none;
		transition: 500ms ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.accent};
		}

		&:hover + div .sniper {
			opacity: 1;
			transform: scale(1.2);
		}

		&:hover + div .circle {
			fill: #fff;
		}

		&:hover + div::after {
			background: red;
			transform: translate(-50%, -0.35rem);
		}
	}

	@media (max-width: 768px) {
		p {
			font-size: inherit;
		}
	}
`;

export const ImageWrapper = styled.div`
	width: 9rem;
	height: 9rem;
	margin-bottom: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: 500ms ease-in-out;

	&::after {
		content: "";
		display: block;
		width: 95%;
		height: 7px;
		background: ${({ theme }) => theme.colors.accent};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		z-index: 1;
		transition: inherit;
	}

	.circle {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 50%;
		fill: ${({ theme }) => theme.colors.accent};
		transition: 500ms ease-in-out;
		z-index: -2;
	}

	.sniper {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 3;
		top: 0;
		left: 0;
		opacity: 0;
		transform: scale(2.5);
		transition: 350ms ease-in-out;
	}

	.insect {
		width: 100%;
		height: 100%;
		z-index: -1;
		transition: 500ms;

		svg {
			width: inherit;
			height: inherit;
		}

		// Types
		&--cockroach,
		&--scorpion {
			width: 11rem;
			height: 11rem;
		}

		&--bedbug {
			transform: translateY(-0.5rem);
		}

		&--mosquito {
			transform: translateY(0.3rem) rotate(-45deg);
		}

		&--rat {
			transform: translateX(-0.75rem);
		}

		&--scorpion {
			transform: translateX(-1rem);
		}

		&--ant {
			transform: rotate(35deg);
		}
	}

	// RWD
	@media (max-width: 768px) {
		margin-inline: auto;
	}
`;

export default StyledInsect;
