import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from "moment"
import { getUsers } from "./UserManager"
import { getUserById } from "./UserManager"



export const UserDetails = () => {
	const [singleUser, setSingleUser] = useState([])
	const { userId } = useParams()



	useEffect(() => {
		getUserById(userId).then(userData => setSingleUser(userData))
	}, [userId])





	return (
		<>

			<div className='container'>
				<div className='columns'>
					<div className='column is-one-fifth'></div>
					<div className='column is three-fifths'>
						<div
							className='card equal-height has-text-centered'
							key={`userDetails-${singleUser.id}`}>
							<div className='card-content'>

								
							<div>
      <img class="profilePhoto" src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A="/></div>


								<div>Username: {singleUser.user?.username}</div>
								<div>
									Email:  {singleUser.user?.email}
								</div>
								<div>Created On: {singleUser.created_on}</div>
								<div>
									Bio: {singleUser.bio}</div>


							</div>


						</div>
					</div>
				</div>
			</div>



		</>
	)
}
