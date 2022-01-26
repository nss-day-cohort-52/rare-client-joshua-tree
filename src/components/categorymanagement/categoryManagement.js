import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ShowCategories = () => {

    // declaring "works" that defines state
    // declaring "showWorks" that defines function that will modify state/set value of works
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED


    const [categories, showCategories] = useState([])




    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/categories")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of works & worksMaterials defined in line 15
                .then(
                    (submittedCategories) => {
                        showCategories(submittedCategories)
                    }
                )
        },
        // leave DEPENDANCY ARRAY empty, or infinite loop
        []
    )




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
                                            deleteCategory(booking.id)
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