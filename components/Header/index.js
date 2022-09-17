import StyledHeader, { Content, Logo } from "./Header.styled";
import Container from "../Container";
import Nav from "../Nav";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

const Header = () => {
	const [scrollY, setScrollY] = useState(0);

	const captureScrollPosition = (event) =>
		setScrollY(event.currentTarget.scrollY);

	useEffect(() => {
		if (window) {
			window.addEventListener("scroll", captureScrollPosition);
		}
	}, [scrollY]);

	return (
		<StyledHeader sticky={scrollY >= 600}>
			<Container>
				<Content>
					<Nav />

					<Logo>
						<Image
							src="/images/logo.png"
							width={172}
							height={35}
							objectFit="contain"
							layout="responsive"
							alt="Логотип компании"
						/>
					</Logo>
				</Content>
			</Container>
		</StyledHeader>
	);
};

export default Header;
