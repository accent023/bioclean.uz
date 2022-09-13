import styled from "styled-components";

const StyledTestimonial = styled.div`
	position: relative;
	width: 100%;
	max-width: 75ch;
	margin: 0 auto;
	padding: 3em 3em;
	border-radius: 15px;
	user-select: none;

	h3 {
		font-size: 3.25rem;
		margin-bottom: 0.5em;
	}

	p {
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

	@media (max-width: 992px) {
		padding: 2em 2em;

		h3 {
			line-height: 1.25;
		}
	}

	@media (max-width: 768px) {
		padding: 3em 0;

		.quote {
			font-size: 2.25rem;

			&--left {
				top: 0;
				left: 1rem;
			}

			&--right {
				bottom: 0;
				right: 1rem;
			}
		}
	}
`;

export default StyledTestimonial;
