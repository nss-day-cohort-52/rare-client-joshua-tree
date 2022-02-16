import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./tags.css"

export const TagForm = ({ fetchTags }) => {
	const [createTag, setTag] = useState({
		label: "",
	})

	const submitTag = (evt) => {
		// preventing default behavior of submitting tag
		evt.preventDefault()
		const newTag = {
			// using this object from state to send to API
			label: createTag.label,
		}

		const fetchOption = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// passing through newBooking object for POST
			body: JSON.stringify(newTag),
		}
		// returning updated object and POSTING to API with the fetchOption
		return fetch("http://localhost:8000/tags", fetchOption)
			.then(fetchTags)
			.then(setTag(newTag))
	}

	return (
		<form className='TagForm'>
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
							placeholder='Create Your New Tag'
							// copying existing state with spread operator
							// brand new object to modify state
							// updated when user interacts
							onChange={(evt) => {
								const copy = { ...createTag }
								copy.label = evt.target.value
								setTag(copy)
							}}
						/>
					</div>
				</div>
				<div className='field'>
					<div className='control buttons is-centered'>
						<button
							onClick={submitTag}
							className='button is-link is-dark'>
							Create Tag!
						</button>
					</div>
				</div>
			</fieldset>
		</form>
	)
}
