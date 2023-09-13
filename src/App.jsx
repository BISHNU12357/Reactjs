import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Upload from './pages/Upload';
import Layout from './Layout';
import Home from './pages/Home';
import Videos from "./pages/Videos";
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={ <Home /> }></Route>
          <Route exact path='/upload' element={ <Upload /> }></Route>
          <Route exact path='/videos' element={ <Videos /> }></Route>
          <Route exact path='/login' element={ <Login /> }></Route>
          <Route exact path='/Signup' element={ <Signup /> }></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
