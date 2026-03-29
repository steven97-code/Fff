import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function Cart() {
  // Empty state for now
  const isEmpty = true;

  if (isEmpty) {
    return (
      <div className="w-full bg-background min-h-[70vh] flex flex-col items-center justify-center py-24 px-4">
        <div className="h-24 w-24 bg-secondary rounded-full flex items-center justify-center mb-8 text-muted-foreground">
          <ShoppingBag className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter uppercase mb-4 text-center">Votre panier est vide</h1>
        <p className="text-muted-foreground max-w-md text-center mb-8 text-balance">
          Découvrez notre nouvelle collection et trouvez la pièce parfaite pour votre style.
        </p>
        <Link 
          to="/shop" 
          className="px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
        >
          Continuer vos achats <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tighter uppercase mb-12">Mon Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {/* Example Item */}
            <div className="flex gap-6 py-6 border-b border-border">
              <div className="w-24 h-32 bg-secondary rounded-xl overflow-hidden flex-shrink-0 relative">
                <div className="absolute inset-0 bg-neutral-200" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold uppercase tracking-wider">Nom du Produit</h3>
                    <button className="text-muted-foreground hover:text-destructive transition-colors p-2">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Taille: M</p>
                  <p className="text-sm text-muted-foreground">Couleur: Noir</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-border rounded-lg w-28 h-10">
                    <button className="flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="flex-1 text-center font-medium text-sm">1</span>
                    <button className="flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <p className="font-bold text-lg">4,500 DZD</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/50 rounded-2xl p-8 sticky top-24 border border-border">
              <h2 className="text-xl font-bold tracking-tighter uppercase mb-6">Résumé de la commande</h2>
              
              <div className="space-y-4 text-sm mb-6 border-b border-border pb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-medium">4,500 DZD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className="text-xs italic text-muted-foreground">Calculée à l'étape suivante</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold uppercase tracking-wider">Total</span>
                <span className="text-2xl font-bold">4,500 DZD</span>
              </div>
              
              <Link 
                to="/checkout" 
                className="w-full py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Passer à la caisse <ArrowRight className="h-4 w-4" />
              </Link>
              
              <p className="text-center text-xs text-muted-foreground mt-6 font-medium">
                Paiement sécurisé à la livraison (COD)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
