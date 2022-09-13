import styled from "styled-components";

const StyledNav = styled.nav`
	position: relative;

	.hamburger-react {
		display: none;
		color: #333;
	}

	ul {
		display: flex;
		gap: 1.5em;
		list-style: none;
	}

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

	// RWD
	@media (max-width: 992px) {
		.hamburger-react {
			display: block;
			position: fixed;
			top: 0;
			z-index: 3;
		}

		ul {
			flex-direction: column;
			width: 100%;
			max-width: 45rem;
			height: auto;
			position: fixed;
			top: 0;
			left: -100%;
			background: rgba(255, 255, 255, 255.95);
			height: 100vh;
			align-items: center;
			justify-content: center;
			box-shadow: 0 3px 7px rgba(0, 0, 0, 0.12);
			transition: 500ms ease-in-out;

			&.mobile {
				left: 0;
			}
		}

		a {
			font-size: 2rem;
			color: #333;
		}
	}
`;

export default StyledNav;
