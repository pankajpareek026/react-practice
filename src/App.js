import { Fragment } from "react"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paggination from "./components/Pagginatioin";
function App()
{
    return(
    <Fragment>
<h2 className="heading">React Practice Projects </h2>
<hr />
<section className="main-menu">
    <span className="menu-items">pagination</span>
    <span className="menu-items">pagination</span>
    <span className="menu-items">pagination</span>
    <span className="menu-items">pagination</span>
    <span className="menu-items">pagination</span>
    <span className="menu-items">pagination</span>
    <span className="menu-items">pagination</span>
</section>
<hr />
<BrowserRouter>
<Routes>
    <Route path="/paggination" element={<Paggination/>}/>
</Routes>
</BrowserRouter>
    </Fragment>)
}
export default App;