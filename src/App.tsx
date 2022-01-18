import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Components/layout/Navbar"
import { Contact } from "./Components/Tasks/Contact"
import { FindNumber } from "./Components/FindNumber/FindNumber"
import { Home } from "./Views/Home"
import Shifumi from "./Components/Shifumi/Shifumi"

const App = () => {

  const [navbarBackground, setNavbarBackground] = useState<string>()

  return (
    <BrowserRouter>

      <Navbar navbarBackground={navbarBackground} setBackgroundColor={setNavbarBackground} />
      <br />
      <br />
      {/* <Contact /> */}
      {/* <FindNumber /> */}
      <Shifumi />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )

}

export default App