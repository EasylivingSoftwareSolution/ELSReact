import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Router,BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
<>
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Header/>} />
            <Route path="/logout" element={<Header/>} />
            <Route path="/home/:type" element={<Header/>} />
        </Routes>
      </BrowserRouter>
</>
  );
}

export default App;
