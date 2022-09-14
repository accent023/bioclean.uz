import StyledInsects, { Content, ListOfInsects } from "./Insects.styled";
import { v4 as uuidv4 } from "uuid";
import Container from "../Container";
import AntsTitle from "../AntsTitle";
import Insect from "./Insect";
import {
	Cockroach,
	BedBug,
	Mosquito,
	Rat,
	Scorpion,
	Ant,
} from "../Icons/InsectsCollection";

const InsectsList = [
	{
		id: uuidv4(),
		title: "Тараканов",
		description:
			"Тараканы опасны тем, что являются переносчиками многих заболеваний: дизентерии, гастроэнтерита, ряда урогенитальных инфекций, сальмонеллеза, менингита, пневмонии.",
		image: <Cockroach />,
		type: "cockroach",
	},
	{
		id: uuidv4(),
		title: "Клопов",
		description:
			"Ученые доказали, что клопы являются переносчиками различных инфекций, включая туберкулез, бруцеллез, гепатит, оспу, туляремию и сибирскую язву. Эти болезни опасны и нередко имеют летальный исход.",
		image: <BedBug />,
		type: "bedbug",
	},
	{
		id: uuidv4(),
		title: "Комаров",
		description:
			"Комар — символ назойливости. Видеть его во сне — к пустым хлопотам и встрече с неприятными людьми. А вот столкновение с настоящими комарами, наяву, может грозить разными реальными неприятными последствиями.",
		image: <Mosquito />,
		type: "mosquito",
	},
	{
		id: uuidv4(),
		title: "Грызунов",
		description:
			"От грызунов могут передаваться человеку такие заболевания, как чума, геморрагическая лихорадка с почечным синдромом, клещевой энцефалит, псевдотуберкулез, листериоз, токсоплазмоз, трихинеллез и др.",
		image: <Rat />,
		type: "rat",
	},
	{
		id: uuidv4(),
		title: "Скорпионов",
		description:
			"Яд скорпионов содержит сильные нейротоксины и оказывает токсическое действие на центральную нервную и сердечно-сосудистую системы. Яд накапливается в «хвосте» скорпиона, а именно в грушевидном членике (тельсоне), оканчивающемся загнутой вверх иглой.",
		image: <Scorpion />,
		type: "scorpion",
	},
	{
		id: uuidv4(),
		title: "Муравьев",
		description:
			"Опасны муравьи и для нежной рассады. Они способны подгрызать корни, листья и стебли, уничтожая сеянцы. Муравьи приводят к распространению по участку сорняков. Перетаскивая и поедая некоторые семена, они разносят посевной материал на большие площади.",
		image: <Ant />,
		type: "ant",
	},
];

const Insects = () => {
	return (
		<StyledInsects name="page-insects">
			<Container>
				<Content>
					<AntsTitle
						title="Мы"
						subtitle="вредители исчезнут и никогда не вернутся"
						accented="уничтожаем"
					/>

					<ListOfInsects>
						{InsectsList.map((insect, index) => (
							<Insect key={insect.id} {...insect} />
						))}
					</ListOfInsects>
				</Content>
			</Container>
		</StyledInsects>
	);
};

export default Insects;
