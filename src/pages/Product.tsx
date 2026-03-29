import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Share2, Truck, ShieldCheck, ArrowLeft, Plus, Minus, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function Product() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center text-xs text-muted-foreground uppercase tracking-wider font-medium">
          <Link to="/" className="hover:text-foreground transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 mx-2" />
          <Link to="/shop" className="hover:text-foreground transition-colors">Boutique</Link>
          <ChevronRight className="h-3 w-3 mx-2" />
          <span className="text-foreground">Nom du produit</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Product Images Placeholder */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-secondary rounded-2xl overflow-hidden relative group">
              {/* Main Image Placeholder */}
              <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-muted-foreground uppercase tracking-widest text-sm font-bold">
                Image Principale
              </div>
              <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-full text-foreground hover:bg-white transition-colors shadow-sm">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-secondary rounded-xl overflow-hidden relative cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-border">
                  <div className="absolute inset-0 bg-neutral-200" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4 lg:pt-12">
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase">Nom du Produit</h1>
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <p className="text-2xl font-medium mb-4">4,500 DZD</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Description courte du produit. Conçu pour le confort et le style. Idéal pour toutes les occasions. 
                Tissu de haute qualité, coupe moderne.
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider">Taille</h3>
                <Link to="/faq#sizes" className="text-xs text-muted-foreground underline hover:text-foreground transition-colors">Guide des tailles</Link>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium rounded-xl border transition-all ${
                      selectedSize === size 
                        ? 'border-primary bg-primary text-primary-foreground shadow-md' 
                        : 'border-border hover:border-primary/50 hover:bg-secondary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Quantité</h3>
              <div className="flex items-center border border-border rounded-xl w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 mb-12">
              <button className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Ajouter au panier
              </button>
              <p className="text-center text-xs text-muted-foreground font-medium flex items-center justify-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                Paiement à la livraison disponible (COD)
              </p>
            </div>

            {/* Accordions / Info Blocks */}
            <div className="border-t border-border divide-y divide-border">
              <div className="py-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Livraison
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Livraison disponible sur les 58 wilayas.</li>
                  <li>Alger et environs : 24h à 48h.</li>
                  <li>Autres wilayas : 2 à 5 jours ouvrables.</li>
                  <li>Frais de livraison calculés à la caisse.</li>
                </ul>
              </div>
              <div className="py-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Retours & Échanges
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vous avez 3 jours après réception pour demander un échange de taille ou de couleur. 
                  L'article doit être dans son état d'origine avec étiquettes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
