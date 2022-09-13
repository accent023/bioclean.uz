import styled from "styled-components";

const StyledService = styled.li`
	display: flex;
	flex-direction: column;

	h3 {
		font-size: clamp(2.5rem, 5vw, 2.75rem);
		margin-bottom: 0.5em;
		color: ${({ theme }) => theme.colors.accent};
	}

	[role="button"] {
		display: flex;
		align-items: center;
		box-shadow: unset;
		gap: 0.5em;
		color: #333;
		padding: 1em 0;
		margin-top: auto;
		transition: 500ms ease-in-out;
		align-self: flex-start;

		&:hover svg {
			transform: translate(7px, 2px);
			fill: ${({ theme }) => theme.colors.accent};
		}

		svg {
			transition: inherit;
			transform: translateY(2px);
			fill: #333;
		}
	}
`;

export default StyledService;
