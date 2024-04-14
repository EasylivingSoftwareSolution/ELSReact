import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Router,BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import DataCourses from './pages/DataCourses';
import AboutUs from './pages/AboutUs';
import DataScience from './pages/DataScience';
import DataAnalytics from './pages/DataAnalytics';
function App() {
  return (
<>
<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Header/>} />
            <Route path="/logout" element={<Header/>} />
            <Route path="/home/:type" element={<Header/>} />
            <Route path="/datacourses" element={<DataCourses/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/datascience" element={<DataScience/>} />
            <Route path="/dataanalytics" element={<DataAnalytics/>} />
        </Routes>
      </BrowserRouter>
</>
  );
}

export default App;
