import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import {  updateCategory, getCategories, getCategory } from './categoryManager.js'


export const UpdateCategory = () => {
    const history = useHistory()
    const [newCategory, setNewCategory] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})

    const { categoryId } = useParams()

    useEffect(() => {
        getCategories().then(categoryTypeData => setNewCategory(categoryTypeData))
    }, [])
   
    //getting data to set state of setNewCategory

    useEffect(() => {
        getCategory(categoryId).then(Data => setCurrentCategory({
            id: Data.id,
            label: Data.label,

        }))
    }, [categoryId])

    //getting initial data to set on first render- this will change anytime categoryId changes 

    const changeCategoryState = (domEvent) => {
        const copy = { ...currentCategory }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentCategory(copy)

    } //changing state of currentCategory based on changes to dom 

    return (
        <center>

            <form className="categoryForm">
                <h2 className="categoryForm__title">Update Category</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Category Label:</label>
                        <input type="text" name="label" required autoFocus className="form-control"
                            value={currentCategory.label}
                            onChange={changeCategoryState}
                        />
                    </div>
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        // TODO: Call the update function and route to the Game list
                        updateCategory(currentCategory).then(() => history.push('/categories'))
                    }}
                    className="btn btn-primary">Update</button>
            </form>
        </center>
    )
}