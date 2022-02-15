import React, { useEffect, useState } from "react"
import { CategoryForm } from "./CategoryForm"

export const ShowCategories = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returnes ARRAY WHEN INVOKED

	const [categories, showCategories] = useState([])
	const [createCategory, setCategory] = useState({
		label: "",
	})

	useEffect(() => {
		fetchCategories()
	}, [])

	const fetchCategories = () => {
		return (
			fetch("http://localhost:8000/categories",{
				method: "GET",
				headers: {
					"Authorization": `Token ${localStorage.getItem("token")}`
				  }
				})
				.then((res) => res.json())
				//taking json string and parsing into js
				.then((data) => {
					// data = categories converted from string to array, setting that response with showCategories
					showCategories(data)
				})
		)
	}
	

	const deleteCategory = (id) => {
		fetch(`http://localhost:8000/categories/${id}`, {
			method: "DELETE",
				headers: {
					"Authorization": `Token ${localStorage.getItem("token")}`
				  }
				})
			// after delete, GET all of the categories again to render the new state
			.then(() => {
				fetchCategories()
			})
	}



	useEffect(() => {
		fetchCategories()
	}, [])

	return (
		//  <> Fragment - putting all return elements into one JXS element
		<>
			<div className='container'>
				<div className='title'>Categories</div>
				<div className='columns'>
					<div className='column is-two-thirds'>
						{categories.map((finishedCategories) => {
							return (
								<div
									className='card equal-height has-text-centered'
									key={`finishedCategories-${finishedCategories.id}`}>
									<div className='card-content'>
										<div className='subtitle'>
											{finishedCategories.label}
										</div>
										<button
											className='button'
											onClick={() => {
												deleteCategory(
													finishedCategories.id
												)
											}}>
											Delete
										</button>
										<button
											className='button'
											onClick={() => {
												editCategory(booking.id)
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
							<CategoryForm fetchCategories={fetchCategories} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
