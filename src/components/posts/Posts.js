import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getCategories, getPosts, get_post_category } from "./PostManager"
import { TagChoices } from "../tags/TagChoices"
import "./posts.css"

export const PostList = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returns ARRAY WHEN INVOKED

	const [posts, setPosts] = useState([])
	const [category, setCategories] = useState([])
	const [categoryChoice, setCategoryChoice ] = useState("")
    const { categoryId } = useParams() // Variable storing the route parameter
	const [showTagChoice, setTagChoice] = useState([])

	

	


	useEffect(() => {
		getPosts().then(data => setPosts(data))
		getCategories().then(data => setCategories(data))
	}, [])
   


    useEffect(() => {
		if (categoryChoice)
		get_post_category(categoryChoice).then((posts) => {
		setPosts(posts)
		})
	}, [categoryChoice])


		

	return (
		//  <> Fragment - putting all return elements into one JSX element
		<>
			<div className='container'>
				<div className='column'>
					<div className='title'>Posts</div>

                <fieldset>
                    
                          <label htmlFor="category-select"> Choose a category:</label>
                            <select className="select" id="category-select" onChange={(evt) => {
								setCategoryChoice(evt.target.value)
                            	}} > 
                                <option value="">--Please choose a category-</option>
                                {category.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
									
                                ))}
                            </select>
                            
                </fieldset>





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
										<div>
										<TagChoices tagChoices={showTagChoice}
                                        setTagChoices={setTagChoice}/>

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
