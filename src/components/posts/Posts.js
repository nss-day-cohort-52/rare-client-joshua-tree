import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ShowPosts = () => {

    // declaring "works" that defines state
    // declaring "showWorks" that defines function that will modify state/set value of works
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED


    const [posts, showPosts] = useState([])




    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/posts")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of works & worksMaterials defined in line 15
                .then(
                    (submittedPost) => {
                        showPosts(submittedPost)
                    }
                )
        },
        // leave DEPENDANCY ARRAY empty, or infinite loop
        []
    )


    const deletePost = (id) => {
        fetch(`http://localhost:8088/posts/${id}`, {
            method: "DELETE"
        })
        // after delete, GET all of the categories again to render the new state 
        .then(
            () => { fetchCategories() }
            )
        }
        
        // *LISTENING FOR STATE CHANGES AND REACTS*
         // takes a function and array as arguments & runs code when state changes (event listener)
        // when the state changes, fetch the categories
        useEffect(() => { fetchCategories() }, []) 




    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>



            <center> <div className="postTitle">POSTS</div> </center>
            {
                posts.map(
                    (finishedPost) => {

                        
 <center>

                            <div className="post"><div key={`finishedPost-${finishedPost.id}`}>

                            <Link to={`/posts/${finishedPost.id}`}>VIEW POST DETAILS</Link> 

                            <div><img className ="PostPhoto" src={finishedPost.image_url} /></div>

                                <div>{finishedPost.title}</div>
                                <div>{finishedPost.content}</div>
                                <div>{finishedPost.publication_date}</div>
                                <div>{finishedPost.user_id}</div>
                                <div>{finishedPost.category_id}</div> 





                            </div>



                            </div>

                        </center>

            return parseInt(localStorage.getItem("token")) === posts.userId
                                ?

                                <button className="button" onClick={() => {
                                    deletePost(posts.id)
                                }}>Delete Post</button>



                                :<div></div>

                    }
                )


            }


        </>
    )
}