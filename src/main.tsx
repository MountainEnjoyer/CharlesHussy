import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Presentation.tsx'
import NavBar from './components/NavBar.tsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Presentation from './Presentation.tsx'
import Contact from './components/Contact.tsx'
import Videos from './components/Videos.tsx'
import Bibliographie from './components/Bibliographie.tsx'
import aPropos from './components/aPropos.tsx'
import Acheter from './components/Acheter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />

    {/* Routes */}
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/a_propos" element={<aPropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/acheter" element={<Acheter />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/bibliographie" element={<Bibliographie />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
