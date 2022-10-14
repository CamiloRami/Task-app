import React from 'react'
import './LogIn.css'

function LogIn({ setOpenModal, login }) {
  const form = React.useRef(null)

  const onSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const user = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    login(user.email, user.password)
    setOpenModal(false)
  }

  const onCancel = () => {
    setOpenModal(false)
  }
  return (
    <div className='LogIn'>
      <form className='LogIn-form' ref={form} onSubmit={onSubmit}>
        <input className='LogIn-form-input' type='text' name='email' placeholder='Email' />
        <input className='LogIn-form-input' type='password' name='password' placeholder='Password' />
        <button 
          className='LogIn-form-button cancel' 
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className='LogIn-form-button' type='submit'>
          Log In
        </button>
     </form>
    </div>
  )
}

export { LogIn }