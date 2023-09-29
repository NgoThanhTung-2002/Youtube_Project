import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import { routes } from './pages/routes'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
function App() {
  

  return (
    <div>
    <HeaderComponent
      <Router>
        <Routes>
          {routes.map((route)=>{
            const Page = route.page
            return (
              <Route path={route.path} element={<Page/>}/>  
            )
          })}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App