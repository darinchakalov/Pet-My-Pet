import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import EditPet from "./components/EditPet/EditPet.js";
import CreatePet from "./components/CreatePet/CreatePet.js";
import MyPets from "./components/MyPets/MyPets.js";
import PetDetails from "./components/PetDetails/PetDetails.js";

function App() {
	return (
		<div id="container">
			<Header />

			<main id="site-content">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/edit" element={<EditPet />} />
					<Route path="/create" element={<CreatePet />} />
					<Route path="/my-pets" element={<MyPets />} />
					<Route path="/details" element={<PetDetails />} />
				</Routes>
			</main>

			<footer id="site-footer">
				<p>@PetMyPet</p>
			</footer>
		</div>
	);
}

export default App;
