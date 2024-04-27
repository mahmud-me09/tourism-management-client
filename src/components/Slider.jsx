import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../assets/slider/1.jpg";
import slider2 from "../assets/slider/2.jpg";
import slider3 from "../assets/slider/3.jpg";
import slider4 from "../assets/slider/4.jpg";

const Slider = () => {
	const onChange = (index) => {
		console.log(`Slider changed to slide ${index}`);
	};

	const onClickItem = (index) => {
		console.log(`Clicked item ${index}`);
	};

	const onClickThumb = (index) => {
		console.log(`Clicked thumbnail ${index}`);
	};

	const arrowStyles = {
		// Change the background color of the arrow section to bg-orange-200
		arrow: {
			backgroundColor: "#FFEDCC", // This color corresponds to bg-orange-200
		},
	};

	return (
		<Carousel
			showArrows={true}
			onChange={onChange}
			onClickItem={onClickItem}
			onClickThumb={onClickThumb}
			infiniteLoop={true}
			autoPlay={true}
			className="bg-orange-50"
		>
			<div className="relative">
				<img className="rounded-lg" src={slider1} alt="Slider 1" />
				<p className="text-lg lg:text-2xl absolute font-bold z-30 top-0 right-0 bg-orange-50 bg-opacity-70 w-1/2 text-orange p-4 border border-orange-500">
					Seek New Horizons: Your Journey to Unforgettable Memories
				</p>
			</div>
			<div>
				<img className="rounded-lg" src={slider2} alt="Slider 2" />
				<p className="text-lg lg:text-2xl absolute font-bold z-30 top-0 right-0 bg-orange-50 bg-opacity-70 w-1/2 text-orange p-4 border border-orange-500">
					Cultural Immersion: Dive into the Heart of Tradition and
					Heritage
				</p>
			</div>
			<div>
				<img className="rounded-lg" src={slider3} alt="Slider 3" />
				<p className="text-lg lg:text-2xl absolute font-bold z-30 top-0 right-0 bg-orange-50 bg-opacity-70 w-1/2 text-orange p-4 border border-orange-500">
					Explore Rich Culture: Experience the Soul of the Destination
				</p>
			</div>
			<div>
				<img className="rounded-lg" src={slider4} alt="Slider 4" />
				<p className="text-lg lg:text-2xl absolute font-bold z-30 top-0 right-0 bg-orange-50 bg-opacity-70 w-1/2 text-orange p-4 border border-orange-500">
					Fun for All Ages: Where Every Moment is a New Adventure
				</p>
			</div>
		</Carousel>
	);
};

export default Slider;