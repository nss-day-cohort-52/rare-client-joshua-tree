export const getPosts = () => {
	return fetch("http://localhost:8000/posts", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}
export const getCategories = () => {
	return fetch("http://localhost:8000/categories", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const getPostById = (postId) => {
	return fetch(`http://localhost:8000/posts/${postId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const getPostsByCurrentUser = (userId) => {
	return fetch(`http://localhost:8000/posts?user_id=${userId}`).then((res) =>
		res.json()
	)
}

export const get_post_category = (categoryId) => {
	return fetch(`http://localhost:8000/posts?category_id=${categoryId}`).then(
		(res) => res.json()
	)
}

export const get_post_tags = (tagId) => {
	return fetch(`http://localhost:8000/tags=${tagId}`).then(
		(res) => res.json()
		)
}

export const createPost = (post) => {
	return fetch("http://localhost:8000/posts", {
		method: "POST",
		headers: {
			"Authorization": `Token ${localStorage.getItem("token")}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(post)

	})
		.then(res => res.json())
}
export const deletePost = (postId) => {
	return fetch(`http://localhost:8000/posts/${postId}`, {
	  method: "Delete",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
	  },
	})
  }

  export const updatePost = (postId, post) => {
	return fetch(`http://localhost:8000/posts/${postId}`, {
	  method: "PUT",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(post)
	})
  }