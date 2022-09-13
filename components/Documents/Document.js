import StyledDocument, { Overlay } from "./Document.styled";
import { FaRegEye } from "react-icons/fa";

const Document = ({ imageURL }) => {
	return (
		<StyledDocument>
			<img src={imageURL} alt="документ bioclean" />

			<Overlay>
				<a href={imageURL} rel="noreferrer" target="_blank">
					Посмотреть <FaRegEye />
				</a>
			</Overlay>
		</StyledDocument>
	);
};

export default Document;
