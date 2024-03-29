
  export const getCategories = () => {
	return fetch("http://localhost:8000/categories", {
	  headers: {
		'Authorization': `Token ${localStorage.getItem('token')}`
	  }
	}).then(res => res.json())
  }

  export const deleteCategory = (categoryId) => {
	return fetch(`http://localhost:8000/categories/${categoryId}`, {
	  method: "Delete",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
	  },
	})
  }

  export const createCategory = (category) => {
	return fetch("http://localhost:8000/categories", {
	  method: "POST",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(category)
	})
	  .then(res => res.json())
  }
  

export const updateCategory = (category) => {
	return fetch(`http://localhost:8000/categories/${category.id}`, {
	  method: "PUT",
	  headers: {
		"Authorization": `Token ${localStorage.getItem("token")}`,
		'Content-Type': "application/json"
	  },
	  body: JSON.stringify(category)
	})
  }

  export const getCategory = (CategoryId) => {
    return fetch(`http://localhost:8000/categories/${CategoryId}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
  }  