import FAQSection from "@/app/components/support/FAQSection";
import ContactForm from "@/app/components/support/ContactForm";
import SupportContacts from "@/app/components/support/SupportContacts";

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">FAQ и поддержка</h1>
      
      <div className="space-y-12">
        <FAQSection />
        
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <SupportContacts />
        </div>
      </div>
    </div>
  );
} 