import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import { Helmet } from 'react-helmet-async';
import MyListCard from '../components/MyListCard';

const MyList = () => {
    const touristSpots = useLoaderData();
	
    const { user } = useContext(AuthContext);
    const userAddedSpots = touristSpots.filter(
		(touristSpot) => touristSpot?.user_email === user?.providerData[0]?.email
	);
	const [userUpdatedSpots,setUserUpdatedSpots] = useState(userAddedSpots)
	
	const onDelete = prop=>{
		const remaining = userAddedSpots.filter(spots => spots._id !== prop)
		setUserUpdatedSpots([...remaining])
		
	}
	console.log(userUpdatedSpots)

    return (
		<>
			<Helmet>
				<title>Travel Companion | My List</title>
			</Helmet>
			<div className="flex flex-col items-center flex-wrap lg:flex-row md:justify-center my-10 gap-6 mx-auto">
				{userUpdatedSpots.map((spot) => (
					<MyListCard
						onDelete={onDelete}
						key={spot._id}
						touristSpot={spot}
					></MyListCard>
				))}
			</div>
		</>
	);
};

export default MyList;