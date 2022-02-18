import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsByPostId } from "./CommentManager"
import "./comments.css"

export const CommentList = () => {
	const [comments, setComments] = useState([])
	const { postId } = useParams()

	useEffect(() => {
		getCommentsByPostId(postId).then(setComments)
	}, [])

	return (
		<>
			{comments.map((commentObj) => {
				return (
					<div
						className='card equal-height'
						key={`comment--${commentObj.id}`}>
						<div className='columns card-content'>
							<div className='column is-three-quarters'>
								<h4 className='subtitle'>
									{commentObj.subject}
								</h4>
							</div>
							<div className='column is-one-quarter has-text-right'>
								<p>{commentObj.author.user.username}</p>
							</div>
						</div>
						<div className='card-content'>{commentObj.content}</div>
					</div>
				)
			})}
		</>
	)
}
