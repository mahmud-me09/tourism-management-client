import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailPage = () => {
    const touristSpot = useLoaderData()
    console.log(touristSpot)
    return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col relative">
				<img
					src={touristSpot?.photoURL}
					className="w-full min-w-sm rounded-lg shadow-2xl"
				/>
				<h1 className="absolute top-10 font-bold text-2xl bg-orange-50 p-4 rounded-xl  opacity-70">
					Welcome to {touristSpot.country_name}
				</h1>
				<div>
					<h1 className="text-xl md:text-5xl font-bold text-center">
						{touristSpot.tourists_spot_name}{" "}
						<small className="text-lg">
							({touristSpot.location})
						</small>
					</h1>
					<p className="py-6">
						{touristSpot.description} About{" "}
						<strong>{touristSpot.total_visitors_per_year} </strong>
						number of visitors are visiting per year to enjoy this
						place.
					</p>
					<p>Other Details are for your disposal:</p>
					<ul className="list-disc pl-5">
						<li>Average Cost: ${touristSpot.average_cost} per person</li>
						<li>Travel Time: {touristSpot.travel_time} days</li>
						<li>Season for you convenience: {touristSpot.seasonality}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DetailPage;