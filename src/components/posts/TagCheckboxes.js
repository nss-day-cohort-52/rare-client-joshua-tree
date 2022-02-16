import React, { useEffect, useState } from "react"

// allows access to values in gallery form - what did user select
export const TagChoiceForm = ({ tChoice, setTChoice }) => {
	// declaring materials that defines state
	// useState passes a value as argument and returns ARRAY WHEN INVOKED
	const [tags, setTagChoice] = useState([])

	useEffect(() => {
		fetch("http://localhost:8000/tags")
			// fetching data from the API and parsing into application state
			.then((res) => res.json())
			.then((tagData) => {
				setTagChoice(tagData)
			})
	}, [])

	return (
		//  <> Fragment - putting all return elements into one JXS element
		<>
			<div className='tagOptions'>
				<div className='pleaseCheck'>Check A Tag!</div>

				{
					// iterate tag array and convert to objects to JXS (converstion = .map())
					tags.map(
						// // parameter to capture each indivual tagOption as iterates
						(tagOption) => {
							// // uniquely identify <h2> with a key, use .id since unique identifier
							return (
								<div className='tagList'>
									{" "}
									<div key={`tagOption--${tagOption.id}`}>
										{tagOption.label}
									</div>
									<input
										type='checkbox'
										// Has that id already been chosen? If so, delete if not add - set choice
										onChange={(evt) => {
											const copy = { ...tChoice }
											copy.chosenTags.has(tagOption.id)
												? copy.chosenTags.delete(
														tagOption.id
												  )
												: copy.chosenTags.add(
														tagOption.id
												  )
											setTChoice(copy)
										}}
										type='checkbox'
									/>
								</div>
							)
						}
					)
				}
			</div>
		</>
	)
}
