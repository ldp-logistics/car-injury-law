import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does it cost to hire a car accident lawyer?",
    answer: "It costs you nothing upfront. We work on a contingency fee basis, which means our fee is a percentage of the settlement or verdict we win for you. If we don't win, you don't pay us a dime. This ensures everyone has access to top-tier legal representation regardless of their financial situation."
  },
  {
    question: "How much is my car accident case worth?",
    answer: "Every case is unique. The value depends on several factors including the severity of your injuries, medical bills, lost wages, pain and suffering, and insurance policy limits. During your free consultation, we can give you a better estimate based on the specific details of your accident."
  },
  {
    question: "The insurance company offered me a check. Should I take it?",
    answer: "Do not sign anything or accept payment without speaking to an attorney first. Insurance companies often offer quick, low-ball settlements hoping you'll accept before you realize the full extent of your injuries. Once you settle, you cannot ask for more money later."
  },
  {
    question: "How long do I have to file a claim?",
    answer: "Strict time limits (statutes of limitations) apply to injury claims. In many states, you have 2 years, but some are as short as 1 year. If you miss this deadline, you lose your right to compensation forever. It is critical to start the process immediately."
  },
  {
    question: "What if the other driver doesn't have insurance?",
    answer: "You still have options. You may be able to file a claim under your own Uninsured Motorist (UM) coverage. We can help investigate all possible sources of compensation to ensure your bills are covered."
  }
];

export function FaqSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 font-serif">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg px-6 bg-gray-50/50">
              <AccordionTrigger className="text-left font-bold text-lg text-primary hover:text-secondary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}