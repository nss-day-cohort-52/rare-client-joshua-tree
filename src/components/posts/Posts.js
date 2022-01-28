import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "./PostManager"
import "./posts.css"

export const ShowPosts = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returnes ARRAY WHEN INVOKED

	const [posts, showPosts] = useState([])

	useEffect(
		// *LISTENING FOR STATE CHANGES AND REACTS*
		// takes a function and array as arguments & runs code when state changes (event listener)
		() => {
			// Query string parameter
			fetch("http://localhost:8088/posts")
				// fetching data from the API and parsing into application state
				.then((res) => res.json())

				// you have final array of works & worksMaterials defined in line 15
				.then((submittedPost) => {
					showPosts(submittedPost)
				})
		},
		// leave DEPENDANCY ARRAY empty, or infinite loop
		[]
	)

	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>
			<div className='container'>
				<div className='column'>
					<div className='title'>Posts</div>

					{posts.map((finishedPost) => {
						return (
							<div
								className='card equal-height has-text-centered'
								key={`finishedPost-${finishedPost.id}`}>
								<div className='card-content'>
									<div className='card-image has-text-centered'>
										<img
											src={`${finishedPost.image_url}`}
											alt=''
											className='img image is-rounded is-horizontal-center'
										/>
									</div>
									<div className='card-content'>
										<Link
											to={`/posts/${finishedPost.id}`}
											className='title is-link is-dark'>
											{finishedPost.title}
										</Link>

										<div>
											{finishedPost.user?.first_name}{" "}
											{finishedPost.user?.last_name}
										</div>
										<div>
											{finishedPost.category?.label}
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
