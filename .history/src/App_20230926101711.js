import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from ./pa
function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/oder" element={<OderPage />}/>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App