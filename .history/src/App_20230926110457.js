import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { routes } from './pages/routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route)=>{
            const Page = route.page
            const Layout = DefaultComponent
            return (
              <Route path={route.path} element={
                <>
                  <Page/>
                </>
              }/>  
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App