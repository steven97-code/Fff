import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full bg-background min-h-[70vh] flex flex-col items-center justify-center py-24 px-4">
        <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mb-8 text-green-600">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter uppercase mb-4 text-center">Commande Confirmée !</h1>
        <p className="text-muted-foreground max-w-md text-center mb-8 text-balance">
          Merci pour votre achat. Votre commande a été enregistrée avec succès. 
          Notre équipe vous contactera sous peu pour confirmer la livraison.
        </p>
        <div className="bg-secondary/50 p-6 rounded-2xl border border-border w-full max-w-md mb-8">
          <h3 className="font-bold uppercase tracking-wider text-sm mb-4 border-b border-border pb-2">Détails de la commande</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Numéro de commande</span>
              <span className="font-medium">#SPK-00123</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Méthode de paiement</span>
              <span className="font-medium">Paiement à la livraison (COD)</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t border-border mt-2">
              <span>Total à payer</span>
              <span>5,100 DZD</span>
            </div>
          </div>
        </div>
        <Link 
          to="/" 
          className="px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/cart" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour au panier
        </Link>
        
        <h1 className="text-3xl font-bold tracking-tighter uppercase mb-12">Finaliser la commande</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Contact Info */}
              <div className="bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-border">
                <h2 className="text-xl font-bold tracking-tighter uppercase mb-6 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">1</span>
                  Informations Personnelles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">Prénom *</label>
                    <input required type="text" id="firstName" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Nom *</label>
                    <input required type="text" id="lastName" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="phone" className="text-sm font-medium">Numéro de téléphone *</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="0550 00 00 00" />
                    <p className="text-xs text-muted-foreground mt-1">Nécessaire pour la confirmation de livraison.</p>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-border">
                <h2 className="text-xl font-bold tracking-tighter uppercase mb-6 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">2</span>
                  Adresse de Livraison
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="wilaya" className="text-sm font-medium">Wilaya *</label>
                    <select required id="wilaya" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none">
                      <option value="">Sélectionnez votre wilaya</option>
                      <option value="16">16 - Alger</option>
                      <option value="31">31 - Oran</option>
                      <option value="25">25 - Constantine</option>
                      {/* Add more wilayas */}
                    </select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="commune" className="text-sm font-medium">Commune *</label>
                    <input required type="text" id="commune" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Votre commune" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label htmlFor="address" className="text-sm font-medium">Adresse complète *</label>
                    <textarea required id="address" rows={3} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Numéro de rue, bâtiment, quartier..."></textarea>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-border">
                <h2 className="text-xl font-bold tracking-tighter uppercase mb-6 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">3</span>
                  Méthode de Paiement
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border-4 border-primary bg-white flex-shrink-0"></div>
                      <div>
                        <span className="font-bold uppercase tracking-wider text-sm block">Paiement à la livraison (COD)</span>
                        <span className="text-xs text-muted-foreground">Payez en espèces lorsque vous recevez votre commande.</span>
                      </div>
                    </div>
                    <ShieldCheck className="h-6 w-6 text-green-500" />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Confirmer la commande
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/50 rounded-2xl p-8 sticky top-24 border border-border">
              <h2 className="text-xl font-bold tracking-tighter uppercase mb-6">Résumé</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6 border-b border-border pb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-20 bg-background rounded-lg overflow-hidden flex-shrink-0 border border-border relative">
                    <div className="absolute inset-0 bg-neutral-200" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-sm font-bold uppercase tracking-wider line-clamp-1">Nom du Produit</h4>
                    <p className="text-xs text-muted-foreground">Taille: M | Qté: 1</p>
                    <p className="text-sm font-bold mt-1">4,500 DZD</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm mb-6 border-b border-border pb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-medium">4,500 DZD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Truck className="h-4 w-4" /> Livraison (Alger)
                  </span>
                  <span className="font-medium">600 DZD</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold uppercase tracking-wider">Total</span>
                <span className="text-2xl font-bold text-primary">5,100 DZD</span>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-green-800 font-medium leading-relaxed">
                  Votre commande est sécurisée. Vous ne payez rien maintenant. 
                  Le paiement se fera en espèces à la livraison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
