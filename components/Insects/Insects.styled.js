import styled from "styled-components";

const StyledInsects = styled.section`
	overflow-x: hidden;
	position: relative;

	&::after {
		content: "";
		display: block;
		background: #fafafa;
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		width: 100rem;
		height: 100rem;
		border-radius: 100%;
		left: 80%;
		z-index: -1;
	}
`;

export const Content = styled.div`
	padding: 5em 0;

	h2 {
		margin-bottom: 1em;
	}

	@media (max-width: 768px) {
		padding: 3.5em 0;
	}

	@media (max-width: 576px) {
		h2 {
			margin-bottom: 0;
		}
	}
`;

export const ListOfInsects = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	list-style: none;
	max-width: 107rem;

	li {
		width: 30%;
		margin: 3.5em 0;
		position: relative;

		&:nth-child(3),
		&:nth-child(6) {
			&::after {
				content: "";
				display: block;
				position: absolute;
				right: 0;
			}
		}

		&:nth-child(3) {
			&::after {
				width: 55rem;
				min-height: 55rem;
				top: -125%;
				left: 5rem;
				background: url("/images/mosquitos-decor.png") center / contain
					no-repeat;
				pointer-events: none;
			}
		}

		&:nth-child(6) {
			&::after {
				width: 50rem;
				min-height: 15rem;
				top: -5rem;
				left: 9rem;
				background: url("/images/ants-running.png") right / 34rem repeat-x;
			}
		}
	}

	// RWD
	@media (max-width: 992px) {
		li {
			width: 45%;

			&:nth-child(3) {
				&::after {
					width: 30rem;
					min-height: 30rem;
					top: -50%;
					left: 5rem;
				}
			}
		}
	}

	@media (max-width: 768px) {
		li {
			width: 100%;
			margin: 4em auto;
			text-align: center;

			&:nth-child(3) {
				&::after {
					width: 30rem;
					min-height: 30rem;
					top: -50%;
					left: unset;
					right: 0;
				}
			}

			&:nth-child(6) {
				&::after {
					left: clamp(15rem, 55vw, 36rem);
				}
			}

			a {
				top: 105%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
`;

export default StyledInsects;
