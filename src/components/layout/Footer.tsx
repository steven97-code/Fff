import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter uppercase">Spoonky_Store</h3>
            <p className="text-sm text-muted-foreground">
              La mode moderne, accessible partout en Algérie.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+213 555 00 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@spoonkystore.dz</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Alger, Algérie</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-sm">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Boutique</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">Notre Histoire</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contactez-nous</Link></li>
              <li><Link to="/tracking" className="hover:text-foreground transition-colors">Suivre ma commande</Link></li>
              <li><Link to="/admin" className="hover:text-primary text-primary/50 transition-colors font-medium">Espace Admin</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-sm">Service Client</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/faq#delivery" className="hover:text-foreground transition-colors">Livraison & Retours</Link></li>
              <li><Link to="/faq#payment" className="hover:text-foreground transition-colors">Paiement à la livraison</Link></li>
              <li><Link to="/faq#sizes" className="hover:text-foreground transition-colors">Guide des tailles</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Inscrivez-vous pour recevoir nos offres exclusives.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                OK
              </button>
            </form>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Spoonky_Store. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Paiement à la livraison (COD)
            </span>
            <span>Livraison 58 Wilayas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
