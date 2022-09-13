import StyledTestimonial from "./Testimonial.styled";
import { Accented } from "../../Common.styled";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";

const Testimonial = ({ name, accented, review }) => {
	return (
		<StyledTestimonial>
			<h3>
				{name} <Accented>{accented}</Accented>
			</h3>

			<p>{review}</p>

			<ImQuotesRight className="quote quote--right" />
			<ImQuotesLeft className="quote quote--left" />
		</StyledTestimonial>
	);
};

export default Testimonial;
