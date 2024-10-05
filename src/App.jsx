import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./Context/UserContext.jsx"
import Home from "./Views/Home.jsx"
import About from "./Views/About.jsx"
import UserDetail from "./Views/UserDetail.jsx"

export default function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users/:id" element={<UserDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}
