import styled from "styled-components";
import { Accented } from "../Common.styled";

export const StyledAntsTitle = styled.h2`
	line-height: 1;

	span {
		display: block;
	}

	.title {
		font-size: 5.75rem;
		position: relative;
		display: inline-block;
		padding-bottom: 0.5em;
		margin-bottom: 0.5rem;

		&::after {
			content: "";
			display: block;
			position: absolute;
			width: 100%;
			height: 2rem;
			background: url("/images/ants-decor.png") right / 7.65em repeat-x;
			bottom: 0;
			left: 0;
		}
	}

	.subtitle {
		font-size: 2.5rem;
		font-family: "Open Sans", sans-serif;
		font-weight: 600;
		text-transform: uppercase;
	}
`;

const AntsTitle = ({ title, accented, subtitle }) => {
	return (
		<StyledAntsTitle>
			<span className="title">
				{title} <Accented>{accented}</Accented>
			</span>
			<span className="subtitle">{subtitle}</span>
		</StyledAntsTitle>
	);
};

export default AntsTitle;
