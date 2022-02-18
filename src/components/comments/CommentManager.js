export const getComments = () => {
	return fetch("http://localhost:8000/comments", {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const getCommentById = (commentId) => {
	return fetch(`http://localhost:8000/comments/${commentId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const getCommentsByCurrentUser = (userId) => {
	return fetch(`http://localhost:8000/comments?user_id=${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const getCommentsByPostId = (postId) => {
	return fetch(`http://localhost:8000/comments?postId=${postId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	}).then((res) => res.json())
}

export const createComment = (comment) => {
	return fetch("http://localhost:8000/comments", {
		method: "POST",
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(comment),
	}).then((res) => res.json())
}

export const updateComment = (comment) => {
	return fetch("http://localhost:8000/comments", {
		method: "PUT",
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(comment),
	}).then((res) => res.json())
}

export const deleteComment = (commentId) => {
	return fetch(`http://localhost:8000/comments/${commentId}`, {
		method: "Delete",
		headers: {
			Authorization: `Token ${localStorage.getItem("token")}`,
		},
	})
}
