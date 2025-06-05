import { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getWhatsAppLinkWithUTM } from '../utils/whatsapp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isCorretoresPage = location.pathname.includes('/corretores');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Implantação', href: '#implementation' },
    { name: 'Lazer', href: '#leisure' },
    { name: 'Localização', href: '#location' },
    ...(isCorretoresPage ? [] : [{ name: 'Contato', href: '#contact' }]),
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img 
            src="https://i.ibb.co/zWs1Bhn1/logo-03-3-removebg-preview.webp"
            alt="Cape Town Logo"
            className={`h-14 transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-90'
            }`}
          />
        </a>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm ${
                isScrolled ? 'text-charcoal hover:text-gold' : 'text-white hover:text-gold'
              } transition-colors`}
            >
              {link.name}
            </a>
          ))}
          <a href={getWhatsAppLinkWithUTM('whatsapp-button')} className="button-primary">
            Agende uma visita
          </a>
        </div>

        <button 
          className={`md:hidden ${isScrolled ? 'text-charcoal' : 'text-white'} focus:outline-none`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 animate-slide-down">
          <div className="container-custom py-6 flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-medium text-lg text-charcoal hover:text-gold transition-colors py-2 border-b border-beige-dark"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={getWhatsAppLinkWithUTM('whatsapp-button')} 
              className="button-primary text-center mt-4"
              onClick={closeMenu}
            >
              Agende uma visita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
