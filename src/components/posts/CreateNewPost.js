import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { TagChoiceForm } from "./TagCheckboxes"

function CreateNewPost() {
	const [post, setPost] = useState({
		user_id: "",
		category_id: 5,
		title: "",
		publication_date: "",
		image_url: "",
		content: "",
		approved: 1,
	})
	//declaring user_id into a valid json string
	//token is userId
	const [user_id] = useState(JSON.parse(localStorage.getItem("token")))
	const history = useHistory()
	const [categories, setCategories] = useState([])

	const [tChoice, setTChoice] = useState({
		// capturing the chosen Ids in new Set()
		chosenTags: new Set(),
	})

	const createTagChoice = (tag) => {
		const fetchArray = []
		// fetchArray - new array for all promises
		// posting each choice in the chosenMaterials object in the worksMaterials resource
		tChoice.chosenTags.forEach((chosenTagsId) => {
			/// pushing a promise to fetchArray
			fetchArray.push(
				fetch("http://localhost:8088/tags", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						// chosentagsId - Id in the new set()
						tagsId: chosenTagsId,
					}),
				})
			)

			// This is where all the fetches (Promises) all run and resolve
			Promise.all(fetchArray).then(() => {
				// remove all choices upon resolve
				mChoice.chosenMaterials.clear()
			})
		})
	}

	const fetchCategories = () => {
		return (
			fetch("http://localhost:8088/categories")
				// after fetching data, invoke function
				.then((res) => res.json())
				//taking json string and parsing into js
				.then((data) => {
					// data = categories converted from string to array, setting that response with setCategories
					setCategories(data)
				})
		)
	}
	useEffect(() => {
		fetchCategories()
	}, [])

	const addPost = (evt) => {
		//stops the form from refreshing the page
		evt.preventDefault()

		const copy = { ...post }
		copy.user_id = user_id
		copy.approved = 1
		setPost(copy)
		console.log(copy)
		const fetchOption = {
			method: "POST",
			headers: {
				//lets the api know the information its about to get is json
				"Content-Type": "application/json",
			},
			//takes the data an converts it to a string
			body: JSON.stringify(copy),
		}

		return (
			fetch("http://localhost:8088/posts", fetchOption)
				// after the fetch is complete
				.then(() => {
					//forces a redirect to posts
					history.push("/Posts")
				})
		)
	}

	return (
		<form className='CreateNewPost'>
			<h2 className='CreateNewPost__title'>Add New Post</h2>
			<fieldset className='fieldset'>
				<input
					type='url'
					name='url'
					placeholder='URL of img'
					onChange={(evt) => {
						const copy = { ...post }
						copy.image_url = evt.target.value
						setPost(copy)
					}}
				/>
			</fieldset>
			<fieldset>
				<div className='form-group'>
					<label htmlFor='title'>Title:</label>
					<input
						required
						autoFocus
						type='text'
						className='form-control'
						placeholder='Brief description about the post'
						onChange={(evt) => {
							const copy = { ...post }
							copy.title = evt.target.value
							setPost(copy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className='form-group'>
					<label htmlFor='title'>Content:</label>
					<input
						required
						autoFocus
						type='text'
						className='form-control'
						placeholder='Content'
						onChange={(evt) => {
							const copy = { ...post }
							copy.content = evt.target.value
							setPost(copy)
						}}
					/>
				</div>
			</fieldset>
			<fieldset>
				<>
					<label htmlFor='category-select'> Choose a category:</label>
					<select
						name='category'
						id='category-select'
						onChange={(evt) => {
							const copy = { ...post }
							copy.category_id = parseInt(evt.target.value)
							setPost(copy)
						}}>
						<option value=''>--Please choose a category-</option>
						{categories.map((cat) => (
							<option key={cat.id} value={cat.id}>
								{cat.label}
							</option>
						))}
					</select>
				</>

				<TagChoiceForm tChoice={tChoice} setTChoice={setTChoice} />
			</fieldset>
			<button className='btn btn-primary' onClick={addPost}>
				Add Post
			</button>
		</form>
	)
}

export default CreateNewPost
