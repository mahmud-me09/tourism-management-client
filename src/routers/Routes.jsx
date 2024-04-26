import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpotPage from "../pages/AllTouristsSpotPage";

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root></Root>,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home></Home>,
				},
				{
					path: "/login",
					element: <Login></Login>,
				},
				{
					path: "/register",
					element: <Register></Register>,
				},
				{
					path: "/all-tourists-spot",
					element: <AllTouristsSpotPage></AllTouristsSpotPage>,
				},

			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
