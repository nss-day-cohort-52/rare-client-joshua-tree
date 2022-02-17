import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createComment } from "./CommentManager"
import "./comments.css"

export const CommentForm = ({ getAllTags }) => {
	const [currentComment, setCurrentComment] = useState({
		content: "",
		author_id: 0,
		post_id: 0,
	})
	const history = useHistory()

	const editComment = (domEvent) => {
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
                            <h1 className='title'>Post a New Comment</h1>
                            <form className='commentForm'
                        </div>
                    </div>
					<div className='column is-one-fifth'></div>
				</div>
			</div>
		</>
	)
}
