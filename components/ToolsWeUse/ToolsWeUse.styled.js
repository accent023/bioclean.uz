import styled from "styled-components";

const StyledToolsWeUse = styled.section`
	position: relative;
`;

export const Content = styled.div`
	padding: 0 0 3em;

	h2 {
		margin-bottom: 2em;
	}

	.row {
		display: flex;
		align-items: center;

		img {
			display: block;
			width: 35%;
			transform: translateY(-30%);
		}
	}
`;

export const Main = styled.div`
	width: 65%;

	p {
		margin-bottom: 2em;
		padding-bottom: 2em;
		border-bottom: 1px solid #ddd;

		&:last-child {
			margin-bottom: 0;
			border-bottom: none;
		}
	}
`;

export default StyledToolsWeUse;
