import styled from "styled-components";

const StyledDocuments = styled.section`
	background: #fff;
`;

export const Content = styled.div`
	padding: 0 0 5em;

	h2 {
		margin-bottom: 2em;
	}
`;

export const ListOfDocuments = styled.ul`
	list-style: none;
	display: flex;
	gap: 2em;

	li {
		width: 30%;
	}
`;

export default StyledDocuments;
