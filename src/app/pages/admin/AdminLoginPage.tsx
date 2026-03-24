import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, ShieldCheck } from 'lucide-react';
import './AdminLoginPage.css';

export function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth
    if (password === 'admin123') { // In a real app, this would be more secure
      localStorage.setItem('kori_admin_auth', 'true');
      navigate('/admin/partners');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-card__header">
          <div className="admin-login-card__icon">
            <ShieldCheck size={32} />
          </div>
          <h1>KORION Admin</h1>
          <p>Enter password to access management system</p>
        </div>

        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="admin-form-group">
            <div className="admin-input-wrapper">
              <Lock size={18} className="admin-input-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
              />
            </div>
            {error && <p className="admin-error">{error}</p>}
          </div>

          <button type="submit" className="admin-login-button">
            Access System
          </button>
        </form>
      </div>
    </div>
  );
}
