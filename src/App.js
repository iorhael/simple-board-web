import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import NotFound from "pages/NotFound"
import HomeService from "services/HomeService"

export const HOME_PATH = "/"
export const NOT_FOUND_PATH = "*"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={HOME_PATH}
            element={<Home homeService={new HomeService()} />}
          />
          <Route path={NOT_FOUND_PATH} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
