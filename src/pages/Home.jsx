import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet-async";
import group from "../assets/ourServiceCard/group.jpg";
import guided from "../assets/ourServiceCard/guided.jpg";
import luxury from "../assets/ourServiceCard/luxury.jpg";
import whyChooseUs from "../assets/whyChooseUs.jpg";
import Cards from "../components/Cards";
import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Card from "../components/Card";
import CountryCards from "../components/CountryCards";

const Home = () => {
	const touristSpots = useLoaderData();
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch("https://tourism-management-server-nine.vercel.app/country")
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])
	return (
		<>
			<Helmet>
				<title>Travel Companion | Home</title>
			</Helmet>
			<Slider></Slider>

			<div className="my-10 text-center">
				<h1 className=" font-bold my-4 text-3xl bg-gradient-to-r from-green-500 via-orange-500 to-purple-800 bg-clip-text text-transparent">
					Tourist Spots: Our Destinations
				</h1>
				<p className="w-3/4 mx-auto">
					Embark on Your Dream Journey with Us: Explore a World of
					Diverse Destinations and Experiences At our travel company,
					we curate a diverse array of travel experiences, from
					thrilling adventures and serene getaways to cultural
					immersions and family-friendly vacations.
				</p>
				<Marquee
					pauseOnHover={true}
					delay={1}
					loop={0}
					gradient={false}
				>
					<div className="flex flex-row my-10 gap-6 mx-auto">
						{touristSpots.map((touristSpot) => (
							<Card
								key={touristSpot?._id}
								touristSpot={touristSpot}
							></Card>
						))}
					</div>
				</Marquee>
			</div>
			<div className="my-10 text-center">
				<h1 className=" font-bold my-4 text-3xl bg-gradient-to-r from-green-500 via-orange-500 to-purple-800 bg-clip-text text-transparent">
					Countries: Where your Dream Awaits
				</h1>
				<p className="w-3/4 mx-auto">
					Embark on Your Dream Journey with Us: Explore a World of
					Diverse Destinations and Experiences At our travel company,
					we curate a diverse array of travel experiences, from
					thrilling adventures and serene getaways to cultural
					immersions and family-friendly vacations.
				</p>
				
					<div className="flex flex-wrap justify-center flex-row my-10 gap-6 mx-auto">
						{countries.map((country) => (
							<CountryCards
								key={country?._id}
								country={country}
							></CountryCards>
						))}
					</div>
			
			</div>
			<div className="my-10 text-center">
				<h1 className=" font-bold my-4 text-3xl bg-gradient-to-r from-green-500 via-orange-500 to-purple-800 bg-clip-text text-transparent">
					Our Services
				</h1>
				<div className="flex flex-col items-center lg:flex-row  md:justify-between  my-10 gap-6 mx-auto">
					<div className="card max-w-96 border shadow-lg md:hover:scale-105 transition-transform">
						<figure>
							<img src={group} alt="car!" />
						</figure>
						<div className="card-body">
							<h2 className="font-bold text-2xl  text-center">
								Group Tour
							</h2>
							<p className="text-justify">
								Planning a group trip? Our group packages offer
								tailored experiences, cost-effective solutions,
								seamless planning, and memorable adventures.
								Enjoy exclusive discounts and perks while our
								dedicated team takes care of all the details.
								Contact us to book your group package today!
							</p>
						</div>
					</div>
					<div className="card max-w-96  border shadow-lg md:hover:scale-105 transition-transform">
						<figure>
							<img src={guided} alt="car!" />
						</figure>
						<div className="card-body ">
							<h2 className="font-bold text-2xl  text-center">
								Guided Tour
							</h2>
							<p className="text-justify">
								Explore the world with ease on our guided tours.
								Let our expert guides lead you on unforgettable
								adventures, sharing their knowledge and insights
								along the way. From iconic landmarks to hidden
								gems, our guided tours offer an immersive and
								educational experience for every traveler. Book
								your guided tour today and embark on a journey
								of discovery!
							</p>
						</div>
					</div>
					<div className="card max-w-96  border shadow-lg  md:hover:scale-105 transition-transform">
						<figure>
							<img src={luxury} alt="car!" />
						</figure>
						<div className="card-body">
							<h2 className="font-bold text-2xl  text-center">
								VIP Section
							</h2>
							<p className="text-justify">
								Elevate your travel experience with our VIP
								section. Enjoy exclusive access to luxury
								amenities, personalized services, and VIP
								treatment at every step of your journey. From
								priority check-in and lounge access to upgraded
								accommodations and special privileges, our VIP
								section ensures a seamless and unforgettable
								travel experience. Indulge in the ultimate
								luxury and book your VIP package today!
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h1 className=" text-center my-10 font-bold text-3xl bg-gradient-to-r from-green-500 via-orange-500 to-purple-800 bg-clip-text text-transparent">
					Why choose us
				</h1>

				<div
					style={{ backgroundImage: `url(${whyChooseUs})` }}
					className={`hero min-h-screen`}
				>
					<div className="hero-content flex-col lg:flex-row-reverse ">
						<div className="stats stats-vertical  shadow">
							<div className="stat place-items-center">
								<div className="stat-title">Clients Served</div>
								<div className="stat-value">10K</div>
								<div className="stat-desc">
									From January 1st to December 31st
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="stat-title">Happy Clients</div>
								<div className="stat-value text-secondary">
									9800
								</div>
								<div className="stat-desc text-secondary">
									↗︎ 40 (2%)
								</div>
							</div>

							<div className="stat place-items-center">
								<div className="stat-title">Current Groups</div>
								<div className="stat-value">120</div>
								<div className="stat-desc">↘︎ 90 (14%)</div>
							</div>
						</div>
						<div className="text-Black bg-orange-50 opacity-80 p-6 rounded-3xl w-full lg:w-1/2 ">
							<h1 className="text-lg lg:text-5xl font-bold ">
								Why Choose Us ???
							</h1>
							<p className="py-6">
								At{" "}
								<strong className="bg-gradient-to-r from-teal-500 via-orange-500 to-purple-500 bg-clip-text text-transparent font-black">
									Travel Companion
								</strong>
								, we pride ourselves on delivering exceptional
								travel experiences tailored to your unique
								preferences. With a team of seasoned experts
								dedicated to crafting unforgettable journeys, we
								prioritize quality, service, and flexibility.
								From personalized itineraries and seamless
								logistics to 24/7 support, we're committed to
								exceeding your expectations every step of the
								way. Choose{" "}
								<strong className="bg-gradient-to-r from-teal-500 via-orange-500 to-purple-500 bg-clip-text text-transparent font-black">
									Travel Companion
								</strong>{" "}
								for your next adventure and embark on a journey
								filled with discovery, relaxation, and
								unforgettable memories.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
