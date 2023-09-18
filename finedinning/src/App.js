import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./Navbar";
import Reviews from "./Reviews";
import FoodList from "./FoodList";
import Home from "./Home";
import Contacts from "./Contacts ";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/foodList' element={<FoodList/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  );
}

export default App;
