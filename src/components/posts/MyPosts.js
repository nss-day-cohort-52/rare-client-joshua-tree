import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getThisUser } from "../users/UserManager"
import { getPostsByCurrentUser } from "./PostManager"
import "./posts.css"

export const MyPosts = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returnes ARRAY WHEN INVOKED

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
											<button className='button'>
												Delete
											</button>

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
