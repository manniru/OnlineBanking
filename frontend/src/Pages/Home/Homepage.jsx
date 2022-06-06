import './homepage.scss'
import React from 'react'
import CustomizedDialogs from '../../components/Dialog'

// import Login from '../../components/login/Login'
// import Register from '../../components/register/Register'

import AdminRegister from '../../components/register/AdminRegister'
import AdminLogin from '../../components/login/AdminLogin'

function Homepage() {
  return (
    <div className='homepage'>
      <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjA4YmF0Y2g0LWt3YW4tMDEtZy5qcGc.jpg' alt='bg'  className='homepage-bg'></img>
      <header>
        <img src='https://api.iconify.design/bxs/bank.svg?color=white' alt='LOGO'></img>
        <h2>Sprints Bank</h2>
      </header>

      <main>
        <section>

          <h1>The bank you trust</h1>
          <p>Spend, save, invest, and control your financial life</p>

          <div className='homepage-sign-btns'>
            <CustomizedDialogs title='Sign in' btn='Sign in'>
              <AdminLogin/>          
            </CustomizedDialogs>

            <CustomizedDialogs title='Sign up' btn='Sign up' style={{color: "#007bff"}}>
              <AdminRegister />
            </CustomizedDialogs>
          </div>

        </section>
      </main>
    </div>
  )
}

export default Homepage