const baseUrl = "http://localhost:3030/data";

export const getAllPets = () => {
	return fetch(`${baseUrl}/pets`).then((result) => result.json());
};

export const getSinglePet = (id) => {
	return fetch(`${baseUrl}/pets/${id}`).then((result) => result.json());
};

export const createPet = (petData, token) => {
	return fetch(`${baseUrl}/pets`, {
		method: "POST", // or 'PUT'
		headers: {
			"Content-Type": "application/json",
			"X-Authorization": token,
		},
		body: JSON.stringify({ ...petData, likes: 0 }),
	}).then((response) => response.json());
};
