import StyledCustomers, {
	Content,
	ListOfCustomers,
	ListOfTestimonials,
	Controllers,
} from "./Customers.styled";
import { useState, useEffect, useRef } from "react";
import Testimonial from "./Testimonial";
import Container from "../Container";
import AntsTitle from "../AntsTitle";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

const Customers = () => {
	const customersArrowPrev = useRef(null);
	const customersArrowNext = useRef(null);

	return (
		<StyledCustomers>
			<Container>
				<Content>
					<AntsTitle
						title="Наши"
						accented="клиенты"
						subtitle="Мы любим и ценим всех наших клиентов"
					/>

					<ListOfCustomers>
						<Swiper
							onSwiper={(swiper) => {
								swiper.params.navigation.prevEl =
									customersArrowPrev.current;
								swiper.params.navigation.nextEl =
									customersArrowNext.current;
								swiper;
								swiper.navigation.init();
								swiper.navigation.update();
							}}
							modules={[Navigation]}
							slidesPerView={6}
							spaceBetween={80}
							speed={900}
						>
							<SwiperSlide>
								<Image
									src="/images/customers/evos.png"
									width={175}
									height={175}
									objectFit="contain"
									layout="responsive"
									alt="логотип evos"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src="/images/customers/bon.jpg"
									width={175}
									height={175}
									objectFit="contain"
									layout="responsive"
									alt="логотип bon"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src="/images/customers/ecorn.png"
									width={175}
									height={175}
									objectFit="contain"
									layout="responsive"
									alt="логотип ecorn"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src="/images/customers/shef-burger.png"
									width={175}
									height={175}
									objectFit="contain"
									layout="responsive"
									alt="логотип Шеф Бургер"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src="/images/customers/blackstar.png"
									width={175}
									height={175}
									objectFit="contain"
									layout="responsive"
									alt="логотип black star burger"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src="/images/customers/cola.png"
									width={175}
									height={175}
									objectFit="contain"
									layout="responsive"
									alt="логотип coca-cola"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Image
									src="/images/customers/street77.png"
									width={175}
									height={175}
									objectFit="contain"
									layout="responsive"
									alt="логотип street 77"
								/>
							</SwiperSlide>

							<Controllers>
								<button
									ref={customersArrowPrev}
									className="swiper--prev"
								>
									<ArrowLeft />
								</button>
								<button
									ref={customersArrowNext}
									className="swiper--next"
								>
									<ArrowRight />
								</button>
							</Controllers>
						</Swiper>
					</ListOfCustomers>

					<ListOfTestimonials>
						<Swiper
							slidesPerView={1}
							spaceBetween={1200}
							speed={700}
							loop={true}
							pagination={{ clickable: true }}
							autoplay={{
								delay: 2000,
								disableOnInteraction: true,
							}}
							effect={"fade"}
							modules={[Pagination, Autoplay]}
						>
							<SwiperSlide>
								<Testimonial
									name="Камила"
									accented="Рихсибаева"
									review="Появились клопы, думали выведем своими силами, но не вышло,вызвали эту компанию, приехал мужчина, очень вежливый, обработал все за пол часа. Дал все рекомендации и гаратнию, все четко и доступно объяснил. Спустя 1, 5 месяца позвонили, поинтересоваться все ли хорошо. Сервис на 5!"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Testimonial
									name="Лайло"
									accented="Султанова"
									review="Добрый день, вы недавно проводили у нас обработку , хочу выразить вам благодарность ,уже прошло две недели все чётко,спасибо"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Testimonial
									name="Бэкзод"
									accented="Якубов"
									review="Рад что позвал их очень хорошо знают свою работу, результат уже сразу 3-4 дня, хорошая отношения и пунктуальность советую 👍👍👍👍"
								/>
							</SwiperSlide>
						</Swiper>
					</ListOfTestimonials>
				</Content>
			</Container>
		</StyledCustomers>
	);
};

export default Customers;
