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
`;

export default StyledInsects;
