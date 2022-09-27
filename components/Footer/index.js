import StyledFooter, {
	Content,
	Col,
	Logo,
	SocialNetworks,
	ExtraInfo,
	Developer,
} from "./Footer.styled";
import Container from "../Container";
import Image from "next/image";
import {
	BsInstagram,
	BsFacebook,
	BsTelegram,
	BsPhoneVibrate,
} from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";
import Phone from "../Phone";

const Footer = () => {
	return (
		<StyledFooter name="page-footer">
			<Container>
				<Content>
					<Col>
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
							Ташкент Мирзо-Улугбекский район Улица Навнихол 3, 7 проезд
							дом, Tashkent 100164
						</p>

						<SocialNetworks>
							<a
								href="https://instagram.com/bioclean.uz?igshid=YmMyMTA2M2Y="
								rel="noreferrer"
								target="_blank"
							>
								<BsInstagram />
							</a>

							<a
								href="https://m.facebook.com/story.php?story_fbid=pfbid02C5q5rTGZju94jJzjJQHAeZzGX7Ku3auieBBwExU4wrLsJzkiGxxMyzMbiLA3S4kLl&id=100063902504739"
								rel="noreferrer"
								target="_blank"
							>
								<BsFacebook />
							</a>

							<a
								href="https://t.me/Biocleann"
								rel="noreferrer"
								target="_blank"
							>
								<BsTelegram />
							</a>
						</SocialNetworks>

						<a className="phoneNumber" href="tel:+998977572010">
							<GiRotaryPhone />
							(97) 757-20-10
						</a>

						<a className="phoneNumber" href="tel:+998998212010">
							<BsPhoneVibrate />
							(99) 821-20-10
						</a>
						<a className="email" href="mailto:info@bioclean.uz">
							<MdMarkEmailRead />
							info@bioclean.uz
						</a>
					</Col>

					<Col>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.229553423384!2d69.33292381555914!3d41.347363979267804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef503523549f3%3A0x7423e2ce0821528e!2z0JTQtdC30LjQvdGE0LXQutGG0LjRjyDQsiDQotCw0YjQutC10L3RgtC1IEJpb0NsZWFuLnV6!5e0!3m2!1sen!2s!4v1664276614227!5m2!1sen!2s"
							allowFullscreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</Col>
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
						<img
							src="https://webpark.uz/_next/image?url=%2Fimages%2Fsite%2Flogo.png&w=3840&q=75"
							alt="Логотип компании webpark.uz"
						/>
					</Developer>
				</Container>
			</ExtraInfo>

			<a href="tel:+998977572010">
				<Phone />
			</a>
		</StyledFooter>
	);
};

export default Footer;
