import React, { useEffect, useState } from "react"
import moment from "moment"
import { useParams } from "react-router-dom"
import { getPostById } from "./PostManager"

export const PostDetails = () => {
	// declaring "bookings" that defines state
	// declaring "updateBooking" that defines function that will modify state/set value of bookings
	// useState passes a value as argument and returns ARRAY WHEN INVOKED
	const [postDetails, updatePostDetails] = useState([])
	const { postId } = useParams() // Variable storing the route parameter

	// *LISTENING FOR STATE CHANGES AND REACTS*
	// takes a function and array as arguments & runs code when state changes (event listener)
	// Fetch the individual booking when the parameter value changes
	useEffect(
		() => {
			getPostById(postId)
				// setting booking state
				.then(updatePostDetails)
		},
		[postId] // Above function runs when the value of bookingId changes
	)

	return (
		<>
			<div className='container'>
				<div className='column'>
					<div
						className='card equal-height has-text-centered'
						key={`pastDetails-${postDetails.id}`}>
						<div className='card-content'>
							<div className='card-image has-text-centered'>
								<img
									src={`${postDetails.image_url}`}
									alt=''
									className='img image is-rounded is-horizontal-center'
								/>
							</div>
							<div className='card-content'>
								<div className='title'>{postDetails.title}</div>
								<div className='subtitle'>
									{postDetails.user?.first_name}{" "}
									{postDetails.user?.last_name}
								</div>
								<div>{postDetails.category?.label}</div>
								<div className='postDetails__publicationDate'>
									{moment(
										`${postDetails.publication_date}`
									).format("MM/DD/YYYY")}
								</div>
								<div className='postDetails__content has-text-left'>
									{postDetails.content}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
