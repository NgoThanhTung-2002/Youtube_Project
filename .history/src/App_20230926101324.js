import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slides/counterSlide'

import styled from 'styled-components';


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={HomePage}
        </Routes>
      </Router>
    </div>
  )
}

export default App