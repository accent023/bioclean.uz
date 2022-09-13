import StyledService from "./Service.styled";
import { BsArrowRight } from "react-icons/bs";

const Service = ({ name, description }) => {
	return (
		<StyledService>
			<h3>{name}</h3>
			<p>{description}</p>
			<button>
				подробнее <BsArrowRight />
			</button>
		</StyledService>
	);
};

export default Service;
