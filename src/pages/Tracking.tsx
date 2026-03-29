import { useState, FormEvent } from 'react';
import { Search, Package, CheckCircle2, Truck, Home } from 'lucide-react';

export default function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<boolean | null>(null);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setResult(true); // Always show success for demo
    }, 1500);
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-secondary flex items-center justify-center border-b border-border">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-primary mb-6">
            Suivi de Commande
          </h1>
          <p className="text-lg md:text-xl text-primary/80 max-w-xl text-balance">
            Entrez votre numéro de commande pour suivre l'état de votre livraison.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Form */}
          <div className="bg-secondary/30 p-8 sm:p-12 rounded-3xl border border-border mb-16">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input 
                  type="text" 
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Ex: SPK-00123" 
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-lg font-medium tracking-wider"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSearching}
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSearching ? 'Recherche...' : 'Suivre'}
              </button>
            </form>
          </div>

          {/* Tracking Result */}
          {result && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">Commande {trackingNumber}</h2>
                <p className="text-muted-foreground">Statut actuel : En cours de livraison</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-start sm:justify-end sm:pr-1/2 w-full">
                    <div className="absolute left-6 sm:left-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10 text-primary-foreground shadow-lg">
                      <Package className="h-5 w-5" />
                    </div>
                    <div className="ml-16 sm:ml-0 sm:mr-16 bg-secondary/50 p-6 rounded-2xl border border-border w-full sm:w-[calc(100%-4rem)] max-w-sm">
                      <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Commande Confirmée</h3>
                      <p className="text-xs text-muted-foreground">Votre commande a été traitée avec succès.</p>
                      <span className="text-xs font-medium mt-3 block text-primary">28 Mars 2026, 10:30</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-start sm:justify-start sm:pl-1/2 w-full">
                    <div className="absolute left-6 sm:left-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10 text-primary-foreground shadow-lg">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div className="ml-16 sm:ml-16 bg-secondary/50 p-6 rounded-2xl border border-primary/20 w-full sm:w-[calc(100%-4rem)] max-w-sm shadow-md">
                      <h3 className="font-bold uppercase tracking-wider text-sm mb-1">En cours de livraison</h3>
                      <p className="text-xs text-muted-foreground">Le livreur est en route vers votre adresse.</p>
                      <span className="text-xs font-medium mt-3 block text-primary">29 Mars 2026, 08:15</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-start sm:justify-end sm:pr-1/2 w-full opacity-50">
                    <div className="absolute left-6 sm:left-1/2 w-12 h-12 bg-background border-2 border-border rounded-full flex items-center justify-center -translate-x-1/2 z-10 text-muted-foreground">
                      <Home className="h-5 w-5" />
                    </div>
                    <div className="ml-16 sm:ml-0 sm:mr-16 bg-secondary/30 p-6 rounded-2xl border border-border w-full sm:w-[calc(100%-4rem)] max-w-sm">
                      <h3 className="font-bold uppercase tracking-wider text-sm mb-1">Livré</h3>
                      <p className="text-xs text-muted-foreground">Colis remis au client. Paiement effectué.</p>
                      <span className="text-xs font-medium mt-3 block text-muted-foreground">En attente</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
