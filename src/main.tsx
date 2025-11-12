import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar.tsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Presentation from './components/Presentation.tsx'
import Contact from './components/Contact.tsx'
import Videos from './components/Videos.tsx'
import Bibliographie from './components/Bibliographie.tsx'
import Propos from "./components/Propos.tsx"
import TestPropos from './components/TEST_Propos.tsx'
import Acheter from './components/Acheter.tsx'
import Footer from './Footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />

    {/* Routes */}
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/apropos" element={<Propos />} />
        <Route path="/testpropos" element={<TestPropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/acheter" element={<Acheter />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/bibliographie" element={<Bibliographie />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>,
)
