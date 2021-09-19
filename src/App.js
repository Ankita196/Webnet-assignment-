import React from "react";
import "./style.css";
import  FirstScreen from "./components/FirstScreen"
 import LandingPage from "./components/landingPage"
 import {BrowserRouter,Route,Switch} from "react-router-dom"

export default function App() {
  return (
    <div>
  
<BrowserRouter>

<Switch>
<Route exact path="/"> <FirstScreen /></Route>
<Route  path="/landing"> <LandingPage /></Route>

</Switch>
</BrowserRouter>
    </div>
  );
}
