import React, { useEffect, useState } from "react"
import moment from "moment"
import { useParams } from "react-router-dom"
import { getPostById } from "./PostManager"

export const PostDetails = () => {
	// declaring "bookings" that defines state
	// declaring "updateBooking" that defines function that will modify state/set value of bookings
	// useState passes a value as argument and returns ARRAY WHEN INVOKED
	const [postDetails, setPostDetails] = useState([])
	const { postId } = useParams() // Variable storing the route parameter

	// *LISTENING FOR STATE CHANGES AND REACTS*
	// takes a function and array as arguments & runs code when state changes (event listener)
	// Fetch the individual booking when the parameter value changes
	useEffect(
		() => {
			getPostById(postId)
				// setting booking state
				.then(setPostDetails)
		},
		[postId] // Above function runs when the value of bookingId changes
	)

	return (
		<>
			<div className='container'>
				<div className='columns'>
					<div className='column is-one-fifth'></div>
					<div className='column is three-fifths'>
						<div
							className='card equal-height has-text-centered'
							key={`pastDetails-${postDetails.id}`}>
							<div className='card-content'>
								<div>
									<h1 className='title'>
										{postDetails.title}
									</h1>
									<h4 className='has-text-right'>
										{postDetails.category?.label}
									</h4>
								</div>
								<div className='card-image has-text-centered'>
									<img
										src={`${postDetails.image_url}`}
										alt=''
										className='img image is-rounded is-horizontal-center'
									/>
								</div>
								<div className='columns post_title_line'>
									<div className='column is-one-quarter has-text-left'>
										<p>
											By {postDetails.user?.user.username}
										</p>
										<p className='postDetails__publicationDate'>
											{moment(
												`${postDetails.publication_date}`
											).format("MM/DD/YYYY")}
										</p>
									</div>
									<div className='column is-one-quarter'>
										View Comments Button Here
									</div>
									<div className='column is-one-half has-text-right'>
										LIKES EMOTICONS HERE
									</div>
								</div>
								<div className='postDetails__content has-text-left'>
									{postDetails.content}
								</div>
							</div>
						</div>
					</div>
					<div className='column is-one-fifth post--tags'>
						<div>TAGS GO HERE</div>
					</div>
				</div>
			</div>
		</>
	)
}
