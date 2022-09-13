import styled from "styled-components";

const StyledTarget = styled.div`
	width: 4rem;
	height: 4rem;
	position: relative;

	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: contain;
		object-position: left;
		width: 100%;
		height: 100%;
	}
`;

export const Crossbow = styled.img`
	z-index: 1;
`;

export const Insect = styled.img``;

export default StyledTarget;
