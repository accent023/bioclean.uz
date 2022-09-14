import StyledServices, {
	Content,
	ListOfServices,
	RombDecoration,
} from "./Services.styled";
import Container from "../Container";
import AntsTitle from "../AntsTitle";
import Service from "./Service";
import Dots from "../Dots";

const Services = () => (
	<StyledServices name="page-services">
		<Container>
			<Content>
				<AntsTitle
					title="Наши"
					subtitle="качественный сервис - залог надежности"
					accented="услуги"
				/>

				<ListOfServices>
					<Service
						name="Дезинфекция"
						description="Комплекс мероприятий, направленный на уничтожение возбудителей инфекционных заболеваний и разрушение токсинов."
					/>

					<Service
						name="Дезинсекция"
						description="Процедура уничтожения любых насекомых, чьё соседство с человеком считается нежелательным."
					/>

					<Service
						name="Дератизация"
						description="Комплексные меры по уничтожению грызунов (крыс, мышей, полёвок и др.)."
					/>

					<Service
						name="Дезодарация"
						description="Процедура по ослаблению или устранению неприятных запахов."
					/>
				</ListOfServices>
			</Content>
		</Container>

		{/*	Decorations	*/}
		<Dots className="dots" count={112} />
		<RombDecoration src="/images/romb-decor.png" />
	</StyledServices>
);

export default Services;
