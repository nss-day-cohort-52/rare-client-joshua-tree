import React from 'react';
import { useHistory } from 'react-router-dom'
function SubscribeButton({ user_id }) {
  const history = useHistory()

  const subscribe = (userId) => {
    console.log(userId)
    // logic for subcribe button goes here

    history.push("/")
  }


  return <button onClick={subscribe(user_id)}>Subscribe</button>;
}

export default SubscribeButton;
