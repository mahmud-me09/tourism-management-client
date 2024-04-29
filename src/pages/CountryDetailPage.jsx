import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cards from '../components/Cards';
import CountrySpecificTouristSpot from '../components/CountrySpecificTouristSpot';

const CountryDetailPage = () => {
    const countrySpecificTouristSpots = useLoaderData()
    const {country_name} = useParams()
    
    return (
		<>
			<h1 className="text-3xl font-bold text-center p-6">
				{country_name}
			</h1>
			<div className="flex flex-col lg:flex-row justify-center items-center lg:flex-wrap gap-6">
				{countrySpecificTouristSpots.map((spot) => (
					<CountrySpecificTouristSpot
						key={spot._id}
						touristSpot={spot}
					></CountrySpecificTouristSpot>
				))}
			</div>
		</>
	);
};

export default CountryDetailPage;