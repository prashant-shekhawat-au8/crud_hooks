import './App.css';

import React, { useState }  from 'react'
import UserTable from "./UserTable"
import FormTable from "./FormTable"
import EditForm from "./EditUserForm"

export default function App() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const initialFormState = { id: null, name: '', username: '' }
  
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const [users, setUsers] = useState(usersData)
  
  const [editing, setEditing] = useState(false)

  const editRow = (user) => {
    setEditing(true)  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  } 

  const addusers = (user)=>{
    user.id=users.length + 1
    setUsers([...users,user])

  }

  const deleteUser = (id) => {
    setUsers(users.filter((user)=>user.id!==id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false) 
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  
  const settheEditing=()=>{
    setEditing(false) 
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">CRUD App with Hooks</h1>
        <div className="flex-row">
          {!editing?
          <div className="flex-large">
            <h2>Add user</h2>
            <FormTable addUser={addusers} />
          </div>:
          <div className="flex-large">
          <h2>edit user</h2>
          <EditForm settheEditing={settheEditing} currentUser={currentUser} updateuser={updateUser} />
          </div>
          }
         
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={users} editRow={editRow} deleteuser={deleteUser}/>
          </div>
        </div>
      </div>
    </div>
  )
}
