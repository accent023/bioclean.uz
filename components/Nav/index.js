import StyledNav from "./Nav.styled";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const body = document.body;

		if (isMobile) {
			return body.classList.add("hidden");
		}

		body.removeAttribute("class");
	}, [isMobile]);

	return (
		<StyledNav>
			<Hamburger toggled={isMobile} toggle={setIsMobile} />

			<ul className={isMobile ? "mobile" : " "}>
				<li>
					<Link
						to="page-banner"
						smooth={true}
						spy={true}
						duration={700}
						onClick={() => setIsMobile(false)}
					>
						Главная
					</Link>
				</li>
				<li>
					<Link
						to="page-about"
						smooth={true}
						spy={true}
						duration={700}
						onClick={() => setIsMobile(false)}
					>
						О нас
					</Link>
				</li>
				<li>
					<Link
						to="page-services"
						smooth={true}
						spy={true}
						duration={700}
						onClick={() => setIsMobile(false)}
					>
						Услуги
					</Link>
				</li>
				<li>
					<Link
						to="page-insects"
						smooth={true}
						spy={true}
						duration={700}
						onClick={() => setIsMobile(false)}
					>
						Вредители
					</Link>
				</li>
				<li>
					<Link
						to="page-advantages"
						smooth={true}
						spy={true}
						duration={700}
						onClick={() => setIsMobile(false)}
					>
						Преимущества
					</Link>
				</li>
				<li>
					<Link
						to="page-footer"
						smooth={true}
						spy={true}
						duration={700}
						onClick={() => setIsMobile(false)}
					>
						Контакты
					</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Nav;
