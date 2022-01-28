import React, { useEffect, useState } from "react"

import { TagForm } from "./TagForm"

export const ShowTags = () => {
	const [tags, showTags] = useState([])

	const fetchTags = () => {
		return (
			fetch("http://localhost:8088/tags")
				// after fetching data, invoke function
				.then((res) => res.json())
				//taking json string and parsing into js
				.then((data) => {
					// data = categories converted from string to array, setting that response with showCategories
					showTags(data)
				})
		)
	}

	const deleteTags = (id) => {
		fetch(`http://localhost:8088/tags/${id}`, {
			method: "DELETE",
		})
			// after delete, GET all of the categories again to render the new state
			.then(() => {
				fetchTags()
			})
	}

	// *LISTENING FOR STATE CHANGES AND REACTS*
	// takes a function and array as arguments & runs code when state changes (event listener)
	// when the state changes, fetch the categories
	useEffect(() => {
		fetchTags()
	}, [])

	return (
		//  <> Fragment - putting all return elements into one JXS element
		<>
			<div className='container'>
				<div className='title'>Categories</div>
				<div className='columns'>
					<div className='column is-two-thirds'>
						{tags.map((finishedTags) => {
							return (
								<div
									className='card equal-height has-text-centered'
									key={`tags--${finishedTags.id}`}>
									<div className='card-content'>
										<div className='subtitle'>
											{finishedTags.label}
										</div>
										<button
											className='button'
											onClick={() => {
												deleteTags(finishedTags.id)
											}}>
											Delete
										</button>
										<button
											className='button'
											onClick={() => {
												editTags(tags.id)
											}}>
											Edit
										</button>
									</div>
								</div>
							)
						})}
					</div>
					<div className='column is-one-third'>
						<div className='box'>
							<TagForm fetchTags={fetchTags} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
