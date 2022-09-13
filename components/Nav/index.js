import StyledNav from "./Nav.styled";
import Link from "next/link";

const Nav = () => {
	return (
		<StyledNav>
			<Link href="/">Главная</Link>
			<Link href="/">О нас</Link>
			<Link href="/">Услуги</Link>
			<Link href="/">Вредители</Link>
			<Link href="/">Преимущества</Link>
			<Link href="/">Контакты</Link>
		</StyledNav>
	);
};

export default Nav;
