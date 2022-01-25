import React, { useEffect, useState } from "react"
import { useParams} from "react-router-dom"


export const SinglePost = () => {
    // declaring "bookings" that defines state
    // declaring "updateBooking" that defines function that will modify state/set value of bookings
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED
    const [singlePost, updateSinglePost] = useState ([])
    const { postId } = useParams()  // Variable storing the route parameter
  



    // *LISTENING FOR STATE CHANGES AND REACTS*
     // takes a function and array as arguments & runs code when state changes (event listener)
     // Fetch the individual booking when the parameter value changes
        useEffect(
            () => {
                fetch(`http://localhost:8088/posts/${postId}`)
                  // fetching data from the API and parsing into application state
                    .then(res => res.json())
                    // setting booking state
                    .then(updateSinglePost)
            },
            [postId]  // Above function runs when the value of bookingId changes
        )
    
        return (
            <><center>
      
            <div className="singlepost">
                <section className="post">
               
                    <div className="post_description">{singlePost.title} {singlePost.user_id} {singlePost.category_id} {singlePost.publication_date} {singlePost.content}</div>
                </section>
                </div>
                </center>
            </>

        )
    }