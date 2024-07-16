import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../assets/user-icon.svg';

const Navbar1 = () => {
  const { isLoggedIn, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 shadow-md">
      <div className="flex flex-wrap items-center justify-between p-4 mx-10">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="mx-10 self-center text-2xl font-semibold whitespace-nowrap dark:text-black">ContractFlow</span>
        </a>

        <div className="flex items-center space-x-4">
          <>
            {userRole !== 'admin' && (
              <>
                <a
                  href="/managementdashboard"
                  className="text-lg font-medium text-gray-800 hover:text-gray-900 relative group"
                >
                  Dashboard
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="/Adhoc"
                  className="text-lg font-medium text-gray-800 hover:text-gray-900 relative group"
                >
                  Ad-Hoc
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
                </a>
              </>
            )}
            {isLoggedIn && userRole !== 'admin' && userRole !== 'creater' && (
              <a
                href="/vendoronboarding"
                className="text-lg font-medium text-gray-800 hover:text-gray-900 relative group"
              >
                Onboarding
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple transition-all group-hover:w-full"></span>
              </a>
            )}
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="flex items-center space-x-2">
                <img src={UserIcon} className="cursor-pointer h-6 w-6 inline" alt="usericon" />
                <span className="text-gray-800 hover:text-gray-900">{userRole}</span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                  <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">
                    Settings
                  </button>
                  <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
