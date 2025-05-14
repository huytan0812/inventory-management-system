import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Category from './pages/Category'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Login from './pages/Login'
import Product from './pages/Product'
import Supplier from './pages/Supplier'
import Agency from './pages/Agency'
import Permission from './pages/Permission'
import Report from './pages/Report'
import Dashboard2 from './pages/Dashboard2'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/dashboard2' element={<Dashboard2 />} />
        <Route path='/menu' element={<Inventory />} />
        <Route path='/categories' element={<Category /> } />
        <Route path='/products' element={<Product /> } />
        <Route path='/supplier' element={<Supplier /> } />
        <Route path='/agency' element={<Agency /> } />
        <Route path='/permissions' element={<Permission /> } />
        <Route path='/reports' element={<Report /> } />
      </Route>
    </Routes>
  )
}

export default App
