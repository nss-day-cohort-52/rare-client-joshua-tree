import React, { useState } from "react"
import "./category.css"

export const CategoryForm = ({ fetchCategories }) => {
	const [createCategory, setCategory] = useState({
		label: "",
	})

	const submitCategory = (evt) => {
		evt.preventDefault()
		const newCategory = {
			label: createCategory.label,
		}

		const fetchOption = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// passing through newBooking object for POST
			body: JSON.stringify(newCategory),
		}
		// returning updated object and POSTING to API with the fetchOption
		return fetch("http://localhost:8088/categories", fetchOption)
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
							onChange={(evt) => {
								const copy = { ...createCategory }
								copy.label = evt.target.value
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
