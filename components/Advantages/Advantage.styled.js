import styled from "styled-components";

const StyledAdvantage = styled.li`
	h3 {
		font-size: clamp(2rem, 3vw, 2.75rem);
		margin-bottom: 0.5em;
		line-height: 1.3;
	}

	@media (max-width: 768px) {
		h3 {
			font-family: "Open Sans", sans-serif;
		}

		p {
			font-size: 1.8rem;
		}
	}
`;

export default StyledAdvantage;
