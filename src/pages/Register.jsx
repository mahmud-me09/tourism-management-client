import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const { createUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		createUser(data.email, data.password)
			.then((userCredential) => {
				const newUser = userCredential.user;

				return updateProfile(newUser, {
					displayName: data.Name,
					photoURL: data.photoURL,
				});
			})
			.then(() => {
				toast.success("User Created Successfully");
				setTimeout(() => navigate("/"), 2000);
				reset();
			})
			.catch((error) => {
				toast.error(`User creation failed: ${error.message}`);
			});
	};
	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<Helmet>
				<title>Travel Companion | Register</title>
			</Helmet>
			<div
				className="w-full my-4 mx-auto max-w-md p-4 border border-purple-500 rounded-md shadow sm:p-8
			dark:bg-gray-50 dark:text-gray-800"
			>
				<h2 className="mb-3 text-3xl font-semibold text-center">
					Register Here
				</h2>
				<form
					className="flex flex-col"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="name" className="block text-sm">
								Name<span className="text-red-500">*</span>
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								type="text"
								placeholder="Name"
								{...register("Name", { required: true })}
								aria-invalid={errors.Name ? "true" : "false"}
							/>
							{errors.Name?.type === "required" && (
								<p role="alert" className="text-red-600">
									Name is required
								</p>
							)}
						</div>
						<div className="space-y-2">
							<label
								htmlFor="Photo Url"
								className="block text-sm"
							>
								Photo URL<span className="text-red-500">*</span>
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								type="url"
								placeholder="Photo URL"
								{...register("photoURL", {
									required: "Photo URL is required",
								})}
								aria-invalid={
									errors.photoURL ? "true" : "false"
								}
							/>
							{errors.photoURL?.type === "required" && (
								<p className="text-red-600" role="alert">
									PhotoURL is required !!!
								</p>
							)}
						</div>
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm">
								Email address
								<span className="text-red-500">*</span>
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
								type="text"
								placeholder="Email"
								{...register("email", {
									required: "Email Address is required",
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: "Not a valid email",
									},
								})}
								aria-invalid={errors.email ? "true" : "false"}
							/>
							{errors.email && (
								<p className="text-red-500" role="alert">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="space-y-2 relative">
							<label htmlFor="password" className="text-sm">
								Password<span className="text-red-500">*</span>
							</label>
							<input
								className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 "
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								{...register("password", {
									required: true,
									min: {
										value: 6,
										message:
											"Password must be at least 6 characters long",
									},
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
										message:
											"Password must contain at least one uppercase, one lowercase, and be at least 6 characters long",
									},
								})}
							/>
							<div
								onClick={handleShowPassword}
								className="absolute bottom-3 right-4"
							>
								{showPassword ? <FaEye /> : <FaEyeSlash />}
							</div>
							{errors.password && (
								<p role="alert" className="text-red-600">
									{errors.password.message}
								</p>
							)}
						</div>
					</div>
					<input className="btn my-4" type="submit" />
				</form>
				<p className="text-center">
					Already have an account Please{" "}
					<Link className="underline text-blue-600" to="/login">
						Sign in
					</Link>
				</p>
			</div>
		</>
	);
};

export default Register;
