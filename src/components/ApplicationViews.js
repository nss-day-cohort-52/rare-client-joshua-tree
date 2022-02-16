import React from "react"
import { Route } from "react-router-dom"
import { ShowCategories } from "./categories/Categories"
import { PostList} from "./posts/Posts"
import { PostDetails } from "./posts/PostDetails"
import CreateNewPost from "./posts/CreateNewPost"
import { UsersList } from "./users/Users"
import { MyPosts } from "./posts/MyPosts"
import { UserDetails } from "./users/UserDetails"
import { ShowTags } from "./tags/Tag"

export const ApplicationViews = () => {
	return (
		<>
			<Route exact path='/posts'>
				{/* child */}
				<PostList />
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
			<Route exact path='/categories'>
				{/* child */}
				<ShowCategories />
			</Route>
			<Route exact path='/userManagement'>
				{/* child */}
				<UsersList />
			</Route>
			<Route exact path='/users/:userId(\d+)'>
				{/* child */}
				<UserDetails />
			</Route>
			<Route exact path='/createNewPost'>
				{/* child */}
				<CreateNewPost />
			</Route>
			<Route exact path='/tags'>
				{/* child */}
				<ShowTags />
			</Route>
		</>
	)
}
