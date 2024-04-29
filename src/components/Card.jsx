import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';

const Card = ({touristSpot}) => {
	const navigate = useNavigate()
    return (
		<div className="card max-w-96 border-2 shadow-xl">
			<figure>
				<img
					className="w-full h-[256px]"
					src={touristSpot?.photoURL}
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{touristSpot?.tourists_spot_name}
					<div className="badge badge-secondary">
						{touristSpot?.seasonality}
					</div>
				</h2>
				<p>Average Cost: ${touristSpot?.average_cost} per person</p>
				<div className="card-actions justify-between">
					<div className="badge badge-outline">
						Total Visitors: {touristSpot?.total_visitors_per_year}
					</div>
					<div className="badge badge-outline ">
						Travel Time {touristSpot?.travel_time} days
					</div>
				</div>
				<button onClick={()=>navigate(`/alltouristsspot/${touristSpot._id}`)} className='btn w-full my-4 text-black bg-orange-200'>View Detail</button>
			</div>
		</div>
	);
};

export default Card;