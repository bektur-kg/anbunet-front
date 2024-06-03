import {Sidebar} from "./layout"
import {Route, Routes} from "react-router-dom"
import {Profile, Main, NotFound, Register, Login} from "./pages"
import { PrivateRoutes } from './helpers'
import {privatePagesList, publicPagesList} from "./utils/pagesList.js";

function App() {

  return (
      <div className={"bg-gradient-to-r from-emerald-200/90 from-10% via-indigo-200/80 via-70% to-sky-200/90 to-90% min-h-screen"}>
          <Sidebar/>
          <div className="w-5/6 ml-auto">
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
