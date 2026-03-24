import { useState, useEffect } from 'react';
import { useLocation, Link, Outlet, useNavigate } from 'react-router';
import { LayoutDashboard, Users, Newspaper, LogOut, ExternalLink, Users2, Menu, X } from 'lucide-react';
import { NavigationBar } from '../../components/NavigationBar';
import './AdminLayout.css';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoginPage = location.pathname === '/admin/login';

  const navItems = [
    { label: 'Partners', path: '/admin/partners', icon: <Users size={20} /> },
    { label: 'Card News', path: '/admin/news', icon: <Newspaper size={20} /> },
    { label: 'Leadership', path: '/admin/leadership', icon: <Users2 size={20} /> },
  ];

  // Close mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    navigate('/admin/login');
  };

  if (isLoginPage) {
    return (
      <div className="admin-layout admin-layout--login">
        <NavigationBar />
        <main className="admin-main admin-main--login">
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <NavigationBar />
      
      {/* Mobile Sidebar Toggle */}
      <button 
        className="admin-sidebar-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Navigation"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        <span style={{ fontSize: '10px', fontWeight: 'bold', marginLeft: '4px', display: 'none' }}>MENU</span>
      </button>

      <aside className={`admin-sidebar ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className="admin-sidebar__header">
          <div className="admin-sidebar__logo">
            <span className="admin-sidebar__logo-text">KORION</span>
            <span className="admin-sidebar__tag">Admin</span>
          </div>
        </div>

        <nav className="admin-sidebar__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`admin-nav-item ${location.pathname === item.path ? 'is-active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar__footer">
          <Link to="/" className="admin-nav-item">
            <ExternalLink size={20} />
            <span>View Site</span>
          </Link>
          <button onClick={handleLogout} className="admin-nav-item admin-nav-item--logout">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>
            {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
          </h1>
        </header>
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
