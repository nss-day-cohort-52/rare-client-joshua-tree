import React, { useEffect, useState } from "react"
import { TagForm } from "./TagForm"
import {fetchTags} from "./TagManager"
import {deleteTags} from "./TagManager"


export const ShowTags = () => {

 const [tags, showTags] = useState([])

 const getAllTags = () => fetchTags().then(data => showTags(data))
  
 useEffect(() => {
     getAllTags()
 }, [])

    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>

<TagForm getAllTags={getAllTags} />

            <div className="Tags"></div>
            {
                tags.map(
                    (finishedTags) => {

                        return <center>

                            <div className="card equal-height has-text-centered"><div key={`finishedTags.id-${finishedTags.id}`}>

                                <div>{finishedTags.label}</div>

                                <button className="button is-link is-dark" onClick={() => {
                                    deleteTags(finishedTags.id).then(getAllTags);
                                }}>Delete</button>

                                <button className="button is-link is-dark" onClick={() => {
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