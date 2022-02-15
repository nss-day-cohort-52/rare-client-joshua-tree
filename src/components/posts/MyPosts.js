import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getThisUser } from "../users/UserManager"
import { getPostsByCurrentUser } from "./PostManager"
import "./posts.css"

export const MyPosts = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returns ARRAY WHEN INVOKED

	const [currentUser, setCurrentUser] = useState({})
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const token = localStorage.getItem("token")
		getThisUser(token).then((user) => {
			setCurrentUser(user)
		})
	}, [])

	useEffect(() => {
		// Query string parameter
		const userId = currentUser.id
		getPostsByCurrentUser(userId).then((userPosts) => {
			setPosts(userPosts)
		})
	}, [currentUser])


	const fetchPosts = () => {
		return fetch("http://localhost:8000/posts")
			// after fetching data, invoke function 
			.then(res => res.json())
			//taking json string and parsing into js 
			.then((data) => {
				// data = categories converted from string to array, setting that response with showCategories
				setPosts(data)

			})
	}


	const deletePost = (id) => {
		fetch(`http://localhost:8000/posts/${id}`, {
			method: "DELETE"
		})
			// after delete, GET all of the categories again to render the new state 
			.then(
				() => { fetchPosts() }
			)
	}

	// *LISTENING FOR STATE CHANGES AND REACTS*
	// takes a function and array as arguments & runs code when state changes (event listener)
	// when the state changes, fetch the categories
	useEffect(() => { fetchPosts() }, [])


	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>
			<div className='container'>
				<div className='column'>
					<div className='title'>Posts</div>

					{posts.map((post) => {
						return (
							<div
								className='card equal-height has-text-centered'
								key={`post--${post.id}`}>
								<div className='card-content'>
									<div className='card-image has-text-centered'>
										<img
											src={`${post.image_url}`}
											alt=''
											className='img image is-rounded is-horizontal-center'
										/>
									</div>
									<div className='card-content'>
										<Link
											to={`/posts/${post.id}`}
											className='title'>
											{post.title}
										</Link>

										<div>
											{post.user?.first_name}{" "}
											{post.user?.last_name}
										</div>
										<div>{post.category?.label}</div>
										<div>
											<div>

												<button className="button" onClick={() => {
													let text;
													if (confirm("Are you sure you'd like to delete?") == true) {
													 
													deletePost(post.id);} 
													else { text = "You canceled!" }
													
												}}>Delete</button>
											</div>

											<button className='button'>
												Edit
											</button>
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
