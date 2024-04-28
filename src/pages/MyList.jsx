import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const MyList = () => {
    const touristSpots = useLoaderData();
    const { user } = useContext(AuthContext);
    const userAddedSpots = touristSpots.filter(
		(touristSpot) => touristSpot?.user_email === user?.providerData[0]?.email
	);
	console.log(userAddedSpots)
    return (
		<div>
			<div className="flex flex-col items-center flex-wrap lg:flex-row md:justify-center my-10 gap-6 mx-auto">
				{userAddedSpots.map((spot) => (
					<Card touristSpot={spot}></Card>
				))}
			</div>
		</div>
	);
};

export default MyList;