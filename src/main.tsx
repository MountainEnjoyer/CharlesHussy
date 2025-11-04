import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Presentation.tsx'
import NavBar from './components/NavBar.tsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Presentation from './Presentation.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />

    {/* Routes */}
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/aPropos" element={<aPropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
