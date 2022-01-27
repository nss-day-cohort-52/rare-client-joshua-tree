export const getThisUser = (token) => {
	return fetch(`http://localhost:8088/users/${token}`).then((res) =>
		res.json()
	)
}
