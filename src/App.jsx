import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from '../context/GlobalContext'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHome from './pages/AppHome'
import AppMovie from './pages/AppMovie'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<AppHome />} />
              <Route path="movie/:id" element={<AppMovie />} />
              <Route path="*" element={<AppHome />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
