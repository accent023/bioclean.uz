import StyledNav from "./Nav.styled";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<StyledNav>
			<Hamburger toggled={isMobile} toggle={setIsMobile} />

			<ul className={isMobile ? "mobile" : " "}>
				<li>
					<Link href="/">
						<a>Главная</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>О нас</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Услуги</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Вредители</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Преимущества</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Контакты</a>
					</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Nav;
