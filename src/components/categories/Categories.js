import React, { useEffect, useState } from "react"
import { CategoryForm } from "./CategoryForm"
import {getCategories, createCategory, deleteCategory} from "./categoryManager"

export const ShowCategories = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returns ARRAY WHEN INVOKED

	const [categories, setCategories] = useState([])
	// const [createCategory, setCategory] = useState({
	// 	label: "",
	// })

	const getAllCategories = () => getCategories().then(data => setCategories(data))

  
	useEffect(() => {
		getCategories().then(data => setCategories(data))
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
												deleteCategory(finishedCategories.id).then(getAllCategories)
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
							<CategoryForm getAllCategories={categories} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
