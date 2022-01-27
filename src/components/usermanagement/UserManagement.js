import React, { useEffect, useState } from "react"






export const UsersList = () => {
    // declaring "materialCat" that defines state
    // declaring "setmaterialCat" that defines function that will modify state/set value of materialCategories
    // useState passes a value as argument and returnes ARRAY WHEN INVOKED
    const [userlist, setUserList] = useState([])


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
            {
                    // iterate materialCat array and convert to objects to JXS (converstion = .map())
                    userlist.map(
                        // // parameter to capture each indivual materialOption as iterates
                        (userSelect) => {
                            // // uniquely identify <h2> with a key, use .id since unique identifier

                         return <div className="links"> <div key={`materialCategory-${userSelect.id}`}>
          
											{userSelect.user?.first_name}{" "}
											{userSelect.user?.last_name}
										
                                            {userSelect.user?.email}
                                            {userSelect.user?.username}
                                            </div></div>


                             
                        }
                    )
                }
       

</>
)

}