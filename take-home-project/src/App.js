import React from "react"
import Services from './components/Services'
import Locations from './components/Locations'
import "./App.css"

const serviceRoutes = () => {
  if (window.location.pathname === "/") {
    return <Services />
  }
}

const locationRoutes = () => {
  if (window.location.pathname === "/locations") {
    return <Locations />
  }
}

const App = () => {
  return (
    <div className="ui container">
     {serviceRoutes()}
     {locationRoutes()}
    </div>
  )
}
export default App;
