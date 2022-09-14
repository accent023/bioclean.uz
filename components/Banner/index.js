import StyledBanner, {
	Content,
	Title,
	Subtitle,
	Main,
	ExterminatorImage,
} from "./Banner.styled";
import Image from "next/image";
import Container from "../Container";
import { Accented } from "../../Common.styled";
import ArrowDown from "../Icons/ArrowDown";

const Banner = () => {
	return (
		<StyledBanner name="page-banner">
			<Container>
				<Content>
					<Main>
						<h1>
							<Title>
								Bio<Accented>clean</Accented>
							</Title>
							<Subtitle>Услуги дезинфекции в Ташкенте</Subtitle>
						</h1>

						<p>
							Мы избавим ваш бизнес и дом от вредителей. Профессиональные
							услуги по дезинфекции, дезинсекции, дератизации и
							дезодорации от наших специалистов!
						</p>

						<ArrowDown />
					</Main>
				</Content>
			</Container>
		</StyledBanner>
	);
};

export default Banner;
