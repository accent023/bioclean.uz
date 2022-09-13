import styled from "styled-components";

const StyledServices = styled.section`
	position: relative;
	overflow: hidden;
	background: linear-gradient(
		75deg,
		#fff 70%,
		${({ theme }) => theme.colors.accent} 40%
	);

	&:hover::before {
		right: -10rem;
	}

	// Exterminator as a decoration
	&::before {
		content: "";
		display: block;
		position: absolute;
		right: 1em;
		bottom: 0;
		width: 65rem;
		height: 100%;
		background-image: url("/images/pest-control.png");
		background-repeat: no-repeat;
		background-size: 100%, 20rem;
		background-position: center bottom;
		transition: 1.5s 500ms ease-in-out;
		z-index: 2;
	}

	// Cockroaches as a decoration
	&::after {
		content: "";
		display: block;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 30%;
		height: 100%;
		background: url("/images/cockroaches.png") center right / 36rem repeat
			fixed;
	}

	// Dots as a decoration
	.dots {
		max-width: 5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
		position: absolute;
		top: 16.5em;
		left: -0.75em;
		z-index: 1;

		span {
			width: 7px;
			height: 7px;
			border-radius: 100%;
			background: ${({ theme }) => theme.colors.accent};
		}
	}

	// RWD
	@media (max-width: 1350px) {
		&:hover {
			&::before {
				right: -30rem;
			}
		}

		&::before {
			right: -30rem;
		}

		.dots {
			display: none;
		}
	}

	@media (max-width: 992px) {
		background: none;

		&::before,
		&::after {
			display: none;
		}
	}

	@media (max-width: 768px) {
		padding-bottom: clamp(20rem, 75vw, 60rem);
		background: linear-gradient(
			to bottom,
			#fff 80%,
			${({ theme }) => theme.colors.accent} 30%
		);

		&:hover {
			&::before {
				right: 0;
			}
		}

		&::before {
			display: block;
			width: 100%;
			min-width: 35rem;
			right: 0;
			transition: none;
		}
	}
`;

export const Content = styled.div`
	padding: 5em 0;

	h2 {
		margin-bottom: 2em;
	}
`;

export const ListOfServices = styled.ul`
	width: 70%;
	list-style: none;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	li {
		margin: 1.25em 0;
		width: 47%;
	}

	// RWD

	@media (max-width: 992px) {
		width: 90%;
	}

	@media (max-width: 768px) {
		width: 100%;
		display: block;
		text-align: center;

		li {
			width: 100%;

			[role="button"] {
				margin-inline: auto;
			}
		}
	}
`;

export const RombDecoration = styled.img`
	position: absolute;
	bottom: 0;
	right: -5rem;
	z-index: 1;
	width: 62.5rem;
	mix-blend-mode: luminosity;

	// RWD
	@media (max-width: 1350px) {
		right: -22rem;
	}

	@media (max-width: 1200px) {
		right: -30rem;
	}

	@media (max-width: 992px) {
		display: none;
	}
`;

export default StyledServices;
