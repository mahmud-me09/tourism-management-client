import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
	const { user, handleSignOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const navLink = (
		<>
			<li className="font-bold">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "bg-purple-500 text-white" : ""
					}
				>
					Home
				</NavLink>
			</li>

			<li className="font-bold">
				<NavLink
					to="/blogs"
					className={({ isActive }) =>
						isActive ? "bg-purple-500 text-white" : ""
					}
				>
					Blogs
				</NavLink>
			</li>

			<li className="font-bold">
				<NavLink
					to="/update"
					className={({ isActive }) =>
						isActive ? "bg-purple-500 text-white" : ""
					}
				>
					Update Profile
				</NavLink>
			</li>
			{user && (
				<li className="font-bold">
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							isActive ? "bg-purple-500 text-white" : ""
						}
					>
						User Profile
					</NavLink>
				</li>
			)}
		</>
	);
	return (
		<div className="navbar bg-purple-50 rounded-b z-10 mb-4">
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
						{navLink}
					</ul>
				</div>
				<h1 className="btn btn-ghost text-lg lg:text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
					Luxury Living
				</h1>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal mx-4 px-1">{navLink}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar tooltip tooltip-left z-30"
							data-tip={`${user.displayName}`}
						>
							<div className="w-10 rounded-full">
								<img alt="user Image" src={user.photoURL} />
							</div>
						</div>
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
					<Link to="/login" className="btn">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default NavBar;
