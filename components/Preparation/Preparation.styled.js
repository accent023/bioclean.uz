import styled from "styled-components";

const StyledPreparation = styled.section``;

export const Content = styled.div`
	padding: 2.75em 0 5em;

	h2 {
		margin-bottom: 2em;
	}
`;

export const List = styled.ul`
	list-style: none;

	li {
		display: flex;
		line-height: 1.45;
		margin-bottom: 0.75em;
		padding-bottom: 0.75em;
		border-bottom: 1px solid #eee;

		&:last-child {
			margin-bottom: 0;
			border: none;
		}

		svg {
			font-size: 2.5rem;
			width: 3%;
		}

		p {
			width: 97%;
			font-size: 1.75rem;
			color: #777;
		}
	}
`;

export default StyledPreparation;
