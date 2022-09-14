import StyledNav from "./Nav.styled";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<StyledNav>
			<Hamburger toggled={isMobile} toggle={setIsMobile} />

			<ul className={isMobile ? "mobile" : " "}>
				<li>
					<Link
						onClick={() => setIsMobile(false)}
						to="page-banner"
						smooth={true}
						spy={true}
					>
						Главная
					</Link>
				</li>
				<li>
					<Link
						onClick={() => setIsMobile(false)}
						to="page-about"
						smooth={true}
						spy={true}
					>
						О нас
					</Link>
				</li>
				<li>
					<Link
						onClick={() => setIsMobile(false)}
						to="page-services"
						smooth={true}
						spy={true}
					>
						Услуги
					</Link>
				</li>
				<li>
					<Link
						onClick={() => setIsMobile(false)}
						to="page-insects"
						smooth={true}
						spy={true}
					>
						Вредители
					</Link>
				</li>
				<li>
					<Link
						onClick={() => setIsMobile(false)}
						to="page-advantages"
						smooth={true}
						spy={true}
					>
						Преимущества
					</Link>
				</li>
				<li>
					<Link
						onClick={() => setIsMobile(false)}
						to="page-footer"
						smooth={true}
						spy={true}
					>
						Контакты
					</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Nav;
