import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const MyListCard = ({ touristSpot, onDelete }) => {
	const navigate = useNavigate();

	const handleDelete = () => {
		fetch(
			`https://tourism-management-server-nine.vercel.app/mylist/${touristSpot._id}`,
			{ method: "DELETE" }
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success("successfully Deleted from the database");
                    onDelete(touristSpot._id);
				}
			})
			.catch((error) => console.log(error.message));
	};
	return (
		<div className="card max-w-96 bg-base-100 shadow-xl">
			<figure>
				<img
					className="w-full h-[256px]"
					src={touristSpot?.photoURL}
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{touristSpot?.tourists_spot_name}
					<div className="badge badge-secondary">
						{touristSpot?.seasonality}
					</div>
				</h2>
				<p>Average Cost: ${touristSpot?.average_cost} per person</p>
				<div className="card-actions justify-between">
					<div className="badge badge-outline">
						Total Visitors: {touristSpot?.total_visitors_per_year}
					</div>
					<div className="badge badge-outline ">
						Travel Time {touristSpot?.travel_time} days
					</div>
				</div>
				<div className="flex justify-between">
					<label
						htmlFor={`my_modal_${touristSpot._id}`}
						className="btn my-4 text-black bg-green-500"
					>
						Update
					</label>

					<input
						type="checkbox"
						id={`my_modal_${touristSpot._id}`}
						className="modal-toggle"
					/>
					<div className="modal" role="dialog">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Hello!</h3>
							<p className="py-4">
								Are You sure You want to Update?
							</p>
							<div className="modal-action">
								<label
									onClick={() =>
										navigate(`/mylist/${touristSpot._id}`)
									}
									className="btn"
								>
									Confirm
								</label>

								<label
									htmlFor={`my_modal_${touristSpot._id}`}
									className="btn"
								>
									Exit!
								</label>
							</div>
						</div>
					</div>
					<label
						htmlFor={`modal_${touristSpot._id}`}
						className="btn my-4 text-black bg-red-500"
					>
						Delete
					</label>

					<input
						type="checkbox"
						id={`modal_${touristSpot._id}`}
						className="modal-toggle"
					/>
					<div className="modal" role="dialog">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Hello!</h3>
							<p className="py-4">
								Are You sure You want to Delete?
							</p>
							<div className="modal-action">
								<label
									onClick={handleDelete}
									htmlFor={`modal_${touristSpot._id}`}
									className="btn bg-red-500"
								>
									Confirm
								</label>

								<label
									htmlFor={`modal_${touristSpot._id}`}
									className="btn"
								>
									Exit!
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyListCard;
