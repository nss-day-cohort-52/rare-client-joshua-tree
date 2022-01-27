import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"





export const UsersList = () => {
    const [userList, setUserList] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                // fetching data from the API and parsing into application state
                .then(res => res.json())

                // you have final array of userList
                .then((userData) =>
                //    setting the data that is a response from fetch with userList
                {
                    setUserList(userData)
                })
        },
        []
    )






    return (

        <>
            <center>
                {
                    // iterate materialCat array and convert to objects to JXS (converstion = .map())
                    userList.map(
                        // // parameter to capture each indivual materialOption as iterates
                        (userSelect) => {
                            // // uniquely identify <h2> with a key, use .id since unique identifier

                            return <div className="users"> <div key={`users-${userSelect.id}`}>

                                <Link
                                    to={`/users/${userSelect.id}`}
                                    className='name'>
                                    {userSelect.first_name}
                                    {userSelect.last_name}
                                </Link>

                                <div></div>{userSelect.email}
                                {userSelect.username}
                            </div></div>

                        }
                    )
                }

            </center>
        </>
    )

}