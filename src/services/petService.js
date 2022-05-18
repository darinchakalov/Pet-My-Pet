import { request } from "./requester.js";

const baseUrl = "http://localhost:3030/data";

export const getAllPets = () => {
	return request(`${baseUrl}/pets`);
};

export const getSinglePet = (id) => {
	return fetch(`${baseUrl}/pets/${id}`).then((result) => result.json());
};

export const createPet = (petData, token) => {
	return fetch(`${baseUrl}/pets`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Authorization": token,
		},
		body: JSON.stringify({ ...petData, likes: 0 }),
	}).then((response) => response.json());
};

export const deletePet = (petId, token) => {
	return fetch(`${baseUrl}/pets/${petId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"X-Authorization": token,
		},
	}).then((response) => response.json());
};

export const editPet = (petId, petData, token) => {
	return fetch(`${baseUrl}/pets/${petId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"X-Authorization": token,
		},
		body: JSON.stringify(petData),
	}).then((response) => response.json);
};


export const likePet = (petId, userId) => {

}