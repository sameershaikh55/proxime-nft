import React, { useContext, useEffect, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "../../components/Section/Section";
import TextCard from "./TextCard/TextCard";
import { connect } from "react-redux";
import { gettingData } from "../../redux/action";

const Featured = ({ products, gettingData }) => {
	useEffect(() => {
		gettingData("products", "PRODUCTS");
		gettingData("cart", "CART");
	}, []);

	products &&
		products.sort(
			(date1, date2) => new Date(date2.createdAt) - new Date(date1.createdAt)
		);

	const iconsPrevRef = useRef(null);
	const iconsNextRef = useRef(null);

	const ediitonPrevRef = useRef(null);
	const ediitonNextRef = useRef(null);

	const nftsPrevRef = useRef(null);
	const nftsNextRef = useRef(null);

	return (
		<Section id="featured">
			<div className="sub-section">
				<div className="text-center">
					<h2>Featured Icons</h2>

					<p className="section-sub-title">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida.
					</p>
				</div>

				<div className="slider-wrap">
					<div className="slider-btns">
						<button className="left" ref={iconsPrevRef}>
							<img src="./assets/vectors/slider-arrow.svg" alt="arrow" />
						</button>
						<button className="right" ref={iconsNextRef}>
							<img src="./assets/vectors/slider-arrow.svg" alt="arrow" />
						</button>
					</div>
					<Swiper
						spaceBetween={20}
						pagination={true}
						navigation={{
							prevEl: iconsPrevRef.current,
							nextEl: iconsNextRef.current,
						}}
						modules={[Navigation]}
						onInit={(swiper) => {
							function update() {
								swiper.params.navigation.prevEl = iconsPrevRef.current;
								swiper.params.navigation.nextEl = iconsNextRef.current;
								swiper.navigation.init();
								swiper.navigation.update();
							}

							update();

							setTimeout(update, 1000);
						}}
						breakpoints={{
							1150: {
								slidesPerView: 8,
							},
							992: {
								slidesPerView: 7,
							},
							860: {
								slidesPerView: 6,
							},
							728: {
								slidesPerView: 5,
							},
							600: {
								slidesPerView: 4,
							},
							390: {
								slidesPerView: 3,
							},
							0: {
								slidesPerView: 2,
							},
						}}
					>
						{[
							{
								id: "featured-icon-1",
								img: "./assets/imgs/featured-icons-1.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-2",
								img: "./assets/imgs/featured-icons-2.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-3",
								img: "./assets/imgs/featured-icons-3.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-4",
								img: "./assets/imgs/featured-icons-4.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-5",
								img: "./assets/imgs/featured-icons-5.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-6",
								img: "./assets/imgs/featured-icons-6.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-7",
								img: "./assets/imgs/featured-icons-7.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-8",
								img: "./assets/imgs/featured-icons-8.png",
								name: "Lorem Ipsum",
							},
							{
								id: "featured-icon-9",
								img: "./assets/imgs/featured-icons-1.png",
								name: "Lorem Ipsum",
							},
						].map((el, idx) => {
							return (
								<SwiperSlide key={el.id}>
									<div className="icon-card">
										<img src={el.img} alt={el.name} />
										<p className="text-center">{el.name}</p>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<div className="d-flex">
					<div className="btn btn-gradient">Explore More</div>
				</div>
			</div>

			<div className="sub-section mt-5">
				<div className="text-center">
					<h2>Featured Edition</h2>

					<p className="section-sub-title">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida.
					</p>
				</div>

				<div className="slider-wrap">
					<div className="slider-btns">
						<button className="left" ref={ediitonPrevRef}>
							<img src="./assets/vectors/slider-arrow.svg" alt="arrow" />
						</button>
						<button className="right" ref={ediitonNextRef}>
							<img src="./assets/vectors/slider-arrow.svg" alt="arrow" />
						</button>
					</div>

					<Swiper
						className="text-swiper"
						spaceBetween={24}
						slidesPerView={3}
						navigation={{
							prevEl: ediitonPrevRef.current,
							nextEl: ediitonNextRef.current,
						}}
						modules={[Navigation]}
						onInit={(swiper) => {
							function update() {
								swiper.params.navigation.prevEl = ediitonPrevRef.current;
								swiper.params.navigation.nextEl = ediitonNextRef.current;
								swiper.navigation.init();
								swiper.navigation.update();
							}

							update();

							setTimeout(update, 1000);
						}}
						breakpoints={{
							992: {
								slidesPerView: 3,
							},
							650: {
								slidesPerView: 2,
							},
							0: {
								slidesPerView: 1,
							},
						}}
					>
						{(products &&
							products.map((el, idx) => {
								return (
									<SwiperSlide key={el.id}>
										<TextCard {...el} />
									</SwiperSlide>
								);
							})) ||
							""}
					</Swiper>
				</div>

				<div className="d-flex">
					<div className="btn btn-gradient">Explore More</div>
				</div>
			</div>

			<div className="sub-section mt-5">
				<div className="text-center">
					<h2>Featured NFTs</h2>

					<p className="section-sub-title">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
						ipsum suspendisse ultrices gravida.
					</p>
				</div>

				<div className="slider-wrap">
					<div className="slider-btns">
						<button className="left" ref={nftsPrevRef}>
							<img src="./assets/vectors/slider-arrow.svg" alt="arrow" />
						</button>
						<button className="right" ref={nftsNextRef}>
							<img src="./assets/vectors/slider-arrow.svg" alt="arrow" />
						</button>
					</div>

					<Swiper
						className="text-swiper"
						spaceBetween={24}
						slidesPerView={3}
						navigation={{
							prevEl: nftsPrevRef.current,
							nextEl: nftsNextRef.current,
						}}
						modules={[Navigation]}
						onInit={(swiper) => {
							function update() {
								swiper.params.navigation.prevEl = nftsPrevRef.current;
								swiper.params.navigation.nextEl = nftsNextRef.current;
								swiper.navigation.init();
								swiper.navigation.update();
							}

							update();

							setTimeout(update, 1000);
						}}
						breakpoints={{
							992: {
								slidesPerView: 3,
							},
							650: {
								slidesPerView: 2,
							},
							0: {
								slidesPerView: 1,
							},
						}}
					>
						{(products &&
							products.map((el, idx) => {
								return (
									<SwiperSlide key={el.id}>
										<TextCard {...el} />
									</SwiperSlide>
								);
							})) ||
							""}
					</Swiper>
				</div>

				<div className="d-flex">
					<div className="btn btn-gradient">Explore More</div>
				</div>
			</div>
		</Section>
	);
};

const mapStatetoProps = (state) => {
	return {
		products: state.reducer.products,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		gettingData: function (tableName, type) {
			dispatch(gettingData(tableName, type));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Featured);
