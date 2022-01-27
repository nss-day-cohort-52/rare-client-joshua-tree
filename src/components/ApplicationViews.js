import React from "react"
import { Route } from "react-router-dom"
import { ShowCategories } from "./categorymanagement/categoryManagement"
import { ShowPosts } from "./posts/Posts"
import { PostDetails } from "./posts/PostDetails"
import { UsersList} from "./usermanagement/UserManagement"
import { MyPosts } from "./posts/MyPosts"


export const ApplicationViews = () => {
	return (
		<>
			<Route exact path='/posts'>
				{/* child */}
				<ShowPosts />
			</Route>
			<Route exact path='/MyPosts'>
				<MyPosts />
			</Route>

			{/* when the url is posts, display postId- capturing after : and storing */}
			{/* postId is the key post component! */}
			<Route exact path='/posts/:postId(\d+)'>
				{/* child */}
				<PostDetails />
			</Route>
			<Route exact path='/categoryManagement'>
				{/* child */}
				<ShowCategories />
			</Route>
			<Route exact path='/userManagement'>
				{/* child */}
				<UsersList />
			</Route>
		</>
	)
}
