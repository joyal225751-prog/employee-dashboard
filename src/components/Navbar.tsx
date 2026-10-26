import { NavLink } from 'react-router-dom';
import { Users, ClipboardList } from 'lucide-react';

function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link d-flex align-items-center gap-2 fw-semibold ${
      isActive ? 'text-white' : 'text-white-50'
    }`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
          <Users size={22} />
          Employee Dashboard
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/employee-form" className={linkClass}>
                <ClipboardList size={18} />
                Employee Form
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
