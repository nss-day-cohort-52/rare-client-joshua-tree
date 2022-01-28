import React, { useEffect, useState } from "react"

// passing props to Gallery.js // allows access to values in gallery form - what did user select?
export const TagChoices = ({showTagChoice, setTChoice}) => {

 // declaring "materialChoices" that defines state
    // declaring "setMaterialChoices" that defines function that will modify state/set value of materialChoices
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED

    const [TagChoices, setChoice] = useState([])
    
 



    useEffect(
        // *LISTENING FOR STATE CHANGES AND REACTS*
        // takes a function and array as arguments & runs code when state changes (event listener)
        () => {
            // Query string parameter
            fetch("http://localhost:8088/tags")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of materials
                .then(
                    (tagData) => {
                 
                      setChoice(tagData)
                    }
                )
        },
        // leave DEPENDANCY ARRAY empty, or infinite loop
        []
    )


    


    return (
        <>
        {
      
        TagChoices.map(
            (choice) => {
                             
               
                return  <div key={`tagChoice--${choice.id}`}>{choice.label} </div>
           
        //   returning none if id & userId do not match
         
                           
        }

        )
    }
    
        </>
    
        )
}