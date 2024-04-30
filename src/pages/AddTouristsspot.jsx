import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const AddTouristsspot = () => {
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedTouristSpot, setSelectedTouristSpot] = useState("");
	const [touristSpots, setTouristSpots] = useState([]);
	const [touristSpotLocation, setTouristSpotLocation] = useState("");

	const { user } = useContext(AuthContext);

	const handleCountryChange = (event) => {
		const selectedCountry = event.target.value;
		setSelectedCountry(selectedCountry);

		switch (selectedCountry) {
			case "Jordan":
				setTouristSpots([
					{ name: "Petra", location: "Ma'an Governorate, Jordan" },
					{ name: "Wadi Rum", location: "Aqaba Governorate, Jordan" },
					{
						name: "Dead Sea",
						location: "Bordering Jordan and Israel",
					},
					{ name: "Jerash", location: "Jerash Governorate, Jordan" },
				]);
				break;
			case "Saudi_Arabia":
				setTouristSpots([
					{
						name: "Al-Ula",
						location: "Al-Ula Governorate, Saudi Arabia",
					},
					{
						name: "Riyadh",
						location: "Riyadh Province, Saudi Arabia",
					},
					{
						name: "Jeddah Corniche",
						location: "Jeddah, Makkah Province, Saudi Arabia",
					},
					{
						name: "Edge of the World",
						location: "Riyadh Province, Saudi Arabia",
					},
				]);
				break;
			case "United_Arab_Emirates":
				setTouristSpots([
					{
						name: "Burj Khalifa",
						location: "Dubai, United Arab Emirates",
					},
					{
						name: "Palm Jumeirah",
						location: "Dubai, United Arab Emirates",
					},
					{
						name: "Sheikh Zayed Grand Mosque",
						location: "Abu Dhabi, United Arab Emirates",
					},
					{
						name: "Dubai Desert Safari",
						location: "Dubai, United Arab Emirates",
					},
				]);
				break;
			case "Iran":
				setTouristSpots([
					{ name: "Persepolis", location: "Fars Province, Iran" },
					{
						name: "Isfahan's Naqsh-e Jahan Square",
						location: "Isfahan Province, Iran",
					},
					{ name: "Shiraz", location: "Fars Province, Iran" },
					{
						name: "Iranian Desert Villages",
						location: "Various provinces in Iran",
					},
				]);
				break;
			case "Qatar":
				setTouristSpots([
					{ name: "The Pearl-Qatar", location: "Doha, Qatar" },
					{ name: "Souq Waqif", location: "Doha, Qatar" },
					{
						name: "Katara Cultural Village",
						location: "Doha, Qatar",
					},
					{
						name: "Khor Al Adaid (Inland Sea)",
						location: "Southeastern Qatar",
					},
				]);
				break;
			case "Kuwait":
				setTouristSpots([
					{ name: "Kuwait Towers", location: "Kuwait City, Kuwait" },
					{
						name: "The Avenues Mall",
						location: "Kuwait City, Kuwait",
					},
					{ name: "Failaka Island", location: "Kuwait Bay, Kuwait" },
					{
						name: "Al Shaheed Park",
						location: "Kuwait City, Kuwait",
					},
				]);
				break;
			default:
				setTouristSpots([]);
				break;
		}
	};

	const handleTouristSpotChange = (event) => {
		const selectedSpot = event.target.value;
		setSelectedTouristSpot(selectedSpot);
		const spot = touristSpots.find((spot) => spot.name === selectedSpot);
		setTouristSpotLocation(spot.location);
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const form = e.target;
		const country_name = form.country_name.value;
		const tourists_spot_name = form.tourists_spot_name.value;
		const location = form.location.value;
		const photoURL = form.photoURL.value;
		const average_cost = form.average_cost.value;
		const seasonality = form.seasonality.value;
		const travel_time = form.travel_time.value;
		const total_visitors_per_year = form.total_visitors_per_year.value;
		const description = form.description.value;
		const user_email = form.user_email.value;
		const user_name = form.user_name.value;

		const touristSpot = {
			country_name,
			tourists_spot_name,
			location,
			photoURL,
			average_cost,
			seasonality,
			travel_time,
			total_visitors_per_year,
			description,
			user_email,
			user_name,
		};
        fetch(
			"https://tourism-management-server-nine.vercel.app/addtouristsspot",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(touristSpot),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					toast.success("successfully added to the database");
					form.reset();
				}
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<section className="p-6 dark:bg-gray-100 dark:text-gray-900">
			<form
				onSubmit={handleSubmitForm}
				className="container flex flex-col mx-auto space-y-12"
			>
				<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-bold lg:text-2xl">
							Add A Tourists Spot
						</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm">Country Name</label>
							<select
								className="w-full rounded-md h-8 border focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								name="country_name"
								onChange={handleCountryChange}
								value={selectedCountry}
							>
								<option value="">
									--Please choose an option--
								</option>
								<option value="Jordan">Jordan</option>
								<option value="Saudi_Arabia">
									Saudi Arabia
								</option>
								<option value="United_Arab_Emirates">
									United Arab Emirates
								</option>
								<option value="Iran">Iran</option>
								<option value="Qatar">Qatar</option>
								<option value="Kuwait">Kuwait</option>
							</select>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm">
								Tourists Spot Name:
							</label>
							<select
								className="w-full h-8 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								name="tourists_spot_name"
								onChange={handleTouristSpotChange}
								value={selectedTouristSpot}
							>
								<option value="">
									--Please choose a country first--
								</option>
								{touristSpots.map((spot, index) => (
									<option key={index} value={spot.name}>
										{spot.name}
									</option>
								))}
							</select>
						</div>

						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">Location:</label>
								<input
									type="text"
									name="location"
									className="w-full h-8 p-4 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
									value={touristSpotLocation}
									readOnly
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">Photo URL:</label>
								<input
									type="url"
									name="photoURL"
									className="w-full p-4 h-8 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								/>
							</div>
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">Average Cost:</label>
								<input
									type="number"
									name="average_cost"
									className="w-full h-8 p-4 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">seasonality:</label>
								<select
									className="w-full rounded-md h-8 border focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
									name="seasonality"
								>
									<option value="">
										--Please choose an option--
									</option>
									<option value="Summer">Summer</option>
									<option value="Winter">Winter</option>
									<option value="Spring">Spring</option>
								</select>
							</div>
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">
									Travel Time (Days):
								</label>
								<input
									type="number"
									name="travel_time"
									className="w-full p-4 h-8 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">
									Total Visitors Per Year
								</label>
								<input
									type="number"
									name="total_visitors_per_year"
									className="w-full h-8 p-4 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								/>
							</div>
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">User Email</label>
								<input
									type="email"
									name="user_email"
									defaultValue={user?.providerData[0]?.email}
									readOnly
									className="w-full p-4 h-8 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label className="text-sm">User Name</label>
								<input
									type="text"
									defaultValue={user?.displayName}
									readOnly
									name="user_name"
									className="w-full h-8 p-4 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
								/>
							</div>
						</div>
						<div className="col-span-full">
							<label className="text-sm">Description</label>
							<textarea
								type="text"
								name="description"
								className="w-full h-32 p-4 border rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
							/>
						</div>
						{/* <button className="btn btn-primary col-span-full"> */}
						{/* <input type="submit" value="Submit" /> */}
						<label
							htmlFor={`my_modal_submit`}
							className="btn btn-success col-span-full"
						>
							Submit
						</label>

						<input
							type="checkbox"
							id={`my_modal_submit`}
							className="modal-toggle"
						/>
						<div className="modal" role="dialog">
							<div className="modal-box">
								<h3 className=" text-center font-bold text-lg">
									Hello {user.displayName}!
								</h3>
								<p className="py-4 text-center">
									Are You sure You want to Add this Tourist
									Spot to your database?
								</p>
								<div className="modal-action justify-between">
									<input
										value="confirm"
										type="submit"
										className="btn btn-error w-1/2"
									/>

									<label
										htmlFor={`my_modal_submit`}
										className="btn btn-success w-1/2"
									>
										Exit!
									</label>
								</div>
							</div>
						</div>
						{/* </button> */}
					</div>
				</fieldset>
			</form>
		</section>
	);
};

export default AddTouristsspot;
