import React from "react"
import { Route } from "react-router-dom"
import { ShowPosts } from "./posts/Posts"
import { SinglePost } from "./posts/SinglePost"
import { PostDetails } from "./posts/PostDetails"

export const ApplicationViews = () => {
	return (
		<>
			<Route exact path='/posts'>
				{/* child */}
				<ShowPosts />
			</Route>

			{/* when the url is posts, display postId- capturing after : and storing */}
			{/* postId is the key post component! */}
			<Route exact path='/posts/:postId(\d+)'>
				{/* child */}
				<PostDetails />
			</Route>
		</>
	)
}
