import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../utils/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const savedUser = localStorage.getItem("authUser");
		return savedUser ? JSON.parse(savedUser) : null;
	});

	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const signInUser = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				localStorage.setItem("authUser", JSON.stringify(currentUser));
				setUser(currentUser);
			} else {
				localStorage.removeItem("authUser");
				setUser(null);
			}
			console.log("observing", currentUser);
		});
		return () => unsubscribe();
	}, []);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				toast.success("Successfully logged out");
				localStorage.removeItem("authUser");
				setUser(null);
			})
			.catch((error) => {
				console.error(error);
				toast.error("Failed to log out");
			});
	};

	const authInfo = { user, createUser, signInUser, handleSignOut };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
