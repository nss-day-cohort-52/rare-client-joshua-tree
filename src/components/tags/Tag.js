import React, { useEffect, useState } from "react"

import { TagForm } from "./TagForm"

export const ShowTags = () => {
<<<<<<< HEAD:src/components/tags/TagManagement.js
	const [tags, showTags] = useState([])

	const fetchTags = () => {
		return (
			fetch("http://localhost:8000/tags")
				// after fetching data, invoke function
=======


    const [tags, showTags] = useState([])
    

    const fetchTags = () => {
		return fetch("http://localhost:8000/tags",{
				method: "GET",
				headers: {
					"Authorization": `Token ${localStorage.getItem("token")}`
				  }
				})
>>>>>>> b77ef724711e5723c9fde05a4ebc18392b28072b:src/components/tags/Tag.js
				.then((res) => res.json())
				//taking json string and parsing into js
				.then((data) => {
					// data = categories converted from string to array, setting that response with showCategories
					showTags(data)
				})
<<<<<<< HEAD:src/components/tags/TagManagement.js
		)
	}

	const deleteTags = (id) => {
		fetch(`http://localhost:8000/tags/${id}`, {
			method: "DELETE",
		})
			// after delete, GET all of the categories again to render the new state
			.then(() => {
				fetchTags()
			})
	}

	// *LISTENING FOR STATE CHANGES AND REACTS*
	// takes a function and array as arguments & runs code when state changes (event listener)
	// when the state changes, fetch the categories
	useEffect(() => {
		fetchTags()
	}, [])

	return (
		//  <> Fragment - putting all return elements into one JXS element
		<>
			<TagForm fetchTags={fetchTags} />

			<div className='Tags'></div>
			{tags.map((finishedTags) => {
				return (
					<center>
						<div className='card equal-height has-text-centered'>
							<div key={`finishedTags.id-${finishedTags.id}`}>
								<div>{finishedTags.label}</div>

								<button
									className='button'
									onClick={() => {
										deleteTags(finishedTags.id)
									}}>
									Delete
								</button>

								<button
									className='button'
									onClick={() => {
										editTags(tags.id)
									}}>
									Edit
								</button>
							</div>
						</div>
					</center>
				)
			})}
		</>
	)
}
=======
				
			}
    

    useEffect(() => { 
        fetchTags()
    }, [])

    const deleteTags = (id) => {
        fetch(`http://localhost:8000/tags/${id}`, {
            method: "DELETE"
        })
            // after delete, GET all of the categories again to render the new state 
            .then(
                () => { fetchTags() 
                })
    }

    // *LISTENING FOR STATE CHANGES AND REACTS*
    // takes a function and array as arguments & runs code when state changes (event listener)
    // when the state changes, fetch the categories
    useEffect(() => { 
        fetchTags() 
    }, [])

  

    return (
        //  <> Fragment - putting all return elements into one JXS element 
        <>

<TagForm fetchTags={fetchTags}/>

            <div className="Tags"></div>
            {
                tags.map(
                    (finishedTags) => {

                        return <center>

                            <div className="card equal-height has-text-centered"><div key={`finishedTags.id-${finishedTags.id}`}>

                                <div>{finishedTags.label}</div>

                                <button className="button" onClick={() => {
                                    deleteTags(finishedTags.id);
                                }}>Delete</button>

                                <button className="button" onClick={() => {
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
>>>>>>> b77ef724711e5723c9fde05a4ebc18392b28072b:src/components/tags/Tag.js
