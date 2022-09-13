import styled from "styled-components";

const StyledDocuments = styled.section`
	@media (max-width: 768px) {
		background: #fafafa;
	}
`;

export const Content = styled.div`
	padding: 0 0 5em;

	h2 {
		margin-bottom: 2em;
	}

	@media (max-width: 768px) {
		padding: 3.5em 0;
	}
`;

export const ListOfDocuments = styled.ul`
	list-style: none;
	display: flex;
	gap: 2em;

	li {
		width: 30%;
	}

	@media (max-width: 768px) {
		display: block;

		li {
			width: 100%;
			margin-bottom: 3.5em;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;

export default StyledDocuments;
