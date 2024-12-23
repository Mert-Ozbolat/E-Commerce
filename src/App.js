import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredProducts from './Components/FiltredProducts/FilteredProducts';
import SingleProduct from './Components/FiltredProducts/SingleProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>} />
          <Route path='/filteredProducts/:type' element={<FilteredProducts />} />
          <Route path='/filteredProduct/:type/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
