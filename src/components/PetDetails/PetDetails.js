import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as petService from "../../services/petService.js";

export default function PetDetails() {
	const { id } = useParams();
	const [pet, setPet] = useState({});

	useEffect(() => {
		petService
			.getSinglePet(id)
			.then((data) => setPet(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<section id="details-page" className="details">
			<div className="pet-information">
				<h3>Name: {pet.name}</h3>
				<p className="type">Type: {pet.type}</p>
				<p className="img">
					<img src={pet.imageUrl} />
				</p>
				<div className="actions">
					<a className="button" href="#">
						Edit
					</a>
					<a className="button" href="#">
						Delete
					</a>

					<a className="button" href="#">
						Like
					</a>

					<div className="likes">
						<img className="hearts" src="/images/heart.png" />
						<span id="total-likes">Likes: 0</span>
					</div>
				</div>
			</div>
			<div className="pet-description">
				<h3>Description:</h3>
				<p>{pet.description}</p>
			</div>
		</section>
	);
}
