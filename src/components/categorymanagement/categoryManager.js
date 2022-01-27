export const fetchCategories = () => {
	return (
		fetch("http://localhost:8088/categories")
			// after fetching data, invoke function
			.then((res) => res.json())
	)
}

export const addCategory = (newCategory) => {
	return fetch("http://localhost:8088/categories", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(newCategory),
	}).then((res) => res.json())
}
