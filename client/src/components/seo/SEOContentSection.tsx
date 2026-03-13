import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface SEOContentSectionProps {
  whyChoose: string;
  howWeHelp: string;
  faqs: FAQ[];
  keyword: string;
}

const SEOContentSection: React.FC<SEOContentSectionProps> = ({ whyChoose, howWeHelp, faqs, keyword }) => {
  return (
    <div className="mt-16 space-y-16 border-t pt-16">
      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 border-l-4 border-primary pl-4">
            Why Choose Us for Your {keyword} Case?
          </h2>
          <div className="text-lg leading-8 text-gray-600 space-y-4">
            {whyChoose.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 border-l-4 border-primary pl-4">
            How Our {keyword} Attorneys Can Help
          </h2>
          <div className="text-lg leading-8 text-gray-600 space-y-4">
            {howWeHelp.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions About {keyword}
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Common questions our clients ask about their {keyword.toLowerCase()} claims.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto border rounded-xl overflow-hidden bg-white shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="px-6 border-b last:border-0 hover:bg-gray-50 transition-colors">
              <AccordionTrigger className="text-left font-semibold text-gray-900 py-6 hover:no-underline">
                <span className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6 pl-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default SEOContentSection;
