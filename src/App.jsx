import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SiderbarLayoutRouter from "./router/SiderbarLayoutRouter"
import Router from "./router/Router"
function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
     
      <Route path="/*" element={<Router/>}/>     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
