import React from "react";
import "./style.css";
import  FirstScreen from "./components/FirstScreen"
 import LandingPage from "./components/landingPage"
 import {BrowserRouter,Route} from "react-router-dom"

export default function App() {
  return (
    <div>
   <FirstScreen/>
<BrowserRouter>
<Route></Route>
</BrowserRouter>
    </div>
  );
}
