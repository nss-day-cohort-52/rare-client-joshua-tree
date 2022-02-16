import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'



export const CategoryForm = () => {
  const history = useHistory()
  
  
  const [category, setCategory] = useState({
    label: "",
  })




  const changeCategoryState = (domEvent) => {
    const copy = {...currentCategory}
    copy[domEvent.target.name] = domEvent.target.value
    setCategory(copy)
  }

  return (
    <form className="categoryForm">
      <h2 className="categoryForm__label">Register New Category</h2>
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
          // Prevent form from being submitted
          evt.preventDefault()

          const category = {
            label: currentCategory.label
          }

       
          createCategory(category)
            .then(() => history.push("/categories"))
        }}
        className="btn btn-primary">Create</button>
    </form>
  )
}