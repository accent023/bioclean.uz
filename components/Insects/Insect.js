import StyledInsect, { ImageWrapper } from "./Insect.styled";
import Target from "./Target";
import Circle from "../Icons/Circle";
import TargetSniper from "../Icons/TargetSniper";

const Insect = ({ title, description, image, target, type }) => {
	return (
		<StyledInsect>
			<a href="https://t.me/Biocleann">
				Уничт
				<Target />
				жить
			</a>

			<ImageWrapper>
				<span className="circle">
					<Circle />
				</span>

				<span className="sniper">
					<TargetSniper />
				</span>

				<span className={`insect insect--${type}`}>{image}</span>
			</ImageWrapper>

			<h3>{title}</h3>
			<p>{description}</p>
		</StyledInsect>
	);
};

export default Insect;
