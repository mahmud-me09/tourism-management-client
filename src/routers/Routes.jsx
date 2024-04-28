import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpotPage from "../pages/AllTouristsSpotPage";
import AddTouristsspot from "../pages/AddTouristsspot";
import MyList from "../pages/MyList";
import { HelmetProvider } from "react-helmet-async";
import DetailPage from "../pages/DetailPage";
import { useState } from "react";
import { useEffect } from "react";

const Routes = () => {
	
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root></Root>,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					loader: () =>
						fetch(
							"https://tourism-management-server-nine.vercel.app/alltouristsspot"
						),
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
					loader: () =>
						fetch(
							"https://tourism-management-server-nine.vercel.app/alltouristsspot"
						),
					element: <AllTouristsSpotPage></AllTouristsSpotPage>,
				},
				{
					path: "/mylist",
					loader: () =>
						fetch(
							"https://tourism-management-server-nine.vercel.app/alltouristsspot"
						),
					element: <MyList></MyList>,
				},
				{
					path: "/addtouristsspot",
					element: <AddTouristsspot></AddTouristsspot>,
				},
				{
					path: "/alltouristsspot/:id",
					loader:({params})=>fetch(`https://tourism-management-server-nine.vercel.app/alltouristsspot/${params.id}`),
					element: <DetailPage></DetailPage>,
				},
			],
		},
	]);

	return <HelmetProvider><RouterProvider router={router} /></HelmetProvider>;
};

export default Routes;
