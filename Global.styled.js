import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		min-height: 100%;
		scroll-behavior: smooth;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: 2rem;
		font-family: "Open Sans", "Helvetica", sans-serif;
		color: #555;
	}

	h1,h2,h3 {
		font-family: "Jost";
		color: #333;
	}

	h1 {
		font-weight: 800;
		color: #fff;
	}

	h2,h3 {
		font-weight: 700;
	}

	p {
		line-height: 1.5;
	}

	a {
		color: inherit;
	}

	button {
		font-size: inherit;
		border: 0;
		background: none;
		border-radius: 3px;
		box-shadow: 0 3px 7px rgba(111, 111, 111, .30);
		font-weight: 600;
		color: inherit;
		cursor: pointer;
	}

	.container {
		width: 95%;
		max-width: 1300px;
		margin: 0 auto;
	}
`;

export default GlobalStyle;
