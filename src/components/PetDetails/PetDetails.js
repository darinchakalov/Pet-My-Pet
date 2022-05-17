import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";
import * as petService from "../../services/petService.js";
import { Link, useNavigate } from "react-router-dom";

export default function PetDetails() {
	const navigate = useNavigate();

	const { user } = useAuthContext();
	const { id } = useParams();
	const [pet, setPet] = useState({});

	useEffect(() => {
		petService
			.getSinglePet(id)
			.then((data) => setPet(data))
			.catch((err) => console.log(err));
	}, []);

	const deleteHandler = (e) => {
		e.preventDefault();

		petService
			.deletePet(id, user.accessToken)
			.then(() => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	const ownerButtons = (
		<>
			<Link className="button" to={`/edit/${pet._id}`}>
				Edit
			</Link>
			<Link className="button" to="#" onClick={deleteHandler}>
				Delete
			</Link>
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
