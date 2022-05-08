import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import EditPet from "./components/EditPet/EditPet.js";
import CreatePet from "./components/CreatePet/CreatePet.js";
import MyPets from "./components/MyPets/MyPets.js";
import PetDetails from "./components/PetDetails/PetDetails.js";
import Logout from "./components/Logout/Logout.js";
import { AuthContext } from "./contexts/AuthContext.js";

function App() {
	const [user, setUser] = useState({
		accessToken: "",
		email: "",
		_id: "",
	});

	const login = (authData) => {
		setUser(authData);
	};

	const onLogout = () => {};

	return (
		<AuthContext.Provider value={{ user, login }}>
			<div id="container">
				<Header />

				<main id="site-content">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/create" element={<CreatePet />} />
						<Route path="/edit/:id" element={<EditPet />} />
						<Route path="/my-pets" element={<MyPets />} />
						<Route path="/details/:id" element={<PetDetails />} />
						<Route path="/logout" element={<Logout />} />
					</Routes>
				</main>

				<footer id="site-footer">
					<p>@PetMyPet</p>
				</footer>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
