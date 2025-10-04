import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Waves, Globe as Globe2, Info } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { to: '/forecast', label: 'Forecast', icon: BarChart3 },
    { to: '/ocean', label: 'Ocean', icon: Waves },
    { to: '/about', label: 'About', icon: Info }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Globe2 className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NASA SpaceApps 2025
            </span>
          </Link>

          <div className="flex space-x-1">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === to
                    ? 'bg-cyan-500/20 text-cyan-400 neon-glow'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
