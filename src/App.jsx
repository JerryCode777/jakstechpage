import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import VerifyCode from './pages/VerifyCode';
import Subscription from './pages/Subscription';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import ComplaintsBook from './pages/ComplaintsBook';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0d1117] transition-colors duration-300">
        {/* Header / Navbar */}
        <header className="bg-white dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">JAKS Tech</h1>
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-[#2968FB] dark:hover:text-[#2968FB] font-medium transition-colors">
                  Inicio
                </Link>
                <a href="#planes" className="text-gray-700 dark:text-gray-300 hover:text-[#2968FB] dark:hover:text-[#2968FB] font-medium transition-colors">
                  Planes
                </a>
                <a href="#contacto" className="text-gray-700 dark:text-gray-300 hover:text-[#2968FB] dark:hover:text-[#2968FB] font-medium transition-colors">
                  Contacto
                </a>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </nav>

              {/* Mobile menu button */}
              <button className="md:hidden p-2 text-gray-700 dark:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/suscribirse" element={<Login />} />
            <Route path="/terminos-condiciones" element={<TermsConditions />} />
            <Route path="/politicas-devolucion" element={<RefundPolicy />} />
            <Route path="/libro-reclamaciones" element={<ComplaintsBook />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">JAKS Tech SAC</h3>
                <p className="text-gray-400 mb-4">
                  Soluciones tecnológicas educativas para potenciar tu aprendizaje
                </p>
              </div>

              {/* Contact */}
              <div id="contacto">
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contacto@jakstech.net
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Lima, Perú</span>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link to="/terminos-condiciones" className="hover:text-white transition-colors">
                      Términos y Condiciones
                    </Link>
                  </li>
                  <li>
                    <Link to="/politicas-devolucion" className="hover:text-white transition-colors">
                      Políticas de Devolución
                    </Link>
                  </li>
                  <li>
                    <Link to="/libro-reclamaciones" className="hover:text-white transition-colors">
                      Libro de Reclamaciones
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/jakstech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/jakstech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/jakstech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} JAKS Tech SAC. Todos los derechos reservados. | RUC: 20614811804</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
