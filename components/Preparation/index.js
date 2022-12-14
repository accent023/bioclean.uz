import StyledPreparation, { Content, List } from "./Preparation.styled";
import Container from "../Container";
import AntsTitle from "../AntsTitle";
import { MdOutlineGppGood } from "react-icons/md";

const Preparation = () => {
	return (
		<StyledPreparation>
			<Container>
				<Content>
					<AntsTitle
						title="Порядок"
						subtitle="После визита сотрудников санитарной службы, хозяева должны"
						accented="действий"
					/>

					<List>
						<li>
							<MdOutlineGppGood />
							<p>Закрыть окна, двери, и вентиляционные ходы.</p>
						</li>
						<li>
							<MdOutlineGppGood />
							<p>
								Покинуть помещение на 3-6 часов (в зависимости от типа
								препарата).{" "}
								<strong>
									В это время клопы будут вылезать из укромных мест и
									контактировать с инсектицидом.
								</strong>
							</p>
						</li>
						<li>
							<MdOutlineGppGood />
							<p>
								Если обработка проводилась вечером, лучше переночевать в
								другом месте.
							</p>
						</li>
						<li>
							<MdOutlineGppGood />
							<p>
								Открыть окна и обеспечить приток воздуха в помещение.
								Сделать сквозняк.{" "}
								<strong>
									Проветривание должно длиться час (как минимум).
								</strong>
							</p>
						</li>
						<li>
							<MdOutlineGppGood />
							<p>
								Твёрдые поверхности, c которымми вынуждены соприкасаться
								люди и домашние питомцы, надо обработать водным
								раствором соды (100 граммов) и хозяйственного мыла (30
								граммов). Воды взять 1 литр.
							</p>
						</li>
						<li>
							<MdOutlineGppGood />
							<p>
								Влажная уборка возможна только через неделю. В течение 7
								дней единичные насекомые, которые сразу ен погибли,
								будут перемещаться по квартире. Высохший, но не вытертый
								вами инсектицид продолжит действие.
							</p>
						</li>
						<li>
							<MdOutlineGppGood />
							<p>
								Генеральная уборка с тщательным вымыванием плинтусов
								через 20 дней.{" "}
								<strong>
									Всё это времся инсектицид будет действовать и не даст
									появиться новым клопам из личинок.
								</strong>
							</p>
						</li>
						<li>
							<MdOutlineGppGood />
							<p>
								Если вы сомневаетесь, что делать после дезинфекции
								можно, а что - нельзя, лучше позвонить специалистам.
							</p>
						</li>
					</List>
				</Content>
			</Container>
		</StyledPreparation>
	);
};

export default Preparation;
