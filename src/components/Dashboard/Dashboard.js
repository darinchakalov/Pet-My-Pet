import { useState, useEffect } from "react";
import * as petService from "../../services/petService.js";
import DashboardPetCart from "../DashboardPetCart/DashboardPetCart.js";

export default function Dashboard() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		petService
			.getAllPets()
			.then((pets) => setPets(Array.from(Object.entries(pets))))
			.catch((err) => console.log(err));
	}, []);

	return (
		<section id="dashboard-page" className="dashboard">
			<h1>Dashboard</h1>
			<ul className="other-pets-list">
				{pets.length !== 0 ? (
					pets.map((pet) => <DashboardPetCart key={pet[0]} pet={pet[1]}></DashboardPetCart>)
				) : (
					<p className="no-pets">No pets in database!</p>
				)}
			</ul>
		</section>
	);
}
