import React from "react";
import Card from "./Card";

const Cards = ({ touristSpots }) => {

	return (
			<div className="flex flex-col items-center flex-wrap lg:flex-row justify-center my-10 gap-6">
				{touristSpots.map((touristSpot) => (
					<Card
						key={touristSpot._id}
						touristSpot={touristSpot}
					></Card>
				))}
			</div>
	);
};

export default Cards;