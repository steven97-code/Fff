import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-secondary flex items-center justify-center border-b border-border">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-primary mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl text-primary/80 max-w-xl text-balance">
            Une question ? Un problème ? Nous sommes là pour vous aider.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter uppercase">Nos Coordonnées</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  N'hésitez pas à nous contacter via l'un des moyens suivants. 
                  Notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Téléphone</h3>
                    <p className="text-muted-foreground">+213 555 00 00 00</p>
                    <p className="text-sm text-muted-foreground mt-1">Du Dimanche au Jeudi, de 9h à 17h.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground">+213 555 00 00 00</p>
                    <p className="text-sm text-muted-foreground mt-1">Réponse rapide garantie.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Email</h3>
                    <p className="text-muted-foreground">contact@spoonkystore.dz</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Adresse</h3>
                    <p className="text-muted-foreground">Alger, Algérie</p>
                    <p className="text-sm text-muted-foreground mt-1">Boutique en ligne uniquement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary/30 p-8 sm:p-12 rounded-3xl border border-border">
              <h2 className="text-2xl font-bold tracking-tighter uppercase mb-8">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="votre@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Sujet de votre message" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Envoyer le message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
