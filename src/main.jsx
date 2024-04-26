import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "../src/routers/Routes";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<Routes></Routes>
		</AuthProvider>
	</React.StrictMode>
);