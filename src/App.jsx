import React, { useState } from 'react'
import { Footer } from './components/Footer'
import { ButtonSubmit } from './components/styled/ButtonSubmit'

import logo from './images/logo.svg'
import illustration from './images/illustration-dashboard.png'

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

  const emailValidation = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (email === '') {
      setError(true)
      setMessage('Whoops! It looks like you forgot to add your email')
    } else if (!emailRegex.test(email)) {
      setError(true)
      setMessage('Please provide a valid email address')
    } else {
      setError(false)
      setMessage('')
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    emailValidation()
  }

  return (
    <>
      <main className='ping container'>
        <div className='ping__logo'>
          <img className='ping__logo-img' src={logo} alt='Ping Logo' />
        </div>
        <div className='ping__content'>
          <h1 className='ping__content-title'>
            We are launching <span>soon!</span>
          </h1>
          <p className='ping__content-desc'>Subscribe and get notified</p>
        </div>
        <div className='ping__forms'>
          <form onSubmit={handleOnSubmit} className='ping__form'>
            <div className='ping__form-container'>
              <input
                type='text'
                className={
                  error ? 'ping__form-input error' : 'ping__form-input'
                }
                onChange={handleOnChange}
                value={email}
                placeholder={
                  error ? 'example@email/com' : 'Your email address...'
                }
                autoComplete='off'
              />
              <p
                className={
                  error ? 'ping__form-message show' : 'ping__form-message hide'
                }
              >
                {message}
              </p>
            </div>
            <ButtonSubmit type='submit'>Notify Me</ButtonSubmit>
          </form>
        </div>
        <div className='ping__illustration'>
          <img
            className='ping__illustration-img'
            src={illustration}
            alt='Illustration'
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
