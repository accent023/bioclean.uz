import StyledFooter, {
	Content,
	Logo,
	SocialNetworks,
	ExtraInfo,
	Developer,
} from "./Footer.styled";
import Container from "../Container";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Content>
					<Logo href="/">
						<Image
							src="/images/logo.png"
							width={300}
							height={50}
							objectFit="contain"
							layout="responsive"
							alt="Логотип компании"
						/>
					</Logo>

					<p>
						Мы избавим ваш бизнес и дом от вредителей. профессиональные
						услуги по дезинфекции, дезинсекции, дератизации и дезодорации
						от наших специалистов!
					</p>

					<SocialNetworks>
						<a
							href="https://instagram.com"
							rel="noreferrer"
							target="_blank"
						>
							<BsInstagram />
						</a>

						<a
							href="https://facebook.com"
							rel="noreferrer"
							target="_blank"
						>
							<BsFacebook />
						</a>

						<a
							href="https://telegram.org"
							rel="noreferrer"
							target="_blank"
						>
							<BsTelegram />
						</a>
					</SocialNetworks>

					<a className="phoneNumber" href="tel:+998977572010">
						<BsPhoneVibrate />
						(97) 757-20-10
					</a>
					<a className="phoneNumber" href="tel:+998977572020">
						<GiRotaryPhone />
						(97) 757-20-20
					</a>
					<a className="email" href="mailto:info@bioclean.uz">
						<MdMarkEmailRead />
						info@bioclean.uz
					</a>
				</Content>
			</Container>

			<ExtraInfo>
				<Container>
					<Developer
						href="https://webpark.uz"
						target="_blank"
						rel="noreferrer"
					>
						Made with ❤️ by{" "}
						<img src="https://webpark.uz/_next/image?url=%2Fimages%2Fsite%2Flogo.png&w=3840&q=75" />
					</Developer>
				</Container>
			</ExtraInfo>
		</StyledFooter>
	);
};

export default Footer;
