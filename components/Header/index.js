import StyledHeader, { Content, Logo, Phone } from "./Header.styled";
import Container from "../Container";
import Nav from "../Nav";
import Image from "next/image";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Content>
					<Nav />

					<Phone href="tel:+998987074922">
						<BsFillTelephoneForwardFill />
						+998(98)707-49-22
					</Phone>

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
