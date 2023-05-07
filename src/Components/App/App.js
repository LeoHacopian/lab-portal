import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LabPortal from '../LabPortal/LabPortal';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import QPortalNavbar from '../QPortalNavbar/QPortalNavbar';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AdminNavBar />
        <Routes>
          <Route path="/" element={<LabPortal />} />
          <Route path="/FormCreation" element={<QPortalNavbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
