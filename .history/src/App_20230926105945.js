import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { routes } from './pages/routes'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route)=>{
            const Page = route.page
            return (
              <Route path={route.path} element={
                <>
                <Page/>

                </>
              }/>  
            )
          })}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App