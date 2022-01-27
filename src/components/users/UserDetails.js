import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from "moment"


export const UserDetails = () => {

    const [singleUser, updateSingleUser] = useState([])
    const { userId } = useParams()

    // *LISTENING FOR STATE CHANGES AND REACTS*
    // takes a function and array as arguments & runs code when state changes (event listener)
    // Fetch the individual booking when the parameter value changes
    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${userId}`)
                // fetching data from the API and parsing into application state
                .then(res => res.json())
                // setting booking state
                .then(updateSingleUser)
        },
        [userId]  // Above function runs when the value of bookingId changes
    )


    return (
        <>
            <center>
                <div className='singleUser'>
                    <section className='singleUser'>
                        <div className='singleUser__firstName'>
                            {singleUser.first_name}
                        </div>
                        <div className='singleUser__lastName'>
                            {singleUser.last_name}
                        </div>
                        <div className='singleUser_profilePhoto'>
                            <img
                                src={`${singleUser.profile_image_url}`}
                                alt=''
                                className='img image is-rounded is-horizontal-center'
                            />
                        </div>
                        <div className='singleUser_username'>
                            {singleUser.username}
                        </div>
                        <div className='singleUser__created_on'>
									{moment(
										`${singleUser.created_on}`
									).format("MM/DD/YYYY")}
								</div>
                    
                        <div className='singleUser__content'>
                            {singleUser.bio}
                        </div>
                    </section>
                </div>
            </center>
        </>
    )
}
