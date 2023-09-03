import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import HistoryPage from './Components/HistoryPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './Components/NavBar';
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/history' element={<HistoryPage />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App