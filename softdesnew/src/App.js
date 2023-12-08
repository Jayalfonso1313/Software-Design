import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ViewMenu from './pages/ViewMenu';
import OrderStatus from './pages/OrderStatus';
import Admin from './pages/Admin';
import AdminAnalytics from './pages/AdminAnalytics';
import AdminInventory from './pages/AdminInventory';
import AdminHome from './pages/AdminHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/view-menu' element={<ViewMenu/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/order-status' element={<OrderStatus/>}/>

        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/home' element={<AdminHome/>}/>
        <Route path='/admin/analytics' element={<AdminAnalytics/>}/>
        <Route path='admin/inventory' element={<AdminInventory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
