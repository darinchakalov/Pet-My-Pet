import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as petService from "../../services/petService.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { Alert } from "react-bootstrap";

export default function EditPet() {
	const [errors, setErrors] = useState({ name: false });
	const { user } = useAuthContext();
	const navigate = useNavigate();
	const [pet, setPet] = useState({});

	const { id } = useParams();

	useEffect(() => {
		petService
			.getSinglePet(id)
			.then((petData) => {
				setPet(petData);
			})
			.catch((err) => console.log(err));
	}, []);

	const editHandler = (e) => {
		e.preventDefault();
		const petData = Object.fromEntries(new FormData(e.currentTarget));

		petService
			.editPet(id, petData, user.accessToken)
			.then(() => navigate("/"))
			.catch((err) => console.log(err));
	};

	const nameChangeHandler = (e) => {
		//try with JS Debounceser
		if (e.target.value.length <= 3) {
			setErrors((state) => ({ ...state, name: "Name should be more than 3 characters" }));
		} else if (e.target.value.length > 10) {
			setErrors((state) => ({ ...state, name: "Name should be less than 10 characters" }));
		} else {
			setErrors((state) => ({ ...state, name: false }));
		}
	};

	return (
		<section id="edit-page" className="edit">
			<form id="edit-form" method="PUT" onSubmit={editHandler}>
				<fieldset>
					<legend>Edit my Pet</legend>
					<p className="field">
						<label htmlFor="name">Name</label>
						<span className="input" style={{ borderColor: errors.name ? "red" : "inherit" }}>
							<input
								type="text"
								name="name"
								id="name"
								defaultValue={pet.name}
								onBlur={nameChangeHandler}
							/>
						</span>
						<Alert variant="danger" show={errors.name}>
							{errors.name}
						</Alert>
					</p>
					<p className="field">
						<label htmlFor="description">Description</label>
						<span className="input">
							<textarea name="description" id="description" defaultValue={pet.description}></textarea>
						</span>
					</p>
					<p className="field">
						<label htmlFor="image">Image</label>
						<span className="input">
							<input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
						</span>
					</p>
					<p className="field">
						<label htmlFor="type">Type</label>
						<span className="input">
							<select id="type" name="type" defaultValue={pet.type}>
								<option value="cat">Cat</option>
								<option value="dog" selected>
									Dog
								</option>
								<option value="parrot">Parrot</option>
								<option value="reptile">Reptile</option>
								<option value="other">Other</option>
							</select>
						</span>
					</p>
					<input className="button submit" type="submit" defaultValue="Save" />
				</fieldset>
			</form>
		</section>
	);
}
