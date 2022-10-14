import React, { useRef } from 'react'
import './SignUp.css'

function SignUp({ setOpenModal }) {
  const form = useRef(null)

  const onSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newUser = {
      name: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    } 
    console.log(newUser)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  return (
    <div className="SignUp">
      <form className='SignUp-form' onSubmit={onSubmit} ref={form}>
        <input className='SignUp-form-input' type="text" name='username' placeholder="Username" />
        <input className='SignUp-form-input' type="email" name='email' placeholder="Email" />
        <input className='SignUp-form-input' type="password" name='password' placeholder="Password" />
        <button 
          className='SignUp-form-button cancel' 
          type="button"
          onClick={onCancel}>
          Cancel
        </button>
        <button className='SignUp-form-button' type="submit">
          Sign Up
        </button>
     </form>
    </div>
  )
}

export { SignUp }