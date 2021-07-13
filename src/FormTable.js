import React, { useState } from 'react'
import "./App.css"

export default function FormTable(props) {
    const initialState = { id: null, name: "", username: "" }

    const [state, setstate] = useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target
        setstate({ ...state, [name]: value })
    }

    return (
        <div>
            <form className="input_form"
                onSubmit={(event) => {
                    event.preventDefault()
                    if (!state.name || !state.username) return

                    props.addUser(state)
                    setstate(initialState)
                }}
            >
                <label>Name</label>
                <input type="text" name="name" value={state.name} onChange={handleChange} />
                <label>Username</label>
                <input type="text" name="username" value={state.username} onChange={handleChange} />
                <button>Add new user</button>
            </form>
        </div>
    )
}
