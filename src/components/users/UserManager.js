export const getThisUser = (token) => {
	return fetch(`http://localhost:8000/users/${token}`).then((res) =>
		res.json()
	)
}
