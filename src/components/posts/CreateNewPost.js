import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { createPost, getPosts } from "./PostManager";
import { TagChoiceForm } from "./TagCheckboxes"


// 'user', 'category', 'title', 'image_url', 'content', 'tags'


export const PostForm = () => {
    const [categories, updateCategories] = useState([])
    const [tags, setTags] = useState([])
    const history = useHistory()
    const [tChoice, setTChoice] = useState({
        // capturing the chosen Ids in new Set()
        chosenTags: new Set()
    })
    const [post, updatePost] = useState({ // Declaring State variable
        title: "",
        image_url: "",
        content: "",
        tags: []
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

    // const addPost = (evt) => {
    //     //stops the form from refreshing the page
    //     evt.preventDefault()

    //     const copy = { ...post }
    //     copy.approved = 1
    //     updatePost(copy)
    //     const fetchOption = {
    //         method: "POST",
    //         headers: {
    //             //lets the api know the information its about to get is json
    //             "Content-Type": "application/json",
    //             "Authorization": `Token ${localStorage.getItem("token")}`
    //         },
    //         //takes the data an converts it to a string
    //         body: JSON.stringify(copy)
    //     }

    //     return fetch(`http://localhost:8000/posts`, {
    //         method: "GET",
    //         headers: {
    //             "Authorization": `Token ${localStorage.getItem("token")}`
    //         }
    //     })
    //         // after the fetch is complete 
    //         .then(() => {
    //             //forces a redirect to posts
    //             history.push("/Posts")
    //         })

    //     }

    
    // const changePost = (event) => {
    //     const copy = {...currentTags}
    //     copy[event.target.name] = event.target.value
    //     updatePost(copy)
    // }

    return (
        <form className="CreateNewPost">
            <h2 className="CreateNewPost__title">Add New Post</h2>
            <fieldset className="fieldset">
                <input type="url" name="url" placeholder="URL of img"
                    onChange={
                        (evt) => {
                            const copy = { ...post }
                            copy.image_url = evt.target.value
                            updatePost(copy)
                        }
                    }
                />
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description about the post"
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.title = evt.target.value
                                updatePost(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Content:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Content"
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.content = evt.target.value
                                updatePost(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>

                <><label htmlFor="category-select"> Choose a category:</label>
                    <select name="category" id="category-select" onChange={(evt) => {
                        const copy = { ...post }
                        copy.category_id = parseInt(evt.target.value)
                        updatePost(copy)
                    }} >
                        <option value="">--Please choose a category-</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                    </select></>

                <TagChoiceForm tChoice={tChoice} setTChoice={setTChoice} />
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const post = {
                        title: post.title,
                        image_url: post.image_url,
                        content: post.content,
                        tags: post.tags
                    }

                    // Send POST request to your API
                    createPost(post)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary" onChange={createPost}>
                Add Post
            </button>
        </form>
    )
}