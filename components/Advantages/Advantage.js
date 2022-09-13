import StyledAdvantage from "./Advantage.styled";

const Advantage = ({ name, description }) => {
	return (
		<StyledAdvantage>
			<h3>{name}</h3>

			<p>{description}</p>
		</StyledAdvantage>
	);
};

export default Advantage;
