import styled from "styled-components";

const StyledCustomers = styled.section``;

export const Content = styled.div`
	padding: 3em 0;

	h2 {
		margin-bottom: 2em;

		.title {
			padding-bottom: 0.25em;
			margin-bottom: 1.5rem;

			&::after {
				height: 3px;
				background: #333;
			}
		}
	}

	.swiper {
		--swiper-theme-color: ${({ theme }) => theme.colors.accent};
		position: relative;

		.swiper-slide {
			-webkit-transform: translateZ(0);
		}
	}
`;

export const ListOfCustomers = styled.div`
	padding-bottom: 3em;
	margin-bottom: 3em;
	border-bottom: 1px solid #eee;

	.swiper {
		padding-top: 3.5em;

		&-slide {
			overflow: hidden;
			cursor: pointer;
		}
	}
`;

export const ListOfTestimonials = styled.ul`
	text-align: center;

	.swiper {
		padding: 0.5em 0;
	}
`;

export const Controllers = styled.div`
	position: absolute;
	width: 100%;
	height: auto;
	right: 0;
	top: 0;
	display: flex;
	align-items: center;
	gap: 5rem;

	button {
		transition: 500ms ease-in-out;
		border: 0;
		box-shadow: unset;

		&:hover {
			opacity: .5;
		}

		svg {
			fill ${({ theme }) => theme.colors.accent};
		}
	}
`;

export default StyledCustomers;
