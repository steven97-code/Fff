import { useState } from 'react';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-4">Boutique</h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Découvrez notre collection complète. Filtrez par catégorie, taille ou prix pour trouver la pièce parfaite.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between border-b border-border pb-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filtres
          </button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Trier par</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0 space-y-8`}>
          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-border pb-2">Catégories</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center justify-between hover:text-foreground cursor-pointer transition-colors">
                <span>Tous les produits</span>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">0</span>
              </li>
              <li className="flex items-center justify-between hover:text-foreground cursor-pointer transition-colors">
                <span>Femme</span>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">0</span>
              </li>
              <li className="flex items-center justify-between hover:text-foreground cursor-pointer transition-colors">
                <span>Homme</span>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">0</span>
              </li>
              <li className="flex items-center justify-between hover:text-foreground cursor-pointer transition-colors">
                <span>Enfant</span>
                <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">0</span>
              </li>
            </ul>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-border pb-2">Tailles</h3>
            <div className="grid grid-cols-3 gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button key={size} className="border border-border rounded-md py-2 text-xs font-medium hover:border-primary hover:bg-secondary transition-colors">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-border pb-2">Prix (DZD)</h3>
            <div className="space-y-4">
              <input type="range" className="w-full accent-primary" min="0" max="20000" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>0 DZD</span>
                <span>20,000 DZD</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-border">
            <span className="text-sm text-muted-foreground">Affichage de 0 produits</span>
            <div className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:text-muted-foreground transition-colors">
              <span>Trier par: Nouveautés</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-24 text-center bg-secondary/30 rounded-2xl border border-dashed border-border">
            <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mb-6 text-muted-foreground">
              <Filter className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">Produits bientôt disponibles</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Notre nouvelle collection est en cours de préparation. Revenez très bientôt pour découvrir nos nouveautés.
            </p>
            <Link to="/" className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors">
              Retour à l'accueil
            </Link>
          </div>

          {/* Product Grid Placeholder (Hidden for now, ready for data) */}
          <div className="hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Example Product Card Structure */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-secondary rounded-xl overflow-hidden mb-3">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-neutral-200 transition-transform duration-500 group-hover:scale-105" />
                {/* Badge */}
                <div className="absolute top-2 left-2 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                  Nouveau
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium line-clamp-1">Nom du produit</h3>
                <p className="text-sm font-bold">4,500 DZD</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
