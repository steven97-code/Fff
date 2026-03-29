import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'FR' | 'AR'>('FR');

  const navLinks = [
    { name: 'Nouveautés', path: '/shop' },
    { name: 'Femme', path: '/category/women' },
    { name: 'Homme', path: '/category/men' },
    { name: 'Enfant', path: '/category/kids' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 -ml-2 text-foreground"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <span className="text-xl font-bold tracking-tighter uppercase">Spoonky_Store</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-x-4">
          <button 
            onClick={() => setLang(lang === 'FR' ? 'AR' : 'FR')}
            className="hidden sm:flex text-xs font-semibold px-2 py-1 border border-border rounded-sm hover:bg-secondary transition-colors"
          >
            {lang}
          </button>
          <button className="p-2 text-foreground hover:text-foreground/80 transition-colors hidden sm:block">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/account" className="p-2 text-foreground hover:text-foreground/80 transition-colors hidden sm:block">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="p-2 text-foreground hover:text-foreground/80 transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-background pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5 justify-between items-center border-b border-border">
              <span className="text-lg font-bold tracking-tighter uppercase">Menu</span>
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6 px-4 py-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flow-root">
                  <Link
                    to={link.path}
                    className="-m-2 block p-2 font-medium text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-border px-4 py-6">
              <div className="flow-root">
                <Link to="/account" className="-m-2 block p-2 font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                  Mon Compte
                </Link>
              </div>
              <div className="flow-root">
                <Link to="/tracking" className="-m-2 block p-2 font-medium text-foreground" onClick={() => setIsMenuOpen(false)}>
                  Suivre ma commande
                </Link>
              </div>
              <div className="flow-root">
                <button 
                  onClick={() => setLang(lang === 'FR' ? 'AR' : 'FR')}
                  className="-m-2 block p-2 font-medium text-foreground"
                >
                  Langue: {lang === 'FR' ? 'Français' : 'العربية'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
