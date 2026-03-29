import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-secondary flex items-center justify-center">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-neutral-200 object-cover w-full h-full opacity-50" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-primary mb-6"
          >
            Spoonky_Store
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary/80 mb-8 max-w-xl text-balance"
          >
            La mode moderne, accessible partout en Algérie. Découvrez notre nouvelle collection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              Découvrir <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4 text-primary">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Livraison 58 Wilayas</h3>
              <p className="text-sm text-muted-foreground">Rapide et sécurisée partout en Algérie.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Paiement à la livraison</h3>
              <p className="text-sm text-muted-foreground">Payez en espèces à la réception (COD).</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4 text-primary">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Échange Facile</h3>
              <p className="text-sm text-muted-foreground">Un problème de taille ? Échange garanti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Entry Blocks */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold tracking-tighter uppercase">Catégories</h2>
            <Link to="/shop" className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Voir tout
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Women */}
            <Link to="/category/women" className="group relative h-[60vh] overflow-hidden rounded-2xl bg-secondary flex items-end p-8">
              <div className="absolute inset-0 bg-neutral-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 w-full flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Femme</h3>
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
            
            {/* Men */}
            <Link to="/category/men" className="group relative h-[60vh] overflow-hidden rounded-2xl bg-secondary flex items-end p-8">
              <div className="absolute inset-0 bg-neutral-300 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 w-full flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Homme</h3>
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
            
            {/* Kids */}
            <Link to="/category/kids" className="group relative h-[60vh] overflow-hidden rounded-2xl bg-secondary flex items-end p-8">
              <div className="absolute inset-0 bg-neutral-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 w-full flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Enfant</h3>
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter uppercase mb-6">L'Esprit Spoonky</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Né de la passion pour la mode urbaine et contemporaine, Spoonky_Store s'engage à vous offrir des pièces uniques, 
            alliant confort et style. Nous croyons que la qualité ne devrait pas être un luxe, c'est pourquoi nous 
            sélectionnons nos collections avec soin pour le marché algérien.
          </p>
          <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            Notre Histoire
          </Link>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter uppercase text-center mb-12">Ils nous font confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-secondary/50 border border-border">
                <div className="flex text-yellow-500 mb-4">
                  {'âââââ'}
                </div>
                <p className="text-sm text-foreground mb-4 italic">
                  "Excellente qualité et livraison super rapide à Oran. Le paiement à la livraison est un vrai plus !"
                </p>
                <p className="text-xs font-bold uppercase text-muted-foreground">- Client Vérifié</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
