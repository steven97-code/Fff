import { User, Package, Settings, LogOut } from 'lucide-react';

export default function Account() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] w-full overflow-hidden bg-secondary flex items-center justify-center border-b border-border">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-primary mb-2">
            Mon Compte
          </h1>
          <p className="text-lg text-primary/80 max-w-xl text-balance">
            Bienvenue, Client
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-secondary text-foreground font-medium rounded-xl transition-colors">
                <User className="h-5 w-5" /> Profil
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary/50 hover:text-foreground font-medium rounded-xl transition-colors">
                <Package className="h-5 w-5" /> Commandes
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-secondary/50 hover:text-foreground font-medium rounded-xl transition-colors">
                <Settings className="h-5 w-5" /> Paramètres
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 font-medium rounded-xl transition-colors mt-8">
                <LogOut className="h-5 w-5" /> Déconnexion
              </button>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-3">
              <div className="bg-secondary/30 p-8 rounded-3xl border border-border">
                <h2 className="text-2xl font-bold tracking-tighter uppercase mb-8">Informations Personnelles</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                      <input type="text" id="firstName" defaultValue="Client" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                      <input type="text" id="lastName" defaultValue="Test" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input type="email" id="email" defaultValue="client@example.com" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                      <input type="tel" id="phone" defaultValue="0555 00 00 00" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <button type="button" className="px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                      Enregistrer les modifications
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
