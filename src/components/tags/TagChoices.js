import React, { useEffect, useState } from "react"

// passing props to Gallery.js // allows access to values in gallery form - what did user select?
export const TagChoices = ({ showTagChoice, setTChoice }) => {
	// declaring "materialChoices" that defines state
	// declaring "setMaterialChoices" that defines function that will modify state/set value of materialChoices
	// useState passes a value as argument and returnes ARRAY WHEN INVOKED

	const [TagChoices, setChoice] = useState([])

	const fetchTags = () => {
		return (
			fetch("http://localhost:8000/tags", {
				method: "GET",
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			})
				.then((res) => res.json())
				//taking json string and parsing into js
				.then((data) => {
					// data = categories converted from string to array, setting that response with showCategories
					setChoice(data)
				})
		)
	}

	useEffect(() => {
		fetchTags()
	}, [])

	return (
		<>
			{TagChoices.map((choice) => {
				return (
					<div key={`tagChoice--${choice.id}`}>{choice.label} </div>
				)

				//   returning none if id & userId do not match
			})}
		</>
	)
}
