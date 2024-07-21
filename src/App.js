import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';  // Import Tailwind CSS
import MyMoves from './components/MyMoves';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: 'MY MOVES', path: '/', icon: 'fas fa-truck-fast' },
    { name: 'MY PROFILE', path: '/my-profile', icon: 'fas fa-user' },
    { name: 'GET QUOTE', path: '/get-quote', icon: 'fas fa-quote-right' },
    { name: 'LOGOUT', path: '/logout', icon: 'fas fa-sign-out-alt' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`fixed top-0 left-0 h-full bg-white text-gray-800 z-50 ${isOpen ? 'w-64' : 'w-0'} transition-width duration-300 md:w-64 md:block`}>
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className="text-gray-800">
          <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-2xl`}></i>
        </button>
      </div>
      <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="p-4 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = currentPath === item.path;
            return (
              <li key={index} className="w-full">
                <Link
                  to={item.path}
                  className={`block p-2 rounded flex items-center relative ${isActive ? 'text-orange-500' : 'text-gray-800'} ${isActive ? 'before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-orange-500' : 'hover:bg-gray-200'}`}
                >
                  <i className={`${item.icon} text-2xl mr-3`}></i>
                  <span className="pl-4">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'My Moves',
      '/my-profile': 'My Profile',
      '/get-quote': 'Get Quote',
      '/logout': 'Logout',
    };

    document.title = titles[location.pathname] || 'Default Title';
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-64 p-4">
        <Routes>
          <Route path="/" element={<MyMoves />} />
          <Route path="/my-profile" element={<div className="p-4">My Profile Content</div>} />
          <Route path="/get-quote" element={<div className="p-4">Get Quote Content</div>} />
          <Route path="/logout" element={<div className="p-4">Get Logout</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
