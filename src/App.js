import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import NotFound from "pages/NotFound"
import HomeService from "services/HomeService"
import routes from "./routes"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.HOME_PATH}
            element={<Home homeService={new HomeService()} />}
          />
          <Route path={routes.NOT_FOUND_PATH} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
