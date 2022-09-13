import StyledDocuments, { Content, ListOfDocuments } from "./Documents.styled";
import Document from "./Document";
import Container from "../Container";
import AntsTitle from "../AntsTitle";

const Documents = () => {
	return (
		<StyledDocuments>
			<Container>
				<Content>
					<AntsTitle
						title="Наши лицензии"
						subtitle="Мы за надёжность и безопасность"
						accented="и сертификаты"
					/>

					<ListOfDocuments>
						<Document imageURL="/images/license.png" />
						<Document imageURL="/images/certificate.png" />
					</ListOfDocuments>
				</Content>
			</Container>
		</StyledDocuments>
	);
};

export default Documents;
