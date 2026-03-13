import json
import os
import random
import re

# Paths to the data files
BASE_PATH = r"c:\Users\User\.gemini\antigravity\scratch\car-injury-law\client\src\data"
FILES = [
    "service-synonym-pages.ts",
    "near-me-pages.ts",
    "practice-area-pages.ts",
    "best-pages.ts",
    "state-specific-pages.ts"
]

def generate_sentence(templates, keyword):
    template = random.choice(templates)
    return template.replace("{keyword}", keyword)

WHY_CHOOSE_TEMPLATES = [
    "Our network of {keyword} experts has a proven track record of recovering millions for accident victims. We understand the specific challenges you face when dealing with {keyword} cases and provide aggressive representation to ensure you get every dollar you deserve. Choosing the right legal team can make all the difference in the outcome of your claim.",
    "When you hire us to handle your {keyword} claim, you are getting more than just a lawyer; you are getting a dedicated team of professionals who will fight tirelessly for your rights. We have extensive experience in {keyword} litigation and a reputation for excellence that insurance companies respect and fear.",
    "Experience matters when it's your life on the line. Our {keyword} attorneys have decades of combined experience navigating the complexities of the legal system. We offer a no-win, no-fee guarantee, so you can focus on your recovery while we handle the heavy lifting of your {keyword} case.",
    "We provide personalized attention to every {keyword} victim we represent. Unlike large firms where you might just be a case number, we take the time to understand your unique situation and build a tailored legal strategy for your {keyword} claim to maximize your compensation.",
    "Superior legal expertise is essential for successful {keyword} outcomes. Our firm utilizes state-of-the-art investigative tools and partners with top-tier medical and accident reconstruction experts to build the strongest possible case for your {keyword} damages."
]

HOW_WE_HELP_TEMPLATES = [
    "From the moment you contact us about your {keyword}, we begin a comprehensive investigation into the facts of your case. We gather evidence, interview witnesses, and handle all communications with insurance adjusters so you don't have to. Our goal is to secure the maximum settlement possible for your {keyword} injuries.",
    "Our {keyword} attorneys will meticulously evaluate your medical records and financial losses to determine the true value of your claim. We then build an irrefutable case and negotiate fiercely with the insurance company. If they refuse to offer a fair settlement for your {keyword}, we are fully prepared to take your case to trial.",
    "We simplify the complex legal process for {keyword} victims. We'll guide you through every step of your claim, from filing the initial paperwork to final resolution. Our team ensures that all deadlines are' met and that your rights as a {keyword} victim are protected at all times.",
    "Comprehensive legal support is what we offer for every {keyword} case. This includes coordinating with your medical providers, managing your bills, and even helping you find the right specialists for your recovery. We want to ensure that your {keyword} claim is handled with the utmost care and professionalism.",
    "We use aggressive litigation strategies to hold negligent parties accountable for your {keyword}. Our team is well-versed in the latest legal precedents and local court procedures, giving you a distinct advantage in your {keyword} lawsuit."
]

FAQ_TEMPLATES = [
    [
        ("How much is my {keyword} case worth?", "The value of a {keyword} claim depends on several factors, including the severity of your injuries, the amount of medical bills, lost wages, and the impact on your quality of life. During your free consultation, we will evaluate these elements to provide an estimate."),
        ("How long do I have to file a {keyword} claim?", "The timeframe is determined by the statute of limitations in your state. Waiting too long can permanently bar you from recovering damages. It is critical to consult a {keyword} attorney as soon as possible after the incident."),
        ("What if I am partially at fault for my {keyword}?", "Many states follow comparative negligence rules, meaning you may still be able to recover compensation even if you are partially responsible. However, your payout may be reduced by your percentage of fault. We will fight to minimize any liability assigned to you.")
    ],
    [
        ("Do I really need a lawyer for a {keyword}?", "Insurance companies are incentivized to pay as little as possible. Having an experienced {keyword} attorney ensures that you have a professional advocate who understands the law and can negotiate for a much higher settlement than you could on your own."),
        ("What will it cost to hire an attorney for my {keyword}?", "We work on a contingency fee basis, which means you pay nothing up front. We only get paid if we successfully recover money for your {keyword} case. This allows everyone to access high-quality legal representation."),
        ("What should I do immediately after a {keyword}?", "First, seek medical attention. Then, document the scene if possible and avoid speaking to insurance adjusters until you have consulted with a {keyword} specialist. Protecting evidence early is vital.")
    ],
    [
        ("Will my {keyword} case go to trial?", "While many {keyword} claims are settled out of court, we prepare every case as if it is going to trial. This aggressive stance often forces the insurance company to offer a fair settlement to avoid the risks and costs of a courtroom battle."),
        ("What documents do I need for my {keyword} claim?", "You should keep records of medical bills, police reports, proof of lost wages, and any correspondence from insurance companies. Your {keyword} lawyer will help you gather and organize all necessary documentation."),
        ("How long does a {keyword} lawsuit take?", "The duration varies depending on the complexity of the case and the willingness of the insurance company to negotiate. Some settle in months, while complex {keyword} litigation can take a year or more. We strive for a timely yet thorough resolution.")
    ]
]

def generate_content_blocks(keyword):
    # Select unique templates by shifting based on keyword hash to ensure consistency but uniqueness
    k_hash = hash(keyword)
    
    why_choose = generate_sentence(WHY_CHOOSE_TEMPLATES, keyword)
    # Add a second paragraph for depth
    why_choose += "\n\n" + generate_sentence([t for t in WHY_CHOOSE_TEMPLATES if t[:10] != why_choose[:10]], keyword)
    
    how_we_help = generate_sentence(HOW_WE_HELP_TEMPLATES, keyword)
    how_we_help += "\n\n" + generate_sentence([t for t in HOW_WE_HELP_TEMPLATES if t[:10] != how_we_help[:10]], keyword)
    
    faq_set = FAQ_TEMPLATES[k_hash % len(FAQ_TEMPLATES)]
    faqs = []
    for q, a in faq_set:
        faqs.append({
            "question": q.replace("{keyword}", keyword),
            "answer": a.replace("{keyword}", keyword)
        })
    
    return {
        "whyChoose": why_choose,
        "howWeHelp": how_we_help,
        "faqs": faqs
    }

def process_file(filename):
    path = os.path.join(BASE_PATH, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the array declaration
    # We look for something like: export const SOME_ARRAY: SomeType[] = [
    match = re.search(r'(export const \w+: \w+\[\] = \[\s*)(.*?)(\s*\];)', content, re.DOTALL)
    if not match:
        print(f"Could not find array in {filename}")
        return

    prefix, items_text, suffix = match.groups()
    
    # Split items by looking for closing braces and commas
    # This is a bit naive but should work for this specific file structure
    items = re.split(r'\},?\s*\{', items_text)
    
    new_items = []
    for i, item in enumerate(items):
        if i == 0:
            item = item.strip()
            if item.startswith('{'): item = item[1:]
        if i == len(items) - 1:
            item = item.strip()
            if item.endswith('}'): item = item[:-1]
        
        # Extract keyword
        kw_match = re.search(r'keyword:\s*["\'](.*?)["\']', item)
        if not kw_match:
            new_items.append(f"{{{item}}}")
            continue
        
        keyword = kw_match.group(1)
        content_blocks = generate_content_blocks(keyword)
        
        # Check if contentBlocks already exists (it shouldn't yet in full form)
        if "contentBlocks:" in item:
            new_items.append(f"{{{item}}}")
            continue
        
        # Construct the new content block string
        cb_str = ",\n    contentBlocks: {\n"
        cb_str += f'      whyChoose: "{content_blocks["whyChoose"].replace("\"", "\\\"").replace("\\n", "\\\\n")}",\n'
        cb_str += f'      howWeHelp: "{content_blocks["howWeHelp"].replace("\"", "\\\"").replace("\\n", "\\\\n")}",\n'
        cb_str += '      faqs: [\n'
        for faq in content_blocks["faqs"]:
            cb_str += '        {\n'
            cb_str += f'          question: "{faq["question"].replace("\"", "\\\"")}",\n'
            cb_str += f'          answer: "{faq["answer"].replace("\"", "\\\"")}"\n'
            cb_str += '        },\n'
        cb_str = cb_str.rstrip(',\n') + '\n      ]\n    }'
        
        new_items.append(f"{{{item}{cb_str}}}")

    new_content = prefix + ",\n  ".join(new_items) + suffix
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Processed {filename}")

if __name__ == "__main__":
    for f in FILES:
        process_file(f)
