import React from 'react'
import { Footer } from './components/Footer'
import styled from 'styled-components'

import logo from './images/logo.svg'
import illustration from './images/illustration-dashboard.png'

const ButtonSubmit = styled.button`
  font-family: inherit;
`

function App() {
  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <main className='ping'>
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
                className='ping__form-input'
                name='email'
                placeholder='Your email address...'
                autoComplete='off'
              />
            </div>
            <ButtonSubmit className='ping__form-submit' type='submit'>
              Notify Me
            </ButtonSubmit>
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
