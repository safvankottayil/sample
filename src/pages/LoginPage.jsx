import React from 'react'
import Content from '../components/Login/Content'
import LoginForm from '../components/Login/LoginForm'

function LoginPage() {
  return (
    <div className='flex px-10 max-w-[2000px] overflow-hidden m-auto shadow shadow-slate-300  min-h-screen '>
      <Content/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
