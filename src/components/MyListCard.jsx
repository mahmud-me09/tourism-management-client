import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const MyListCard = ({ touristSpot }) => {
    
	const handleUpdate = ()=>{
        console.log("clicked update")
    }
	const handleDelete = ()=>{
        console.log("clicked delete")
    }
	return (
		<div className="card max-w-96 bg-base-100 shadow-xl">
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
				<div className="flex justify-between">
					<button
						onClick={handleUpdate}
						className="btn my-4 text-black bg-green-500"
					>
						Update
					</button>
					<button
						onClick={handleDelete}
						className="btn my-4  bg-red-700 text-white"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default MyListCard;
