import styled from "styled-components";
import { FadeIn } from "../../Animations.styled";

const StyledHeader = styled.header`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 999;
	background: rgba(0, 0, 0, 0.5);
	opacity: 0;
	animation: ${FadeIn} 1s 2s forwards;

	// RWD
	@media (max-width: 992px) {
		position: fixed;
		background: rgba(255, 255, 255, 255.95);
		border-bottom: 1px solid #eee;
	}
`;

export const Content = styled.div`
	padding: 1.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.div`
	width: 17.5rem;
`;

export default StyledHeader;
