import styled from "styled-components";
import { FadeIn } from "../../Animations.styled";

const StyledHeader = styled.header`
	width: 100%;
	top: 0;
	left: 0;
	z-index: 999;
	background: rgba(0, 0, 0, 0.5);
	opacity: 0;
	animation: ${FadeIn} 1s 2s forwards;
	background: ${({ sticky }) => (sticky ? "#fff" : "rgba(0, 0, 0, 0.5)")};
	position: ${({ sticky }) => (sticky ? "fixed" : "absolute")};
	color: ${({ sticky }) => (sticky ? "#333" : "#fff")};
	box-shadow: ${({ sticky }) =>
		sticky ? "0 3px 3px -3px rgba(0, 0, 0, .25)" : "none"};
	transition: background 500ms;

	// RWD
	@media (max-width: 992px) {
		position: fixed;
		background: rgba(255, 255, 255, 255.95);
		border-bottom: 1px solid #eee;
	}
`;

export const Content = styled.div`
	padding: 1.25rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: currentcolor;

	@media (max-width: 992px) {
		padding: 0.3rem 0;
	}
`;

export const Logo = styled.div`
	width: 17.5rem;
`;

export default StyledHeader;
