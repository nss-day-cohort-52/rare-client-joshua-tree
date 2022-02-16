import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { fetchTags, updateTag, getTag } from './TagManager.js'


export const UpdateTag = () => {
    const history = useHistory()
    const [newTag, setNewTags] = useState([])
    const [currentTag, setCurrentTag] = useState({})

    const { tagId } = useParams()

    useEffect(() => {
        getTag().then(tagTypeData => setNewTags(tagTypeData))
    }, [])


    useEffect(() => {
        getTag(tagId).then(tagData => setCurrentTag({
            id: tagData.id,
            label: tagData.label,

        }))
    }, [tagId])



    const changeTagState = (domEvent) => {
        console.log('initial', currentTag)
        const copy = { ...currentTag }
        copy[domEvent.target.name] = domEvent.target.value
        console.log('updated', copy)
        setCurrentTag(copy)

    }

    return (
        <center>

            <form className="tagForm">
                <h2 className="tagForm__title">Update Tag</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Tag Label:</label>
                        <input type="text" name="label" required autoFocus className="form-control"
                            value={currentTag.label}
                            onChange={changeTagState}
                        />
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        // TODO: Call the update function and route to the Game list
                        updateTag(currentTag).then(() => history.push('/tags'))
                    }}
                    className="btn btn-primary">Update</button>
            </form>
        </center>
    )
}