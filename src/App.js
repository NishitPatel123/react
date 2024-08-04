import {  Route, Routes } from 'react-router-dom';
import './App.css';
import {Home} from './component/Home';
import Navbar from './Navbar';
import {PageNotFound} from './component/PageNotFound';
import {SignUp} from './component/SignUp';
import {Login} from './component/Login';
import {UseStateDemo} from './component/UseStateDemo';
import { HomeDetail } from './component/HomeDetail';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/*" element={<PageNotFound/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/usestatedemo" element={<UseStateDemo/>}></Route>
          <Route path="/home/detail/:id" element={<HomeDetail/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
