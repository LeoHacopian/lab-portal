import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LabPortal from '../LabPortal/LabPortal';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import QPortalNavbar from '../QPortalNavbar/QPortalNavbar';
import HomePage from '../HomePage/HomePage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AdminNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Lab" element={<LabPortal />} />
          <Route path="/FormCreation" element={<QPortalNavbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
