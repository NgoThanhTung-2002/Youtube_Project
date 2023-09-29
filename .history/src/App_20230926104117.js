import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import { routes } from './pages/routes'
function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route)=>{
            const Page = route
            return (

            )
          })}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App