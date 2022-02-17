import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getUsers } from "./UserManager"
import "./users.css"

export const UsersList = () => {
	const [userList, setUserList] = useState([])


	const getAllUsers = () => getUsers().then(data => setUserList(data))


	useEffect(() => {
		getAllUsers()
	}, [])


	

	return (
		//  <> Fragment - putting all return elements into one JXS element
		<>

			<div className="Tags"></div>
			{
				userList.map(
					(listOfUsers) => {

						return <center>

							<div className="card equal-height has-text-centered"><div key={`listOfUsers.id-${listOfUsers.id}`}>

								<div>{listOfUsers.user.first_name} {""}
									{listOfUsers.user.last_name}</div>

								<div>{listOfUsers.user.username}</div>
							
							</div>


							<div>
							{listOfUsers.user.is_staff ? "User is Staff" : <div>User is NOT Staff</div>}</div>


							</div>
						</center>



					}
				)


			}


		</>
	)
}







