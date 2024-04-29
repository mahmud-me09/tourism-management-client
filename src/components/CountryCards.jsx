import React from 'react';
import CountryDetailPage from '../pages/CountryDetailPage';
import { useNavigate } from 'react-router-dom';

const CountryCards = ({country}) => {
	const navigate = useNavigate()
    function handleOnClick(country_name){
		navigate(`/countrytouristsspot/${country_name}`);
	}
    return (
		<div onClick={()=>handleOnClick(country.country_name)} className="card hover:scale-105 hover:cursor-pointer max-w-96 bg-orange-50  shadow-xl">
			<figure>
				<img src={country?.image} alt={country.country_name} />
			</figure>
			<div className="card-body ">
				<h2 className="font-bold text-2xl text-center">
					{country?.country_name}
				</h2>
				<p className="text-justify">{country?.description}</p>
			</div>
		</div>
	);
};

export default CountryCards;