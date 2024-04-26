import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpotPage from "../pages/AllTouristsSpotPage";
import AddTouristsspot from "../pages/AddTouristsspot";
import MyList from "../pages/MyList";

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
					path: "/alltouristsspot",
					element: <AllTouristsSpotPage></AllTouristsSpotPage>,
				},
				{
					path: "/mylist",
					element: <MyList></MyList>,
				},
				{
					path: "/addtouristsspot",
					element: <AddTouristsspot></AddTouristsspot>,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
