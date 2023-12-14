import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import GetStartpage from '../pages/GetStartpage'
import BookDemoPage from '../pages/BookDemoPage'
import SiderbarLayoutRouter from './SiderbarLayoutRouter'
import HomePage from '../pages/HomePage'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
       <Route path="/login" element={<LoginPage/>} />
      <Route path="/getstarted" element={<GetStartpage/>} />
      <Route path="/bookdemo" element={<BookDemoPage/>}/>
      <Route path='/*' element={<SiderbarLayoutRouter/>} />
    </Routes>
  )
}

export default Router
