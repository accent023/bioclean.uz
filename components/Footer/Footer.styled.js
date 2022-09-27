import styled from "styled-components";

const StyledFooter = styled.footer``;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	border-top: 1px solid #eee;
	padding: 3em 0;
	width: 100%;
	font-size: 1.5rem;
	margin: 0 auto;

	p {
		font-size: 1.75rem;
		line-height: 1.5;
		max-width: 45ch;
	}

	a {
		text-decoration: none;
		font-weight: 600;
	}

	.phoneNumber,
	.email {
		display: block;

		svg {
			fill: #333;
			font-size: 2.5rem;
			vertical-align: middle;
			margin-right: 1rem;
		}
	}

	.phoneNumber {
		display: block;
		margin-bottom: 1em;
	}

	.email {
		margin-top: 1em;
		font-size: 1.75rem;

		svg {
			font-size: 2.2rem;
			transform: translateY(-0.15rem);
			margin-right: 0.75rem;
		}
	}
`;

export const Col = styled.div`
	width: 47.5%;

	&:nth-of-type(2) {
		iframe {
			width: 100%;
			min-height: 400px;
			border: none;
		}
	}

	@media (max-width: 992px) {
		width: 100%;

		&:nth-of-type(2) {
			margin-top: 3rem;
		}
	}
`;

export const Logo = styled.a`
	display: inline-block;
	width: 30rem;
	transform: translateX(-5rem);
	margin-bottom: 1em;
	cursor: pointer;
`;

export const SocialNetworks = styled.div`
	margin: 2em 0;

	a {
		font-size: 2.5rem;
		text-decoration: none;
		margin-right: 1em;

		&:last-child {
			margin-right: 0;
		}
	}
`;

export const ExtraInfo = styled.div`
	background: #fafafa;
	font-weight: 600;
	text-align: center;
	padding: 0.5em 0 0.75em;
	border-top: 1px solid #eee;
`;

export const Developer = styled.a`
	font-size: 1.5rem;
	color: #333;
	cursor: pointer;
	transition: ms ease-in-out;
	text-decoration: none;

	&:hover {
		opacity: 0.75;
	}

	img {
		display: inline-block;
		transform: translateY(-0.15rem);
		vertical-align: middle;
		width: 9rem;
	}
`;

export default StyledFooter;
