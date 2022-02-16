import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const UsersList = () => {
	const [userList, setUserList] = useState([])

	useEffect(() => {
		fetch("http://localhost:8000/users")
			// fetching data from the API and parsing into application state
			.then((res) => res.json())

			// you have final array of userList
			.then((userData) =>
				//    setting the data that is a response from fetch with userList
				{
					setUserList(userData)
				}
			)
	}, [])

	return (
		<>
			<div className='container'>
				<div className='title'>Categories</div>
				{
					// iterate materialCat array and convert to objects to JXS (conversation = .map())
					userList.map(
						// parameter to capture each individual materialOption as iterates
						(userSelect) => {
							// uniquely identify <h2> with a key, use .id since unique identifier

							return (
								<div
									className='card equal-height has-text-centered'
									key={`users--${userSelect.id}`}>
									<div className='card-content'>
										<div className='users'>
											<div key={`users-${userSelect.id}`}>
												<Link
													to={`/users/${userSelect.id}`}
													className='subtitle is-link'>
													{userSelect.first_name}{" "}
													{userSelect.last_name}
												</Link>

												<div>
													email: {userSelect.email}
												</div>
												<div>
													username:{" "}
													{userSelect.username}
												</div>
											</div>
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
