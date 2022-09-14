import StyledDocument, { Overlay } from "./Document.styled";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";

const Document = ({ imageURL }) => {
	return (
		<StyledDocument>
			<Image
				src={imageURL}
				alt="документ bioclean"
				width={500}
				height={750}
				objectFit="cover"
				layout="responsive"
			/>

			<Overlay>
				<a href={imageURL} rel="noreferrer" target="_blank">
					Посмотреть <FaRegEye />
				</a>
			</Overlay>
		</StyledDocument>
	);
};

export default Document;
