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

DESC_TEMPLATES = [
    "Experienced {keyword} fighting for victims. Free 24/7 case reviews. No fees unless we win. We maximize your settlement for a full recovery.",
    "Need a {keyword}? Our team specializes in accident claims. Free consultation 24/7. No upfront costs. We fight for the maximum compensation.",
    "{keyword} advocates. Free 24/7 consultation and no-fee promise. We handle insurance companies so you can focus on healing. Call now for help."
]

def generate_description(keyword):
    template = random.choice(DESC_TEMPLATES)
    desc = template.replace("{keyword}", keyword)
    if len(desc) > 155:
        desc = desc[:152] + "..."
    return desc

def generate_content_blocks(keyword):
    k_hash = sum(ord(c) for c in keyword)
    
    why_choose = generate_sentence(WHY_CHOOSE_TEMPLATES, keyword)
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

def generate_sentence(templates, keyword):
    template = random.choice(templates)
    return template.replace("{keyword}", keyword)

def get_closing_brace(text, start_pos):
    count = 0
    for i in range(start_pos, len(text)):
        if text[i] == '{':
            count += 1
        elif text[i] == '}':
            count -= 1
            if count == 0:
                return i
    return -1

def process_file(filename):
    path = os.path.join(BASE_PATH, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find each top-level object in the array
    # They start with { slug:
    new_content = ""
    last_end = 0
    
    # regex for start of an object
    for match in re.finditer(r'\{\s*slug:', content):
        start = match.start()
        new_content += content[last_end:start]
        
        end = get_closing_brace(content, start)
        if end == -1:
            print(f"Brace mismatch in {filename} at {start}")
            new_content += content[start:]
            last_end = len(content)
            break
            
        item_text = content[start:end+1]
        
        # Extract keyword
        kw_match = re.search(r'keyword:\s*["\'](.*?)["\']', item_text)
        if kw_match:
            keyword = kw_match.group(1)
            
            # 1. Update/Add H1
            if 'h1:' not in item_text:
                item_text = re.sub(r'keyword:', f'h1: "{keyword.title()} — Maximum Compensation For You", keyword:', item_text)
            
            # 2. Update Description
            new_desc = generate_description(keyword)
            item_text = re.sub(r'description:\s*["\'].*?["\']', f'description: "{new_desc}"', item_text)
            
            # 3. Update Content Blocks
            blocks = generate_content_blocks(keyword)
            cb_str = "contentBlocks: {\n"
            cb_str += f'      whyChoose: `{blocks["whyChoose"].replace("`", "\\`")}`,\n'
            cb_str += f'      howWeHelp: `{blocks["howWeHelp"].replace("`", "\\`")}`,\n'
            cb_str += '      faqs: [\n'
            for faq in blocks["faqs"]:
                cb_str += '        {\n'
                cb_str += f'          question: `{faq["question"].replace("`", "\\`")}`,\n'
                cb_str += f'          answer: `{faq["answer"].replace("`", "\\`")}`\n'
                cb_str += '        },\n'
            cb_str = cb_str.rstrip(',\n') + '\n      ]\n    }'
            
            # Remove old contentBlocks if any
            item_text = re.sub(r',\s*contentBlocks:\s*\{.*?\}\s*(?=\s*internalLinks|(?:\s*\}\s*,?\s*))', '', item_text, flags=re.DOTALL)
            # Re-insert before internalLinks or at end
            if 'internalLinks:' in item_text:
                item_text = re.sub(r'internalLinks:', f'{cb_str},\n    internalLinks:', item_text)
            else:
                item_text = item_text.rstrip('}') + f',    {cb_str}\n  }}'

        new_content += item_text
        last_end = end + 1
        
    new_content += content[last_end:]
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Processed {filename}")

if __name__ == "__main__":
    for f in FILES:
        process_file(f)
