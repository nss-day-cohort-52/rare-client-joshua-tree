import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createComment } from "./CommentManager"
import "./comments.css"

export const CommentForm = ({ getAllTags }) => {
	const { postId } = useParams()

	const [currentComment, setCurrentComment] = useState({
		content: "",
		subject: "",
		post_id: postId,
	})
	const history = useHistory()

	const handleAddComment = (domEvent) => {
		const copy = { ...currentComment }
		copy[domEvent.target.name] = domEvent.target.value
		setCurrentComment(copy)
	}

	return (
		<>
			<div className='container'>
				<div className='columns'>
					<div className='column is-one-fifth'></div>
					<div className='column is-three-fifths'>
						<div className='card-content'>
							n<h1 className='title'>Post a New Comment</h1>
							<form className='commentForm'>
								<fieldset className='field'>
									<label className='label'>Comment</label>
									<div className='control'>
										<textarea
											className='textarea'
											value={setCurrentComment.content}
											onChange={handleAddComment}
											placeholder='Add your comment'></textarea>
									</div>
								</fieldset>
								<div className='field'>
									<div className='control'>
										<button
											className='button is-link is-dark'
											type='submit'
											onClick={(evt) => {
												evt.preventDefault()
												const newComment = {
													subject:
														currentComment.subject,
													content:
														currentComment.content,
													post_id:
														currentComment.post_id,
												}
												createComment(newComment).then(
													() =>
														history.push(
															"/PostDetails"
														)
												)
											}}>
											Post Comment
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className='column is-one-fifth'></div>
				</div>
			</div>
		</>
	)
}
