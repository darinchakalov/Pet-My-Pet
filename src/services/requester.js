export const request = (url) => {
	return fetch(url).then(responceHandler);
};

async function responceHandler(res) {
	let jsonData = await res.json();

	if (res.ok) {
		return jsonData;
	} else {
		throw jsonData;
	}
}
