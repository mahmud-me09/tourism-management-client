import React from "react";
import Card from "./Card";

const Cards = ({ touristSpots }) => {

	return (
			<div className="flex flex-col items-center flex-wrap lg:flex-row md:justify-center my-10 gap-6 mx-auto">
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
