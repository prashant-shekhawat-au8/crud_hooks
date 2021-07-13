import React, { useState, useEffect } from 'react'
import "./App.css";

const EditUserForm = (props) => {
  
  const [user, setUser] = useState(props.currentUser)
  // change in props will be ignored beacuse we set the initial value to user and in order to update the intitial value we have to use use effect method
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  useEffect(() => {
    (async()=>{
      const response=await fetch("https://api.peka.ooo/api/tables?gameType=rummy")
      const data=await response.json();
      console.log(data)
    })()
  },[])

  

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <div>
      <form className="input_form"
        onSubmit={(event) => {
          event.preventDefault()

          props.updateUser(user.id, user)
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <button onClick={() => props.updateuser(user.id,user)}>Update user</button>
        <button
          onClick={() => props.settheEditing()}
          className="button muted-button"
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditUserForm