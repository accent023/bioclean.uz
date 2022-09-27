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
		-webkit-tap-highlight-color: transparent;

		&.hidden {
			overflow: hidden;
		}

		@media (max-width: 768px) {
			font-size: 1.6rem;
		}
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

		@media (max-width: 768px) {
			line-height: 1.35;
		}
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

		@media (max-width: 768px) {
			font-size: 1.75rem;
		}
	}

	.container {
		width: 95%;
		max-width: 1300px;
		margin: 0 auto;
	}

	// Phone component styles
	.phone-call {
	    width: 50px;
	    height: 50px;
	    right: 20px;
	    bottom: 20px;
	    background: #10b418;
	    position: fixed;
	    text-align: center;
	    color: #ffffff;
	    cursor: pointer;
	    border-radius: 50%;
	    z-index: 99;
	    display: none;
	    line-height: 65px;

	    @media (max-width: 992px) {
	    	display: inline-block;
	    	display: flex;
	    	align-items: center;
	    	justify-content: center;
	    }
	}

	.phone-call:before {
	    position: absolute;
	    content: " ";
	    z-index: -1;
	    top: -15px;
	    left: -15px;
	    background-color: seagreen;
	    width: 80px;
	    height: 80px;
	    border-radius: 100%;
	    animation-fill-mode: both;
	    -webkit-animation-fill-mode: both;
	    opacity: 0.6;
	    -webkit-animation: pulse 1s ease-out;
	    animation: pulse 1.8s ease-out;
	    -webkit-animation-iteration-count: infinite;
	    animation-iteration-count: infinite;
	}

	@-webkit-keyframes pulse {
	    0% {
	        -webkit-transform: scale(0);
	        opacity: 0;
	    }
	    25% {
	        -webkit-transform: scale(0.3);
	        opacity: 1;
	    }
	    50% {
	        -webkit-transform: scale(0.6);
	        opacity: 0.6;
	    }
	    75% {
	        -webkit-transform: scale(0.9);
	        opacity: 0.3;
	    }
	    100% {
	        -webkit-transform: scale(1);
	        opacity: 0;
	    }
	}

	@keyframes pulse {
	    0% {
	        transform: scale(0);
	        opacity: 0;
	    }
	    25% {
	        transform: scale(0.3);
	        opacity: 1;
	    }
	    50% {
	        transform: scale(0.6);
	        opacity: 0.6;
	    }
	    75% {
	        transform: scale(0.9);
	        opacity: 0.3;
	    }
	    100% {
	        transform: scale(1);
	        opacity: 0;
	    }
	}
`;

export default GlobalStyle;
