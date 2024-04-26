import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({children}) => {
    return (
		<li className="font-bold">
			<NavLink
				to={`/${
					children.toLowerCase() === "home"
						? ""
						: children.toLowerCase()
				}`}
				className={({ isActive }) =>
					isActive ? "bg-purple-500 text-white" : ""
				}
			>
				{children}
			</NavLink>
		</li>
	);
};

export default NavigationLink;