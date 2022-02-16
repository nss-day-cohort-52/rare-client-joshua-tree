<<<<<<< HEAD
export const getAllPosts = () => {
	return (
		fetch(`http://localhost:8000/posts`)
			// fetching data from the API and parsing into application state
			.then((res) => res.json())
	)
}

=======
export const getPosts = () => {
	return fetch("http://localhost:8000/posts", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }
export const getCategories = () => {
	return fetch("http://localhost:8000/categories", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }
  
>>>>>>> b77ef724711e5723c9fde05a4ebc18392b28072b
export const getPostById = (postId) => {
	return (
		fetch(`http://localhost:8000/posts/${postId}`)
			// fetching data from the API and parsing into application state
			.then((res) => res.json())
	)
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
