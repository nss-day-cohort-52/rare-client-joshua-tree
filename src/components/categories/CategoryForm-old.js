import React, { useState } from "react"
import {getCategories, createCategory} from "./categoryManager"
import "./category.css"

export const CategoryForm = ({ fetchCategories }) => {
	const [createCategory, setCategory] = useState({
		label: "",
	})

	const submitCategory = (category) => {
		category.preventDefault()
		const newCategory = {
			label: createCategory.label,
		}


		const fetchOption = {
			headers: {
				"Authorization": `Token ${localStorage.getItem("token")}`,
				'Content-Type': "application/json"
			  },
			// passing through newBooking object for POST
			body: JSON.stringify(newCategory),
		}
		// returning updated object and POSTING to API with the fetchOption
		return fetch("http://localhost:8000/categories", fetchOption)
		
			.then(fetchCategories)
			.then(setCategory(newCategory))
	}

	return (
		<form>
			<fieldset>
				<div className='field'>
					<label htmlFor='label' className='subtitle'>
						Create a new category
					</label>
					<div className='control'>
						<input
							required
							autoFocus
							type='text'
							className='input is-regular'
							placeholder='Add text'
							onChange={(category) => {
								const copy = { ...createCategory }
								copy.label = category.target.value
								setCategory(copy)
							}}
						/>
					</div>
				</div>
				<div className='field'>
					<div className='control buttons is-centered'>
						<button
							onClick={submitCategory}
							className='button is-link is-dark'>
							Create
						</button>
					</div>
				</div>
			</fieldset>
		</form>
	)
}
