import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import * as petService from "../../services/petService.js";

export default function PetDetails() {
	const { user } = useContext(AuthContext);
	const { id } = useParams();
	const [pet, setPet] = useState({});

	useEffect(() => {
		petService
			.getSinglePet(id)
			.then((data) => setPet(data))
			.catch((err) => console.log(err));
	}, []);

	const ownerButtons = (
		<>
			<a className="button" href="#">
				Edit
			</a>
			<a className="button" href="#">
				Delete
			</a>
		</>
	);

	const userButtons = (
		<a className="button" href="#">
			Like
		</a>
	);

	return (
		<section id="details-page" className="details">
			<div className="pet-information">
				<h3>Name: {pet.name}</h3>
				<p className="type">Type: {pet.type}</p>
				<p className="img">
					<img src={pet.imageUrl} alt="" />
				</p>
				<div className="actions">
					{user._id && (pet._ownerId == user._id ? ownerButtons : userButtons)}

					<div className="likes">
						<img className="hearts" src="/images/heart.png" alt="" />
						<span id="total-likes">Likes: {pet.likes}</span>
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
