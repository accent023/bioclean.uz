import styled from "styled-components";

const StyledTestimonial = styled.div`
	position: relative;
	max-width: 75ch;
	margin: 0 auto;
	padding: 3em 3em;
	border-radius: 15px;
	user-select: none;

	h3 {
		font-size: 3.25rem;
		margin-bottom: 0.25em;
	}

	p {
		line-height: 1.6;
		font-size: 1.75rem;
	}

	// Decorations
	.quote {
		position: absolute;
		font-size: 3rem;
		fill: ${({ theme }) => theme.colors.accent};

		&--left {
			top: 3rem;
			left: 3rem;
		}

		&--right {
			bottom: 3rem;
			right: 3rem;
		}
	}
`;

export default StyledTestimonial;
