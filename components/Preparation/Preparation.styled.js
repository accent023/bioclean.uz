import styled from "styled-components";

const StyledPreparation = styled.section``;

export const Content = styled.div`
	padding: 2.75em 0 5em;

	h2 {
		margin-bottom: 2em;
	}

	@media (max-width: 768px) {
		padding: 3.5em 0;
	}
`;

export const List = styled.ul`
	list-style: none;

	li {
		display: flex;
		gap: 0.3em;
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
			width: 5%;
		}

		p {
			width: 95%;
			font-size: 1.75rem;
			color: #777;
		}
	}

	@media (max-width: 768px) {
		li {
			display: block;
			text-align: center;

			p {
				width: 100%;
			}

			svg {
				width: 100%;
			}
		}
	}
`;

export default StyledPreparation;
