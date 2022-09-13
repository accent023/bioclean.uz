import StyledAbout, {
	Content,
	Main,
	ImagePart,
	ImageWrapper,
	Highlights,
	Experience,
} from "./About.styled";
import Container from "../Container";
import Image from "next/image";
import { Accented } from "../../Common.styled";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import Dots from "../Dots";

const About = ({ highlights }) => {
	return (
		<StyledAbout>
			<Container>
				<Content>
					<Main>
						<h2>
							Bioclean предлагает <Accented>эффективный сервис</Accented>{" "}
							для избавления от вредителей
						</h2>

						<p>
							Компания была создана в 2017 году с целью обеспечить
							население качественной и добросовестной услугой по
							дезинфекции, дезинсекции, дератизации и дезодорации. Изучив
							рынок, спрос и предложение на оказываемые услуги,
							выяснилось, что клиентам не ведомо о порядке и технологии
							проведения данных мероприятий. Многие клиенты,
							заинтересованы в низкой цене нежели об эффективности данных
							услуг. Вследствии чего, клиенты сталкиваются с
							недобросовестными постащиками услуг.
						</p>

						<Highlights>
							{highlights.map((highlight, index) => (
								<li key={`highlight-${index}`}>
									<GiCheckMark />
									<p>{highlight}</p>
								</li>
							))}
						</Highlights>

						<button>
							Оставить заявку
							<MdOutlineUnsubscribe />
						</button>
					</Main>

					<ImagePart>
						<Dots className="dots dots--long" count={110} />
						<Dots className="dots dots--short" count={49} />
						<ImageWrapper>
							<Image
								src="/images/image-about.png"
								alt="Дезинфектор"
								width={750}
								height={750}
								objectFit="cover"
								layout="responsive"
							/>
						</ImageWrapper>

						<Experience>
							<h3>15+</h3>
							<p>Лет опыта</p>
						</Experience>
					</ImagePart>
				</Content>
			</Container>
		</StyledAbout>
	);
};

export default About;
