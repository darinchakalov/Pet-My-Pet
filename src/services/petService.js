const baseUrl = "http://localhost:3030";

export const getAllPets = () => {
	return fetch(`${baseUrl}/jsonstore/pets`).then((result) => result.json());
};

export const getSinglePet = (id) => {
	return fetch(`${baseUrl}/jsonstore/pets/${id}`).then((result) => result.json());
};

export const createPet = (petData) => {
	return fetch(`${baseUrl}/jsonstore/pets`, {
		method: "POST", // or 'PUT'
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(petData),
	}).then((response) => response.json());
};
