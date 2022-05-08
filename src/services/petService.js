const baseUrl = "http://localhost:3030/data";

export const getAllPets = () => {
	return fetch(`${baseUrl}/pets`).then((result) => result.json());
};

export const getSinglePet = (id) => {
	return fetch(`${baseUrl}/pets/${id}`).then((result) => result.json());
};

export const createPet = (petData, token) => {
	console.log(token);
	return fetch(`${baseUrl}/pets`, {
		method: "POST", // or 'PUT'
		headers: {
			"Content-Type": "application/json",
			"X-Authorization": token,
		},
		body: JSON.stringify(petData),
	}).then((response) => response.json());
};
