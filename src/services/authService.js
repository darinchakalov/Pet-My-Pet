const baseUrl = "http://localhost:3030";

export const login = async (email, password) => {
	let res = await fetch(`${baseUrl}/users/login`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	let jsonRes = await res.json();

	if (res.ok) {
		return jsonRes;
	} else {
		throw jsonRes;
	}
};

export const register = async (email, password) => {
	let res = await fetch(`${baseUrl}/users/register`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	let jsonRes = await res.json();
	if (res.ok) {
		return jsonRes;
	} else {
		throw jsonRes;
	}
};

export const getUser = () => {
	let username = localStorage.getItem("username");

	return username;
};

export const logout = () => {
	fetch(`${baseUrl}/users/logout`);
};

export const isAuthenticated = () => {
	return Boolean(getUser());
};
