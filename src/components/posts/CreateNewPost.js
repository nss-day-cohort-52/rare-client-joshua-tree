import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";



function CreateNewPost() {
    const [post, updatePost] = useState({
        user_id: "",
        category_id: 5,
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: 1
    });
    //declaring user_id into a valid json string 
    //token is userId 
    const [user_id] = useState(JSON.parse(localStorage.getItem("token")))
    const history = useHistory()
    const [Category, setCategory] = useState([])


    useEffect(() => {
        CategoryRepository.getCategory()
            .then((res) => setCategory(res))
    }, [])


    const addPost = (evt) => {
        //stops the form from refreshing the page
        evt.preventDefault()

        const copy = { ...post }
        copy.user_id = user_id
        copy.category_id = 5
        copy.approved = 1
        updatePost(copy)
        console.log(copy)
        const fetchOption = {
            method: "POST",
            headers: {
                //lets the api know the information its about to get is json
                "Content-Type": "application/json",
            },
            //takes the data an converts it to a string
            body: JSON.stringify(copy)
        }

        return fetch("http://localhost:8088/posts", fetchOption)
            // after the fetch is complete 
            .then(() => {
                //forces a redirect to posts
                history.push("/Posts")
            })

    }

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
                        copy.category = parseInt(evt.target.value)
                        updatePost(copy)
                    }} >
                        <option value="">--Please choose a category-</option>
                        {Category.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.category}</option>
                        ))}
                    </select></>


            </fieldset>
            <button className="btn btn-primary" onClick={addPost}>
                Add Post
            </button>
        </form>
    )
}

export default CreateNewPost