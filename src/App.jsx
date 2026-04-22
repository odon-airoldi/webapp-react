import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHome from './pages/AppHome'
import AppMovie from './pages/AppMovie'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<AppHome />} />
            <Route path="movie/:id" element={<AppMovie />} />
            <Route path="*" element={<AppHome />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
