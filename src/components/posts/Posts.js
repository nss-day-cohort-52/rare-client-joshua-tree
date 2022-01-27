import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "./PostManager"
import "./posts.css"

export const ShowPosts = () => {
	// declaring "works" that defines state
	// declaring "showWorks" that defines function that will modify state/set value of works
	// useState passes a value as argument and returnes ARRAY WHEN INVOKED

	const [posts, showPosts] = useState([])



    const fetchPosts = () => {
        return fetch("http://localhost:8088/posts")
        // after fetching data, invoke function 
           .then(res => res.json())
              //taking json string and parsing into js 
            .then((data) => {
                 // data = categories converted from string to array, setting that response with showCategories
                showPosts(data)

            })
    }


    const deletePost = (id) => {
        fetch(`http://localhost:8088/posts/${id}`, {
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
											className='title'>
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
                                    
                                        <button className="button" onClick={() => {
                                            deletePost(finishedPost.id);
                                        }}>Delete</button>
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