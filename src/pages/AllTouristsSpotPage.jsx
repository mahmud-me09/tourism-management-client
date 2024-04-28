import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const AllTouristsSpotPage = () => {
	const spots = useLoaderData();
    const [touristSpots, setTouristSpot] = useState(spots)

    const handleSort = ()=>{
        const sortedTouristSpots = [...touristSpots].sort((a, b) => {
			const costA = parseInt(
				a.average_cost
			);
			const costB = parseInt(
				b.average_cost
			);
			return costA - costB;
		});

		// Display sorted tourist spots
		setTouristSpot(sortedTouristSpots)
    }
	return (
		<>
			<details className="dropdown relative left-1/2">
				<summary className="m-1 font-bold btn bg-orange-50">
					Sort
				</summary>
				<ul className="p-2 shadow menu dropdown-content z-[1] bg-orange-50 rounded-box w-52 font-bold">
					<li>
						<button onClick={handleSort}>Ascending sort by Average Cost</button>
					</li>
				</ul>
			</details>
			<Cards touristSpots={touristSpots}></Cards>
		</>
	);
};

export default AllTouristsSpotPage;
