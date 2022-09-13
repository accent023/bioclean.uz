import StyledHeader, { Content, Logo } from "./Header.styled";
import Container from "../Container";
import Nav from "../Nav";
import Image from "next/image";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import Hamburger from "hamburger-react";

const Header = () => {
	return (
		<StyledHeader>
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
