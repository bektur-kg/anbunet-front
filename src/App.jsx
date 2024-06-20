import {Sidebar} from "./layout"
import {Route, Routes} from "react-router-dom"
import { PrivateRoutes } from './helpers'
import {privatePagesList, publicPagesList} from "./utils/pagesList.js"
import React from "react"
import "./style.scss"
import "./index.css"

function App() {

  return (
      <div className={"bg-gradient-to-r from-purple-bg/80 to-purple-bg/50 min-h-screen"}>
          <Sidebar/>
          <div className="w-5/6 ml-auto main-content">
              <Routes>
                  <Route element={<PrivateRoutes/>}>
                      {
                          privatePagesList.map(({id, path, Component}) => (
                              <Route key={id} path={path} element={<Component/>} />
                          ))
                      }
                  </Route>
                  {
                      publicPagesList.map(({id, path, Component}) => (
                          <Route key={id} path={path} element={<Component/>} />
                      ))
                  }
              </Routes>
          </div>
      </div>
  )
}

export default App
