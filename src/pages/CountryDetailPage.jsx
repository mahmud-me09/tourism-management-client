import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cards from '../components/Cards';
import CountrySpecificTouristSpot from '../components/CountrySpecificTouristSpot';

const CountryDetailPage = () => {
    const countrySpecificTouristSpots = useLoaderData()
    const {country_name} = useParams()
    console.log(country_name)
    return (
		<div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
            <h1 className="text-3xl font-bold text-center underline">{country_name}</h1>
			{countrySpecificTouristSpots.map((spot) => (
				<CountrySpecificTouristSpot key={spot._id} touristSpot={spot}></CountrySpecificTouristSpot>
			))}
		</div>
	);
};

export default CountryDetailPage;