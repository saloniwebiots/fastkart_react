import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/LoginPage/Login'
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddUser from './Pages/Users/AddUser/AddUser';
import Footer from './Layout/Footer/Footer';
import AllUser from './Pages/Users/AllUser/AllUser';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Layout/>
    <Routes>
    <Route index element={<Login/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/user/create' element={<AddUser/>}/>
    <Route path='/user' element={<AllUser/>}/>
    </Routes>
        <Footer/>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
