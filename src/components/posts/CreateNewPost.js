import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { createPost, getPosts, getPostById} from "./PostManager";
import { useParams } from "react-router-dom";



// 'user', 'category', 'title', 'image_url', 'content', 'tags'


export const PostForm = () => {
    const [categories, updateCategories] = useState([])
    const [tags, setTags] = useState([])
    const history = useHistory()
    
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

    useEffect(() => {
        fetchTags()
    }, [])


    useEffect(
        () => {
            fetch(`http://localhost:8000/categories`, {
                method: "GET",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("token")}`
                }
            })
                .then(res => res.json())
                .then((data) => {
                    updateCategories(data)
                })
        }, []
    )


    const changePostState = (event) => {
        const copy = { ...post }
        copy[event.target.name] = event.target.value
        setPost(copy)
    }



    return (
        <form className="CreateNewPost">
            <h2 className="CreateNewPost__title">Add New Post</h2>
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

                <><label htmlFor="category-select"> Choose a category:</label>
                    <select name="category" id="category-select" onChange={(evt) => {
                        const copy = { ...post }
                        copy.category_id = parseInt(evt.target.value)
                        setPost(copy)
                    }} >
                        <option value="">--Please choose a category-</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                    </select></>
                    <div className="field my-5">
                    <label className="label"> Tags </label>
                    {
                        tags.map(
                            (tag) => {
                                return <div className="control my-2">
                                    <label className="checkbox has-text-weight-medium">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            name="tag"
                                            value={tag.id}
                                            key={`tag--${tag.id}`}
                                            onChange={(evt) => {
                                                const copy = { ...post }
                                                copy.tags.has(parseInt(evt.target.value))
                                                    ? copy.tags.delete(parseInt(evt.target.value))
                                                    : copy.tags.add(parseInt(evt.target.value))
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

                    const newPost = {
                        user_id: post.user_id,
                        category: post.category_id,
                        title: post.title,
                        publication_date: Date.now(),
                        image_url: post.image_url,
                        content: post.content,
                        approved: 1,
                        tags: Array.from(post.tags)
                    }

                    createPost(newPost)
                        .then(() => history.push("/posts"))
                        .then(getPosts)
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}


