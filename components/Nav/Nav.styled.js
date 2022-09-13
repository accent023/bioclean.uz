import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	gap: 1.5em;

	a {
		font-size: 1.65rem;
		text-decoration: none;
		font-weight: 600;
		text-transform: uppercase;
		transition: 500ms ease-in-out;
		padding: 0.5em 0;
		position: relative;

		&:hover {
			color: ${({ theme }) => theme.colors.accent};

			&::after {
				opacity: 1;
				transform: scaleX(1);
				transform-origin: center;
			}
		}

		&::after {
			content: "";
			display: block;
			width: 75%;
			height: 1.75px;
			background: ${({ theme }) => theme.colors.accent};
			position: absolute;
			bottom: 0;
			transition: inherit;
			opacity: 0;
			transform: scaleX(0);
			transform-origin: left;
		}
	}
`;

export default StyledNav;
