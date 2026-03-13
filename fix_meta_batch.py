import re
import os

files = [
    'client/src/data/service-synonym-pages.ts',
    'client/src/data/near-me-pages.ts',
    'client/src/data/practice-area-pages.ts',
    'client/src/data/best-pages.ts',
    'client/src/data/state-specific-pages.ts'
]

def fix_description(desc, keyword):
    desc = desc.strip()
    if desc.endswith('...'):
        desc = desc[:-3].strip()
        if not desc.endswith('.'):
            desc += '.'
    
    # Suffixes
    s1 = f"Contact our {keyword} team for an aggressive case review today."
    s2 = "We handle insurance companies so you can focus on healing."
    s3 = "Zero costs unless we win your case. Call our legal team now."
    s4 = "Available 24/7."
    s5 = "Professional legal help for your accident claim."

    res = desc
    if not res.endswith('.'): res += '.'
    
    # If already good, return
    if 130 <= len(res) <= 155 and not res.endswith('...'):
        return res

    for s in [s1, s2, s3, s4, s5]:
        if 130 <= len(res) <= 155: break
        if len(res) + len(s) + 1 <= 155:
            res += " " + s
        else:
            # If a suffix is too long, maybe we can find a shorter one
            continue
            
    # Final trim if still somehow too long (shouldn't happen)
    if len(res) > 155:
        res = res[:152].strip() + "."
        
    return res

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find each object block. We'll look for slug then description then keyword.
    # Since the structure is consistent, we can split by objects.
    # Objects start with { and end with } and contain a slug.
    
    # Use a regex that matches balanced braces for the top level objects in the array
    # This is a bit complex for regex, so let's use a simpler approach:
    # Match the description line and look backwards/forwards for keyword.
    
    def replacer(match):
        full_line = match.group(0)
        description = match.group(1)
        
        # Look for keyword in the surrounding context (the whole file is too big, let's look at the slice)
        # But wait, we can just find all occurrences of keyword/description pairs.
        
        return full_line # Fallback
    
    # Let's find each object by splitting on "  {" at the start of a line
    parts = re.split(r'\n  \{', content)
    new_parts = [parts[0]]
    
    for part in parts[1:]:
        # Part looks like: \n    slug: "...", \n    keyword: "...", \n    description: "...", ... }
        kw_m = re.search(r'keyword:\s*"([^"]+)"', part)
        ds_m = re.search(r'description:\s*"([^"]+)"', part)
        
        if kw_m and ds_m:
            keyword = kw_m.group(1)
            description = ds_m.group(1)
            
            if description.endswith('...') or len(description) < 130 or len(description) > 155:
                new_desc = fix_description(description, keyword)
                # Use a specific replace that only targets the description field to avoid accidents
                part = part.replace(f'description: "{description}"', f'description: "{new_desc}"')
        
        new_parts.append(part)
        
    new_content = "\n  {".join(new_parts)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

for f in files:
    process_file(f)

print("\nDone fixing meta descriptions!")
