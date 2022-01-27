import React, { useEffect, useState, useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { fetchCategories, addCategory } from "./categoryManager"

export const ShowCategories = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returnes ARRAY WHEN INVOKED

	const [categories, showCategories] = useState([])
	const [newCategory, setNewCategory] = useState({})
	const label = useRef()
	const history = useHistory()

	useEffect(() => {
		fetchCategories().then((data) => {
			showCategories(data)
		}),
			[newCategory]
	})

	const deleteCategory = (id) => {
		fetch(`http://localhost:8088/categories/${id}`, {
			method: "DELETE",
		})
			// after delete, GET all of the categories again to render the new state
			.then(() => {
				fetchCategories()
			})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const newCategory = {
			label: label.current.value,
		}

		addCategory(newCategory).then(() => {
			history.push("/categories")
		})
	}

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
					<div className='box'>
						<h2 className='subtitle'>Create a new category</h2>
						<form
							className='column is-one-third'
							onSubmit={handleSubmit}>
							<div className='field'>
								<div className='control'>
									<input
										className='input is-regular'
										type='text'
										ref={label}
										placeholder='Add text'
									/>
								</div>
							</div>
							<div className='field'>
								<div className='control'>
									<button
										className='button is-link is-dark'
										type='submit'>
										Create
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
