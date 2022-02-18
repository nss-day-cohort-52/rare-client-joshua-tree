import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useHistory, useParams } from "react-router-dom"
import { getComments } from "./CommentManager"
import "./comments.css"

export const CommentList = () => {
	const [comments, setComments] = useState([])
}
