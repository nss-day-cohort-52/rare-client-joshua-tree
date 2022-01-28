import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostById } from "./PostManager"

export const SinglePost = () => {
	// declaring "bookings" that defines state
	// declaring "updateBooking" that defines function that will modify state/set value of bookings
	// useState passes a value as argument and returns ARRAY WHEN INVOKED
	const [singlePost, updateSinglePost] = useState([])
	const { postId } = useParams() // Variable storing the route parameter

	// *LISTENING FOR STATE CHANGES AND REACTS*
	// takes a function and array as arguments & runs code when state changes (event listener)
	// Fetch the individual booking when the parameter value changes
	useEffect(
		() => {
			getPostById(postId)
				// setting booking state
				.then(updateSinglePost)
		},
		[postId] // Above function runs when the value of bookingId changes
	)

	return (
		<>
			<center>
				<div className='singlePost'>
					<section className='singlePost'>
						<div className='singlePost__title'>
							{singlePost.title}
						</div>
						<div className='singlePost__authorName'>
							{singlePost.user_id}
						</div>
						<div className='singlePost__category'>
							{singlePost.category_id}
						</div>
						<div className='singlePost__publicationDate'>
							{singlePost.publication_date}
						</div>
						<div className='singlePost__content'>
							{singlePost.content}
						</div>
					</section>
				</div>
			</center>
		</>
	)
}
