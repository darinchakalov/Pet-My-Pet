import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import EditPet from "./components/EditPet/EditPet.js";
import CreatePet from "./components/CreatePet/CreatePet.js";
import MyPets from "./components/MyPets/MyPets.js";
import PetDetails from "./components/PetDetails/PetDetails.js";
import Logout from "./components/Logout/Logout.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundry from "./components/Common/ErrorBoundry.js";
import { NotoficationProvider } from "./contexts/NotificationContext.js";
import Notification from "./components/Common/Notification.js";

function App() {
	return (
		<ErrorBoundry>
			<AuthProvider>
				<NotoficationProvider>
					<div id="container">
						<Header />

						<Notification />

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
				</NotoficationProvider>
			</AuthProvider>
		</ErrorBoundry>
	);
}

export default App;
