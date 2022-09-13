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

export const Phone = styled.a`
	text-decoration: none;
	font-size: 1.8rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	gap: 0.5em;
	padding: 0.5em 0.85em;
	border-radius: 5px;

	svg {
		font-size: 1.75rem;
		fill: ${({ theme }) => theme.colors.accent};
		color: ${({ theme }) => theme.colors.accent};
	}
`;

export default StyledHeader;
