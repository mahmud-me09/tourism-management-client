import React from 'react';

const CountryCards = ({country}) => {
    // console.log(country)
    return (
		<div className="card max-w-96 bg-orange-50 shadow-xl">
			<figure>
				<img
					src={country?.image}
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="font-bold text-2xl text-center">{country?.country}</h2>
				<p className='text-justify'>{country?.description}</p>
				
			</div>
		</div>
	);
};

export default CountryCards;