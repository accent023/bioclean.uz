import StyledToolsWeUse, { Content, Main } from "./ToolsWeUse.styled";
import Container from "../Container";
import AntsTitle from "../AntsTitle";
import Image from "next/image";

const ToolsWeUse = () => {
	return (
		<StyledToolsWeUse>
			<Container>
				<Content>
					<AntsTitle
						title="Наши"
						subtitle="безопасность и эффективность"
						accented="средства"
					/>

					<div className="row">
						<Main>
							<p>
								Для гарантированного уничтожения вредителей мы
								используем только профессиональные препараты с
								доказанной эффективностью и пролонгированным действием.
								Средства относятся к 4 классу: они смертельны для
								вредителей, но не представляют опасности для человека и
								домашних животных.
							</p>

							<p>
								Средства для уничтожения вредителей, которые мы
								используем в ходе обработки квартир и других помещений,
								прошли сертификацию и соответствуют международным
								санитарно-эпидемиологическим нормам.
							</p>
						</Main>

						<img src="/images/tool.png" alt="Фумигатор" />
					</div>
				</Content>
			</Container>
		</StyledToolsWeUse>
	);
};

export default ToolsWeUse;
