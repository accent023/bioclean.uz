import styled from "styled-components";

const StyledDocument = styled.li`
	position: relative;
	overflow: hidden;
	border-radius: 15px;
	border: 5px solid ${({ theme }) => theme.colors.accent};

	&:hover > div {
		opacity: 1;
	}

	img {
		width: 100%;
		display: block;
		pointer-events: none;
	}
`;

export const Overlay = styled.div`
	position: absolute;
	bottom: 0;
	color: ${({ theme }) => theme.colors.accent};
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(250, 250, 250, 0.95);
	opacity: 0;
	transition: 250ms;
	display: flex;

	a {
		width: 100%;
		padding: 0.5em 3em;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		gap: 0.25em;
		font-weight: 600;
		opacity: 0.85;

		svg {
			fill: ${({ theme }) => theme.colors.accent};
			font-size: 3rem;
		}
	}
`;

export default StyledDocument;
