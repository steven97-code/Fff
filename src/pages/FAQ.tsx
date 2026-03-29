import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quels sont les délais de livraison en Algérie ?",
      answer: "Pour Alger et ses environs, la livraison prend généralement entre 24h et 48h. Pour les autres wilayas, comptez entre 2 et 5 jours ouvrables selon la destination."
    },
    {
      question: "Comment fonctionne le paiement à la livraison (COD) ?",
      answer: "C'est très simple ! Vous passez votre commande sur notre site sans rien payer. Vous réglerez le montant total en espèces directement au livreur lorsqu'il vous remettra votre colis."
    },
    {
      question: "Puis-je échanger un article s'il ne me convient pas ?",
      answer: "Oui, absolument. Vous disposez de 3 jours après la réception de votre commande pour demander un échange (problème de taille ou de couleur). L'article doit être retourné dans son état d'origine, non porté et avec ses étiquettes."
    },
    {
      question: "Livrez-vous dans les 58 wilayas ?",
      answer: "Oui, nous travaillons avec des partenaires logistiques fiables pour assurer la livraison dans les 58 wilayas d'Algérie."
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer: "Une fois votre commande expédiée, vous recevrez un SMS ou un appel de notre livreur. Vous pouvez également utiliser la page 'Suivre ma commande' sur notre site avec votre numéro de commande."
    },
    {
      question: "Quels sont les frais de livraison ?",
      answer: "Les frais de livraison varient selon la wilaya. Ils sont calculés automatiquement lors de la validation de votre panier avant la confirmation finale."
    }
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-secondary flex items-center justify-center border-b border-border">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-primary mb-6">
            F.A.Q
          </h1>
          <p className="text-lg md:text-xl text-primary/80 max-w-xl text-balance">
            Questions Fréquemment Posées
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-border rounded-2xl overflow-hidden bg-secondary/30 transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-bold tracking-tight">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Vous n'avez pas trouvé votre réponse ?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
