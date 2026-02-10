import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservierung from './pages/Reservierung'
import Kontakt from './pages/Kontakt'
import Öffnungszeiten from './pages/Öffnungszeiten'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="speisekarte" element={<Menu />} />
        <Route path="reservierung" element={<Reservierung />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="oeffnungszeiten" element={<Öffnungszeiten />} />
      </Route>
    </Routes>
  )
}
