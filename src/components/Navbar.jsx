import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import NavigationLink from "./NavigationLink";
import favicon from "../assets/favicon.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";




const NavBar = () => {

	const { user, handleSignOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const navLinks = (
		<>
			<NavigationLink>Home</NavigationLink>

			<NavigationLink>All Tourists Spot</NavigationLink>
			{user && <NavigationLink>Add Tourists Spot</NavigationLink>}
			{user && <NavigationLink>My List</NavigationLink>}
		</>
	);
	return (
		<div className="navbar bg-orange-50 rounded-b-lg z-10 mb-4">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navLinks}
					</ul>
				</div>
				<div className="flex justify-center items-center">
					<img className="w-20  h-20" src={favicon} alt="" />
					<h1
						onClick={() => navigate("/")}
						className="btn w-36 h-24 btn-ghost text-lg lg:text-2xl animate-text bg-gradient-to-r from-teal-500 via-orange-500 to-purple-500 bg-clip-text text-transparent font-black"
					>
						Travel Companion
					</h1>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal mx-4 px-1">{navLinks}</ul>
			</div>
			<div className="navbar-end">
				{/* theme controller here */}

				<label className="cursor-pointer grid place-items-center">
					<input
						type="checkbox"
						value="synthwave"
						className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
					/>
					<svg
						className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="5" />
						<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
					</svg>
					<svg
						className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				</label>

				{/* theme controller ends here */}
				{user ? (
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							data-tooltip-content={user.displayName}
							data-tooltip-id="avatar-tooltip"
							data-tooltip-place="left"
							role="button"
							className="btn btn-ghost btn-circle avatar z-30"
						>
							<div className="w-10 rounded-full">
								<img alt="user Image" src={user.photoURL} />
							</div>
						</div>
						<Tooltip id="avatar-tooltip" />
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 border border-purple-600 rounded-box w-52 z-30"
						>
							<li>
								<Link to="/update" className="justify-between">
									Update Profile
								</Link>
							</li>
							<li>
								<Link to="/profile">User Profile</Link>
							</li>
							<li>
								<button
									className="btn"
									onClick={() => {
										handleSignOut();
										navigate("/");
									}}
								>
									Logout
								</button>
							</li>
						</ul>
					</div>
				) : (
					<div>
						<Link to="/login" className="btn">
							Login
						</Link>
						<Link to="/register" className="btn">
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
