
import React from 'react';

export type LegalType = 'privacy' | 'terms' | 'cookies' | 'allergy' | 'service' | null;

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    content: [
      "At Flava25, we value your privacy.",
      "We collect data only to process your delicious orders and improve our local service.",
      "We never sell your data to third parties.",
      "Your payment info is processed via secure, encrypted gateways."
    ]
  },
  terms: {
    title: "Food Ordering Terms",
    content: [
      "Delivery times are estimates. Peak times may vary.",
      "Minimum order for delivery is £15.",
      "Table service fee of £1.95 applies for dine-in.",
      "All our meat is 100% Halal certified."
    ]
  },
  cookies: {
    title: "Cookie Policy",
    content: [
      "We use functional cookies to remember your favorite burgers and analytical cookies to see how our local customers interact with our site.",
      "You can manage these at any time through your browser settings."
    ]
  },
  allergy: {
    title: "Allergy & Dietary Information",
    content: [
      "IMPORTANT: Please Inform Staff Before Ordering. If you have a food allergy, intolerance, or sensitivity, please speak to a member of our team before placing your order.",
      "Cross-Contamination Disclaimer: Our kitchen is a busy environment that handles multiple allergens.",
      "While we take extreme care, we cannot guarantee that any dish is 100% allergen-free.",
      "Ingredient Notes: Our Halloumi cheese is made from pasteurized sheep and goat milk."
    ]
  },
  service: {
    title: "Terms and Conditions of Service",
    content: [
      "Last Updated: March 2025",
      "Business Name: Flava25",
      "",
      "1. Introduction",
      "By accessing our website/app and placing an order, you agree to be bound by these Terms and Conditions.",
      "",
      "2. Ordering",
      "Capacity: By placing an order, you confirm that you are at least 18 years old.",
      "",
      "6. Quality Issues",
      "If you are unsatisfied with the quality of your meal, you must contact our branch immediately on +44 1384 560831.",
      "",
      "Contact Us",
      "If you have any questions regarding these Terms, please contact us at:",
      "Address: 175 Halesowen Rd, Old Hill, Cradley Heath B64 6HE, United Kingdom",
      "Phone: +44 1384 560831"
    ]
  }
};

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const data = LEGAL_CONTENT[type as keyof typeof LEGAL_CONTENT];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fadeIn"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-slideInUp max-h-[80vh] flex flex-col">
        <div className="bg-orange-600 p-8 text-white flex justify-between items-center">
          <h2 className="text-3xl font-black uppercase tracking-tight oswald">{data.title}</h2>
          <button 
            onClick={onClose}
            className="bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-600 text-lg leading-relaxed italic mb-8">
              Last Updated: January 2026
            </p>
            <div className="space-y-6 text-neutral-800 font-medium">
              {data.content.map((paragraph, i) => (
                <p key={i} className={paragraph === "" ? "h-2" : ""}>{paragraph}</p>
              ))}
              <p>For further inquiries regarding {data.title}, please contact us directly at our branch or call +44 1384 560831.</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="mt-12 w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-orange-600 transition-colors shadow-xl"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
