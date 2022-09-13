import styled from "styled-components";

const StyledAdvantages = styled.section`
	position: relative;
	overflow-x: hidden;

	h2 {
		margin-bottom: 2em;
	}

	.dots {
		position: absolute;
		top: 5rem;
		right: -5rem;
		display: flex;
		flex-wrap: wrap;
		max-width: 10rem;
		gap: 7px;

		span {
			width: 7px;
			height: 7px;
			border-radius: 7px;
			background: ${({ theme }) => theme.colors.accent};
		}
	}

	@media (max-width: 992px) {
		.dots {
			display: none;
		}
	}
`;

export const Content = styled.div`
	padding: 0 0 3em;

	@media (max-width: 768px) {
		padding: 3.5em 0;
	}
`;

export const ListOfAdvantages = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 5rem 10rem;

	li {
		width: 42.5%;
	}

	@media (max-width: 768px) {
		display: block;

		li {
			margin: 2em auto;
			width: 100%;
			text-align: center;
		}
	}
`;

export default StyledAdvantages;
