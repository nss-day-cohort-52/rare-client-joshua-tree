export const getAllPosts = () => {
	return (
		fetch(`http://localhost:8088/posts`)
			// fetching data from the API and parsing into application state
			.then((res) => res.json())
	)
}

export const getPostById = (postId) => {
	return (
		fetch(`http://localhost:8088/posts/${postId}`)
			// fetching data from the API and parsing into application state
			.then((res) => res.json())
	)
}
