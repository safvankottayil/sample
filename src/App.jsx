import { BrowserRouter, Route, Routes } from "react-router-dom"
import SiderbarLayoutRouter from "./router/SiderbarLayoutRouter"
import Router from "./router/Router"
function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
     
      <Route path="/*" element={<Router/>}/>
      {/* sidebar layout  */}
     
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
