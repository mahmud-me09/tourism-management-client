import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
	const { user } = useContext(AuthContext);
	if (user) {
		return children; // this children is the page component on the Router.jsx
	}
	return <Navigate to="/login"></Navigate>; // if not authenticated it is routed to login page
};

export default PrivateRoutes;
