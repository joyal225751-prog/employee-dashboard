import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import EmployeeForm from '@/pages/EmployeeForm';

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
