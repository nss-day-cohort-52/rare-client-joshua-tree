import React from "react"
import { Route } from "react-router-dom"
import { ShowCategories } from "./categories/Categories"
import { PostList } from "./posts/Posts"
import { PostDetails } from "./posts/PostDetails"
import { PostForm } from "./posts/CreateNewPost"
import { UsersList } from "./users/Users"
import { MyPosts } from "./posts/MyPosts"
import { UserDetails } from "./users/UserDetails"
import { ShowTags } from "./tags/Tag"
import { UpdateTag} from "./tags/UpdateTag"

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
				<PostDetails />
			</Route>
			<Route exact path='/categories'>
				{/* child */}
				<ShowCategories />
			</Route>
			<Route exact path='/userManagement'>
				<UsersList />
			</Route>
			<Route exact path='/users/:userId(\d+)'>
				<UserDetails />
			</Route>
			<Route exact path='/createNewPost'>
				<PostForm />
			</Route>
			<Route exact path='/tags'>
				<ShowTags />
			</Route>
			<Route exact path="/tags/:tagId(\d+)/update">
                < UpdateTag/>
            </Route>
		</>
	)
}
