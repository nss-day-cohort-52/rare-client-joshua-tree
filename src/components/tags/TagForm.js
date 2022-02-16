import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createTag, fetchTags } from "./TagManager"

import "./tags.css"

export const TagForm = ({getAllTags}) => {
	const history = useHistory()
	const [tags, setTag] = useState({})

	const [currentTags, setCurrentTags] = useState({
		label: ""
	})



	const changeTag = (domEvent) => {
		const copy = { ...currentTags }
		// const copy = Object.assign({}, currentGame)
		copy[domEvent.target.name] = domEvent.target.value

		setCurrentTags(copy)
	}

	return (
		<center>

			<form className="tagForm">
				<h2 className="tagForm__title">Create New Tag</h2>
				<fieldset>
					<div className="form-group">
						<label htmlFor="label">Tag Label:</label>
						<input type="text" name="label" required autoFocus className="form-control"
							value={currentTags.label}
							onChange={changeTag}
						/>
					</div>
				</fieldset>
				<button type="submit"
					onClick={evt => {
						// Prevent form from being submitted
						evt.preventDefault()

						const tag = {
							label: currentTags.label
						}

						// Send POST request to your API
						createTag(tag)
							.then(() => history.push("/tags"))
							.then(getAllTags)
					}}
					className="button is-link is-dark">Create</button>
			</form>
		</center>
	)
}
