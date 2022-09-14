import StyledAdvantages, {
	Content,
	ListOfAdvantages,
} from "./Advantages.styled";
import AntsTitle from "../AntsTitle";
import Container from "../Container";
import Advantage from "./Advantage";
import Dots from "../Dots";

const Advantages = () => {
	return (
		<StyledAdvantages name="page-advantages">
			<Container>
				<Content>
					<AntsTitle
						title="Наши"
						subtitle="Почему вам стоит выбирать Bioclean"
						accented=" преимущества"
					/>

					<ListOfAdvantages>
						<Advantage
							name="Гарантийные обязательства"
							description="Мы гарантируем эффективность уничтожения насекомых и вредителей на срок до 1 года, в зависимости от типа обработки. Обслуживание в течение всего гарантийного срока - абсолютно бесплатно!"
						/>
						<Advantage
							name="Безопасность"
							description="Средства для уничтожения насекомых и вредителей которые мы применяем, относятся к классу с минимальными токсическими свойствами. Препараты не оказывают негативного влияния на взрослых и детей и не вредны для домашних животных."
						/>
						<Advantage
							name="Выезд в удобное для вас время"
							description="Мы приедем к вам в любое время суток, работаем без праздничных и выходных дней. В зависимости от типа обработка будет длиться от 40 минут до 2х часов."
						/>
						<Advantage
							name="Доступные цены"
							description="Мы предлагаем только обоснованную стоимость обработки, в соответствии с уровнем используемых препаратов и высоким качеством сервиса."
						/>
					</ListOfAdvantages>
				</Content>
			</Container>

			{/*	Decorations	*/}
			<Dots className="dots" count={175} />
		</StyledAdvantages>
	);
};

export default Advantages;
