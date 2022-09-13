import styled from "styled-components";

const StyledToolsWeUse = styled.section`
	position: relative;

	@media (max-width: 768px) {
		background: #fafafa;
	}
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

	// RWD
	@media (max-width: 992px) {
		padding-bottom: 6em;

		.row {
			display: block;

			img {
				width: 75%;
				max-width: 60rem;
				margin: 0 auto;
				transform: unset;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 3.5em 0;
	}

	@media (max-width: 576px) {
		.row {
			text-align: center;

			img {
				width: 90%;
			}
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

	@media (max-width: 992px) {
		width: 100%;
	}
`;

export default StyledToolsWeUse;
