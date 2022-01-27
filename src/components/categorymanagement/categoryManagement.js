import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ShowCategories = () => {

    // declaring "works" that defines state
    // declaring "showWorks" that defines function that will modify state/set value of works
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED


    const [categories, showCategories] = useState([])



    const fetchCategories = () => {
        return fetch("http://localhost:8088/categories")
        // after fetching data, invoke function 
           .then(res => res.json())
              //taking json string and parsing into js 
            .then((data) => {
                 // data = categories converted from string to array, setting that response with showCategories
                showCategories(data)

            })
    }


    const deleteCategory = (id) => {
        fetch(`http://localhost:8088/categories/${id}`, {
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



            <center> <div className="Categories"></div> </center>
            {
               categories.map(
                    (finishedCategories) => {

                        return <center>

                            <div className="categories"><div key={`finishedCategories-${finishedCategories.id}`}>

                     



                                <div>{finishedCategories.label}</div>
                            
                                <button className="button" onClick={() => {
                                            deleteCategory(finishedCategories.id);
                                        }}>Delete</button>

                                <button className="button" onClick={() => {
                                            editCategory(booking.id)
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