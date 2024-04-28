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
import PrivateRoutes from "./PrivateRoutes";
import UpdatePage from "../pages/UpdatePage";

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
					path: "/mylist/:id",
					loader: ({ params }) =>
						fetch(
							`https://tourism-management-server-nine.vercel.app/mylist/${params.id}`
						),
					element: (
						<PrivateRoutes>
							<UpdatePage></UpdatePage>
						</PrivateRoutes>
					),
				},
				{
					path: "/mylist",
					loader: () =>
						fetch(
							"https://tourism-management-server-nine.vercel.app/alltouristsspot"
						),
					element: (
						<PrivateRoutes>
							<MyList></MyList>
						</PrivateRoutes>
					),
				},
				{
					path: "/addtouristsspot",
					element: (
						<PrivateRoutes>
							<AddTouristsspot></AddTouristsspot>,
						</PrivateRoutes>
					),
				},

				{
					path: "/alltouristsspot/:id",
					loader: ({ params }) =>
						fetch(
							`https://tourism-management-server-nine.vercel.app/alltouristsspot/${params.id}`
						),
					element: (
						<PrivateRoutes>
							<DetailPage></DetailPage>
						</PrivateRoutes>
					),
				},
			],
		},
	]);

	return <HelmetProvider><RouterProvider router={router} /></HelmetProvider>;
};

export default Routes;
