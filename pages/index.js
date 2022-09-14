import dynamic from "next/dynamic";

// Lazy
const Header = dynamic(() => import("../components/Header"));
const Banner = dynamic(() => import("../components/Banner"));
const About = dynamic(() => import("../components/About"));
const Services = dynamic(() => import("../components/Services"));
const Insects = dynamic(() => import("../components/Insects"));
const ToolsWeUse = dynamic(() => import("../components/ToolsWeUse"));
const Advantages = dynamic(() => import("../components/Advantages"));
const Customers = dynamic(() => import("../components/Customers"));
const Documents = dynamic(() => import("../components/Documents"));
const Preparation = dynamic(() => import("../components/Preparation"));
const Footer = dynamic(() => import("../components/Footer"));

const HomePage = () => (
	<>
		<Header />
		<Banner />
		<About
			highlights={[
				"Абсолютно безопасно для детей и домашних животных",
				"К вашим услугам 24 / 7",
				"Гарантируем качество услуг",
				"Доступные цены для всех",
			]}
		/>
		<Services />
		<Insects />
		<ToolsWeUse />
		<Advantages />
		<Customers />
		<Preparation />
		<Documents />
		<Footer />
	</>
);

export default HomePage;
