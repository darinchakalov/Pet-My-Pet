const baseUrl = "http://localhost:3030";

export const getAllPets = () => {
	return fetch(`${baseUrl}/jsonstore/pets`).then((result) => result.json());
};
