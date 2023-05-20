import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";
import "./App.css"

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="/:id" element={<Product/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>

        </Routes>
    </div>
  );
}

export default App;
