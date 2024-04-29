import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast } from 'react-toastify';


const MyList = () => {

	

    const touristSpots = useLoaderData();
	const navigate = useNavigate()
	
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

	const handleDelete = (id) => {
		fetch(
			`https://tourism-management-server-nine.vercel.app/mylist/${id}`,
			{ method: "DELETE" }
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success("successfully Deleted from the database");
					onDelete(id);
				}
			})
			.catch((error) => console.log(error.message));
	};
	
    return (
		<>
			<Helmet>
				<title>Travel Companion | My List</title>
			</Helmet>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Country</TableCell>
							<TableCell align="right">Tourist_spot</TableCell>
							<TableCell align="right">Total_Visitor</TableCell>
							<TableCell align="right">Average_Cost</TableCell>
							<TableCell align="right">Update</TableCell>
							<TableCell align="right">Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{userUpdatedSpots.map((row) => (
							<TableRow
								key={row._id}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell component="th" scope="row">
									{row.country_name}
								</TableCell>
								<TableCell align="right">
									{row.tourists_spot_name}
								</TableCell>
								<TableCell align="right">
									{row.total_visitors_per_year}
								</TableCell>
								<TableCell align="right">
									{row.average_cost}
								</TableCell>
								<TableCell align="right">
									<label
										htmlFor={`my_modal_${row._id}`}
										className="btn my-4 text-black bg-green-500"
									>
										Update
									</label>

									<input
										type="checkbox"
										id={`my_modal_${row._id}`}
										className="modal-toggle"
									/>
									<div className="modal" role="dialog">
										<div className="modal-box">
											<h3 className=" text-center font-bold text-lg">
												Hello!
											</h3>
											<p className="py-4 text-center">
												Are You sure You want to Update?
											</p>
											<div className="modal-action justify-between">
												<label
													onClick={() =>
														navigate(
															`/mylist/${row._id}`
														)
													}
													className="btn btn-error w-1/2"
												>
													Confirm
												</label>

												<label
													htmlFor={`my_modal_${row._id}`}
													className="btn btn-success w-1/2"
												>
													Exit!
												</label>
											</div>
										</div>
									</div>
								</TableCell>
								<TableCell align="right">
									<label
										htmlFor={`modal_${row._id}`}
										className="btn my-4 text-black bg-red-500"
									>
										Delete
									</label>

									<input
										type="checkbox"
										id={`modal_${row._id}`}
										className="modal-toggle"
									/>
									<div className="modal" role="dialog">
										<div className="modal-box">
											<h3 className="font-bold text-center text-lg">
												Hello!
											</h3>
											<p className="py-4 text-center">
												Are You sure You want to Delete?
											</p>
											<div className="modal-action">
												<label
													onClick={()=>handleDelete(row._id)}
													htmlFor={`modal_${row._id}`}
													className="btn btn-error w-1/2"
												>
													Confirm
												</label>

												<label
													htmlFor={`modal_${row._id}`}
													className="btn btn-success w-1/2"
												>
													Exit!
												</label>
											</div>
										</div>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default MyList;



function BasicTable() {
  
}