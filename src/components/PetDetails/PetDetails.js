import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext.js";
import * as petService from "../../services/petService.js";
import ConfirmDialog from "../Common/ConfirmDialog/ConfirmDialog.js";

export default function PetDetails() {
	const navigate = useNavigate();

	const { user } = useAuthContext();
	const { id } = useParams();
	const [pet, setPet] = useState({});
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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
			.catch((err) => console.log(err))
			.finally(() => {
				setShowDeleteDialog(false);
			});
	};

	const deleteClickHandler = (e) => {
		e.preventDefault();

		setShowDeleteDialog(true);
	};

	const ownerButtons = (
		<>
			<Link className="button" to={`/edit/${pet._id}`}>
				Edit
			</Link>
			<Link className="button" to="#" onClick={deleteClickHandler}>
				Delete
			</Link>
		</>
	);

	const likeButtonClick = () => {
		if (pet.likes.includes(user._id)) {
			// TODO: add notification
			console.log("User already liked");
			return;
		}

		let likes = [...pet.likes, user._id];
		let likedPet = { ...pet, likes };

		petService.like(pet._id, likedPet, user.accessToken).then((resData) => {
			console.log(resData);
			setPet((state) => ({
				...state,
				likes,
			}));
		});
	};

	const userButtons = (
		<button className="button" onClick={likeButtonClick}>
			Like
		</button>
	);

	return (
		<>
			<ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
			<section id="details-page" className="details">
				<div className="pet-information">
					<h3>Name: {pet.name}</h3>
					<p className="type">Type: {pet.type}</p>
					<p className="img">
						<img src={pet.imageUrl} alt="" />
					</p>
					<div className="actions">
						{user._id && (pet._ownerId === user._id ? ownerButtons : userButtons)}

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
		</>
	);
}
