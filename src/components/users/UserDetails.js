import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from "moment"
import { getUsers } from "./UserManager"



export const UserDetails = () => {
	const [singleUser, setSingleUser] = useState([])
	const { userId } = useParams()


	useEffect(() => {
		getUsers().then(UserData => setSingleUser(UserData))
	}, [])


	return (
		<>
			<div className='container'>
				<div className='title'>User Details</div>
				{
					// iterate materialCat array and convert to objects to JXS (conversation = .map())
					singleUser.map(
						// parameter to capture each individual materialOption as iterates
						(userSelect) => {
							// uniquely identify <h2> with a key, use .id since unique identifier

							return (
								<div
									className='card equal-height has-text-centered'
									key={`users--${userSelect.id}`}>
									<div className='card-content'>
										<div className='users'>


											email: {userSelect.user.email}
										</div>
										<div>
											username:{" "}
											{userSelect.user.username}
										</div>
									</div>
								</div>

							)
						}
					)
				}
			</div>
		</>
	)
}
