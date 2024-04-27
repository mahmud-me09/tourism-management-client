import React from 'react';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
		<>
			<Helmet>
				<title>Luxury Living | Home</title>
			</Helmet>

			<Slider></Slider>

			<div className="my-10 text-center">
				<h1 className=" font-bold my-4 text-3xl bg-gradient-to-r from-green-500 via-orange-500 to-purple-800 bg-clip-text text-transparent">
					Tourist Spots: Our Destinations
				</h1>
				<p className="w-3/4 mx-auto">
					Embark on Your Dream Journey with Us: Explore a World of Diverse Destinations and Experiences At our travel company,
					we curate a diverse array of travel experiences, from thrilling adventures and serene getaways to cultural immersions and family-friendly vacations. Each destination
					is chosen with meticulous attention to detail, ensuring unforgettable moments and seamless experiences tailored to
					meet all your travel desires. Whether you seek the excitement of bustling cities, the tranquility of secluded beaches, or the charm of historic landmarks, we're here to make your dream journey a reality.
				</p>
			</div>
			<div>Our Services</div>
			<div>Why choose us</div>
		</>
	);
};

export default Home;