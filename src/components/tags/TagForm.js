import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./tags.css"



export const TagForm = ({fetchTags}) => {

    const [createTag, setTag] = useState({
        label: ""
    });



    const submitTag = (evt) => {
        // preventing default behavior of submitting tag
        evt.preventDefault()
        const newTag = {
            // using this object from state to send to API
            label: createTag.label


        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // passing through newBooking object for POST 
            body: JSON.stringify(newTag)
        }
        // returning updated object and POSTING to API with the fetchOption
        return fetch("http://localhost:8088/tags", fetchOption)
            .then(fetchTags)
            .then(setTag(newTag))
    }

    


    return (
        <center><form className="TagForm">
            <h2 className="tagForm__title"></h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label"></label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Create Your New Tag"
                        // copying existing state with spread operator
                        // brand new object to modify state 
                        // updated when user interacts 
                        onChange={
                            (evt) => {

                                const copy = { ...createTag }
                                copy.label = evt.target.value
                                setTag(copy)

                            }
                        }

                    />

                </div>
            </fieldset>
            <button onClick={submitTag} className="button">

                Create Tag!
            </button>
        </form>
        </center>
    )
}