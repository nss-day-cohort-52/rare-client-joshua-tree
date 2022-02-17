import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moment from "moment"

export const UserDetails = () => {
	const [singleUser, setSingleUser] = useState([])
	const { userId } = useParams()

	

	return (
		<>
			<div className='container'>
				<div className='columns'>
					<div className='column is-one-half'>
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
							{moment(`${singleUser.created_on}`).format(
								"MM/DD/YYYY"
							)}
						</div>
						<div className='singleUser__content'>
							{singleUser.bio}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
