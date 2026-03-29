import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary flex items-center justify-center">
        <div className="absolute inset-0 bg-neutral-200 object-cover w-full h-full opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-primary mb-6"
          >
            Notre Histoire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary/80 max-w-xl text-balance"
          >
            Spoonky_Store, plus qu'une marque, un style de vie.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter uppercase">L'Origine</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondé avec la vision de démocratiser la mode urbaine et contemporaine en Algérie, 
                Spoonky_Store est né d'une passion pour le design épuré et les matériaux de qualité. 
                Nous avons constaté un besoin pour des vêtements qui allient style international et 
                accessibilité locale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-secondary rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-200" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter uppercase">Notre Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Offrir à la jeunesse algérienne des pièces tendance, confortables et durables. 
                  Nous croyons que la mode est un moyen d'expression puissant, et nous voulons 
                  donner à chacun les moyens de s'exprimer sans compromis sur la qualité.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter uppercase">Pourquoi Nous Choisir ?</h2>
              <ul className="space-y-4 text-lg text-muted-foreground list-disc list-inside">
                <li><strong className="text-foreground">Qualité Supérieure :</strong> Des tissus sélectionnés avec soin pour durer.</li>
                <li><strong className="text-foreground">Design Moderne :</strong> Des coupes inspirées des dernières tendances mondiales.</li>
                <li><strong className="text-foreground">Service Client Dédié :</strong> Une équipe à votre écoute pour une expérience d'achat fluide.</li>
                <li><strong className="text-foreground">Livraison Rapide :</strong> Un réseau logistique couvrant les 58 wilayas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
