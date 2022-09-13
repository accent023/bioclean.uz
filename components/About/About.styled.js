import styled from "styled-components";

const StyledAbout = styled.section`
	overflow-x: hidden;

	@media (max-width: 768px) {
		background: #fafafa;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 5em 0;

	.dots {
		position: absolute;
		display: flex;
		flex-wrap: wrap;
		gap: 7px;

		span {
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 50%;
			background: ${({ theme }) => theme.colors.accent};
		}
	}

	@media (max-width: 768px) {
		padding: 3.5em 0;
	}
`;

export const Main = styled.div`
	width: 54%;
	position: relative;

	h2 {
		font-family: "Open Sans", sans-serif;
		color: #1c1c1c;
		font-size: clamp(3.25rem, 3.5vw, 4.75rem);
		line-height: 1.15;
		margin-bottom: 1em;
	}

	p {
		margin-bottom: 3em;
	}

	button {
		padding: 1em 3em;
		background: ${({ theme }) => theme.colors.accent};
		color: #fff;
		display: flex;
		align-items: center;
		gap: 0.5em;

		svg {
			font-size: 2.5rem;
			transform: translateY(3px);
		}
	}

	// RWD
	@media (max-width: 992px) {
		width: 100%;
		margin-bottom: 5.5em;

		h2 {
			max-width: 30ch;
		}
	}
`;

export const Highlights = styled.ul`
	padding-left: 3.25rem;
	margin-bottom: 2.25em;

	li {
		display: flex;
		gap: 0.5em;
		font-weight: 600;
		color: #333;
		margin-bottom: 0.25em;

		&:last-child {
			margin-bottom: 0;
		}

		svg {
			width: 5%;
			font-size: 2.5rem;
			transform: translateY(3px);
			color: ${({ theme }) => theme.colors.accent};
			fill: ${({ theme }) => theme.colors.accent};
		}

		p {
			width: 95%;
			margin: 0;
			font-size: clamp(1.65rem, 2vw, 2rem);
		}
	}

	// RWD
	@media (max-width: 992px) {
		padding-left: 0;
	}
`;

export const ImagePart = styled.div`
	width: 37.5%;
	position: relative;

	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.colors.accent};
		position: absolute;
		top: 3rem;
		left: -3.25rem;
		border-radius: 15px;
	}

	// Dots
	.dots {
		&--long {
			right: -3.75rem;
			top: -3rem;
			max-width: 8.5rem;
		}

		&--short {
			max-width: 10rem;
			left: -7.5rem;
			bottom: -7.5rem;
		}
	}

	// RWD
	@media (max-width: 992px) {
		width: 75%;
		max-width: 45rem;
		margin: 0 auto;
	}

	@media (max-width: 576px) {
		width: 85%;
	}

	@media (max-width: 768px) {
		margin-bottom: 3.5em;
	}
`;

export const ImageWrapper = styled.div`
	border-radius: 15px;
	overflow: hidden;
`;

export const Experience = styled.div`
	position: absolute;
	bottom: 0;
	left: 7.5rem;
	padding: 1em 1.5em;
	border-radius: 15px 15px 0 0;
	background: ${({ theme }) => theme.colors.accent};
	font-weight: 700;
	font-family: "Jost";

	h3,
	p {
		color: #fff;
		line-height: 0.85;
	}

	h3 {
		font-size: 7.5rem;
	}

	p {
		font-size: 3rem;
		margin-left: 1.15rem;
	}

	// RWD
	@media (max-width: 576px) {
		padding: 1em 1.25em;
		left: 5rem;

		h3 {
			font-size: 6.5rem;
		}

		p {
			font-size: 2.5rem;
		}
	}
`;

export default StyledAbout;
