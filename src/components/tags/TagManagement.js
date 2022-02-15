import React, { useEffect, useState } from "react"
import { TagForm } from "./TagForm"

export const ShowTags = () => {
 const [tags, showTags] = useState([])


    const fetchTags = () => {
        return fetch(`http://localhost:8000/tags`, {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`,
            },
        }).then(res => res.json())
    }



    const deleteTags = (tagId) => {
        fetch(`http://localhost:8000/tags/${tagId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`,
            },
        })
            // after delete, GET all of the categories again to render the new state 
            .then(
                () => { fetchTags() }
            )
    }

    // *LISTENING FOR STATE CHANGES AND REACTS*
    // takes a function and array as arguments & runs code when state changes (event listener)
    // when the state changes, fetch the categories
    const getAllTags = () => fetchTags().then(data => showTags(data))
    useEffect(() => { getAllTags() }, [])


    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>


            <TagForm fetchTags={fetchTags} />
            <div className="Tags"></div>
            {
                tags.map(
                    (finishedTags) => {

                        return <center>

                            <div className="card equal-height has-text-centered"><div key={`finishedTags.id-${finishedTags.id}`}>

                                <div>{finishedTags.label}</div>

                                <button className="btn" onClick={() => {
                                      deleteTags(finishedTags.id).then(getAllTags);
                                }}>Delete</button>

                                <button className="btn" onClick={() => {
                                    editTags(tags.id)
                                }}>Edit</button>


                            </div>

                            </div>

                        </center>



                    }
                )


            }


        </>
    )
}