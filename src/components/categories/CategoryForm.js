import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createCategory, getCategories } from './categoryManager.js'



//Below using props which is importing the getAllCategories function to get category data
export const CategoryForm = ({getAllCategories}) => {
  const history = useHistory()





  const [currentCategory, setCurrentCategory] = useState({
    label: ""
  })



  const changeCategoryState = (domEvent) => {
    const copy = {...currentCategory}
    // const copy = Object.assign({}, currentCategory)
    copy[domEvent.target.name] = domEvent.target.value

    setCurrentCategory(copy)
  }

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Register New Category</h2>


      <fieldset>
        <div className="form-group">
          <label htmlFor="label">Label: </label>
          <input type="text" name="label" required autoFocus className="form-control"
            value={currentCategory.label}
            onChange={changeCategoryState}
          />
        </div>
      </fieldset>


      <button type="submit"
        onClick={evt => {
          evt.preventDefault()

          const category = {
            label:currentCategory.label,
          }

          createCategory(category)
            .then(() => history.push("/categories"))
            //below we rerendering page with getAllCategories function
            .then(getAllCategories)
        }}
        className="btn btn-primary">Create</button>
    </form>
  )
}


