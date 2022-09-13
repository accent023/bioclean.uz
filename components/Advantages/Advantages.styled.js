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
`;

export const Content = styled.div`
	padding: 0 0 3em;
`;

export const ListOfAdvantages = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 5rem 10rem;

	li {
		width: 42.5%;
	}
`;

export default StyledAdvantages;
