import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { getCategories } from "../categories/categoryManager"
import { getPostById, getPosts, get_post_category, updatePost } from "./PostManager"


export const UpdatePost = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [categoryChoice, setCategoryChoice] = useState("")
    const [tags, setTags] = useState([])
    const { postId } = useParams()
    const [post, setPost] = useState({ // Declaring State variable
        user_id: "",
        category_id: 1,
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: 1,
        tags: new Set()
    })

    const fetchTags = () => {
        return fetch("http://localhost:8000/tags", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
            .then((res) => res.json())
            //taking json string and parsing into js
            .then((data) => {
                // data = categories converted from string to array, setting that response with showCategories
                setTags(data)
            })

    }


    useEffect(() => {
        fetchTags()
    }, [])

    useEffect(() => {
		getCategories().then((data) => setCategories(data))
	}, [])

	useEffect(() => {
		if (categoryChoice)
			get_post_category(categoryChoice).then((post) => {
				setPost(post)
			})
	}, [categoryChoice])
    //getting data to set state of setNewCategory

    useEffect(() => {
        getPostById(postId).then(data => setPost({
            user_id: data.user_id,
            category: data.category_id,
            title: data.title,
            publication_date: data.publication_date,
            image_url: data.image_url,
            content: data.content,
            approved: data.approved,
            tags: Array.from(data.tags)


        }))
    }, [])

    //getting initial data to set on first render- this will change anytime categoryId changes 

    const changePostState = (domEvent) => {
        const copy = { ...post }
        copy[domEvent.target.name] = domEvent.target.value
        setPost(copy)

    } //changing state of currentCategory based on changes to dom 

    return (
        <form className="CreateNewPost">
            <h2 className="CreateNewPost__title">Update your Post</h2>
            <fieldset className="fieldset">
                <input type="url" name="image_url" placeholder="URL of img"
                    value={post.image_url}
                    onChange={changePostState}
                />
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Brief description about the post"
                        value={post.title}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <input
                        required autoFocus
                        type="text"
                        name="content"
                        className="form-control"
                        placeholder="Content"
                        value={post.content}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            <fieldset>

                <><label htmlFor="category-select"> Update a category:</label>
                    <select name="category" id="category-select" onChange={(evt) => {
                        const copy = { ...post }
                        copy.category = parseInt(evt.target.value)
                        setPost(copy)
                    }} >
                        <option value="">--Please choose a category-</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                    </select></>
                    <div className="field">
                    <label className="label"> Tags </label>
                    {
                        tags.map(
                            (tag) => {
                                return <div className="control">
                                    <label className="checkbox has-text-weight-small">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            name="tag"
                                            value={tag.id}
                                            key={`tag--${tag.id}`}
                                            onChange={(evt) => {
                                                const copy = { ...post }
                                                
                                                setPost(copy)
                                            }} />
                                        {tag.label}
                                    </label>
                                </div>
                            }
                        )
                    }
                </div>

            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()


                    updatePost(postId, post)
                        .then(() => history.push("/posts"))
                        .then(getPosts)
                }}
                className="btn btn-primary">Update</button>
        </form>
    )
}