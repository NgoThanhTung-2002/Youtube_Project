import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import { routes } from './pages/routes'
function App() {
  return

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route)=>{

          })}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App