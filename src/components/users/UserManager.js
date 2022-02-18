export const getThisUser = (token) => {
	return fetch(`http://localhost:8000/users/${token}`).then((res) =>
		res.json()
	)
}

export const getUsers= () => {
	return fetch("http://localhost:8000/users", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const getUserById = (userId) => {
	return fetch(`http://localhost:8000/users/${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

