import os

def create_svg(path, width, height, title, subtitle, tag, filename_hint, icon_type="mic"):
    # SVG gradients and lighting definitions
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
  <defs>
    <radialGradient id="stageGlow" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#f5e5b8" stop-opacity="0.35"/>
      <stop offset="35%" stop-color="#d4af37" stop-opacity="0.2"/>
      <stop offset="70%" stop-color="#aa771c" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0a0a0e" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="spotlightLeft" cx="15%" cy="10%" r="55%">
      <stop offset="0%" stop-color="#d4af37" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#07070a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="spotlightRight" cx="85%" cy="15%" r="55%">
      <stop offset="0%" stop-color="#f3e5ab" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#07070a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3D1"/>
      <stop offset="40%" stop-color="#D4AF37"/>
      <stop offset="70%" stop-color="#AA771C"/>
      <stop offset="100%" stop-color="#E5C05B"/>
    </linearGradient>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#14141c"/>
      <stop offset="50%" stop-color="#0e0f14"/>
      <stop offset="100%" stop-color="#07070a"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,243,209,0.7)"/>
      <stop offset="50%" stop-color="rgba(212,175,55,0.3)"/>
      <stop offset="100%" stop-color="rgba(170,119,28,0.6)"/>
    </linearGradient>
    <filter id="goldDrop" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#d4af37" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="{width}" height="{height}" fill="url(#cardBg)"/>

  <!-- Stage Lighting Beams -->
  <rect width="{width}" height="{height}" fill="url(#stageGlow)"/>
  <rect width="{width}" height="{height}" fill="url(#spotlightLeft)"/>
  <rect width="{width}" height="{height}" fill="url(#spotlightRight)"/>

  <!-- Subtle Stage Grid & Sparkles -->
  <g opacity="0.15">
    <line x1="0" y1="0" x2="{width}" y2="{height}" stroke="#d4af37" stroke-width="0.5"/>
    <line x1="{width}" y1="0" x2="0" y2="{height}" stroke="#d4af37" stroke-width="0.5"/>
  </g>

  <!-- Sparkling Stars -->
  <g fill="#FFF3D1" opacity="0.6">
    <circle cx="{width * 0.18}" cy="{height * 0.22}" r="2"/>
    <circle cx="{width * 0.82}" cy="{height * 0.26}" r="2.5"/>
    <circle cx="{width * 0.25}" cy="{height * 0.72}" r="1.5"/>
    <circle cx="{width * 0.78}" cy="{height * 0.68}" r="2"/>
    <polygon points="{width * 0.18},{height * 0.22 - 6} {width * 0.18 + 2},{height * 0.22} {width * 0.18},{height * 0.22 + 6} {width * 0.18 - 2},{height * 0.22}"/>
    <polygon points="{width * 0.82},{height * 0.26 - 7} {width * 0.82 + 2},{height * 0.26} {width * 0.82},{height * 0.26 + 7} {width * 0.82 - 2},{height * 0.26}"/>
  </g>

  <!-- Elegant Decorative Inner Border -->
  <rect x="20" y="20" width="{width - 40}" height="{height - 40}" fill="none" stroke="url(#borderGrad)" stroke-width="1.5" rx="16"/>
  <rect x="28" y="28" width="{width - 56}" height="{height - 56}" fill="none" stroke="rgba(212,175,55,0.15)" stroke-width="1" rx="12"/>

  <!-- Corner Flourishes -->
  <path d="M 20 50 L 50 20 M 20 20 L 40 20 M 20 20 L 20 40" stroke="url(#goldGrad)" stroke-width="2" fill="none"/>
  <path d="M {width - 20} 50 L {width - 50} 20 M {width - 20} 20 L {width - 40} 20 M {width - 20} 20 L {width - 20} 40" stroke="url(#goldGrad)" stroke-width="2" fill="none"/>
  <path d="M 20 {height - 50} L 50 {height - 20} M 20 {height - 20} L 40 {height - 20} M 20 {height - 20} L 20 {height - 40}" stroke="url(#goldGrad)" stroke-width="2" fill="none"/>
  <path d="M {width - 20} {height - 50} L {width - 50} {height - 20} M {width - 20} {height - 20} L {width - 40} {height - 20} M {width - 20} {height - 20} L {width - 20} {height - 40}" stroke="url(#goldGrad)" stroke-width="2" fill="none"/>

  <!-- Center Stage Icon / Graphic -->
  <g transform="translate({width / 2}, {height * 0.4})">
    <!-- Glowing Halo -->
    <circle r="70" fill="none" stroke="url(#borderGrad)" stroke-width="1.5" stroke-dasharray="4 6"/>
    <circle r="60" fill="rgba(212,175,55,0.06)" stroke="url(#goldGrad)" stroke-width="1"/>
    
    <!-- Microphone & Stage Icon -->
    <g transform="translate(-24, -28) scale(1.6)" fill="url(#goldGrad)" filter="url(#goldDrop)">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
    </g>
  </g>

  <!-- Tag Pill -->
  <g transform="translate({width / 2}, {height * 0.63})">
    <rect x="-90" y="-16" width="180" height="32" rx="16" fill="rgba(212,175,55,0.12)" stroke="url(#goldGrad)" stroke-width="1"/>
    <text x="0" y="5" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="#FFF3D1" text-anchor="middle">{tag.upper()}</text>
  </g>

  <!-- Main Title -->
  <text x="{width / 2}" y="{height * 0.72}" font-family="'Cinzel', 'Playfair Display', serif" font-size="{24 if width > 600 else 18}" font-weight="700" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="1.5">{title}</text>

  <!-- Subtitle -->
  <text x="{width / 2}" y="{height * 0.78}" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="400" fill="#E2DFD8" text-anchor="middle" letter-spacing="0.5">{subtitle}</text>

  <!-- Hint Badge -->
  <g transform="translate({width / 2}, {height * 0.88})">
    <rect x="-160" y="-14" width="320" height="28" rx="6" fill="#07080b" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>
    <text x="0" y="4" font-family="'Courier New', monospace" font-size="11" fill="#C59B27" text-anchor="middle">📷 {filename_hint}</text>
  </g>
</svg>'''
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Created {path}")

# Generate Hero SVG
create_svg("images/hero-manisha.svg", 800, 1000, "MANISHA SUBUDHI", "Professional Anchor & Event Host", "STAGE SPOTLIGHT", "Replace with /images/hero-manisha.jpg")

# Generate About SVG
create_svg("images/about-manisha.svg", 700, 850, "MANISHA SUBUDHI", "Grace, Energy & Stage Presence", "ABOUT MANISHA", "Replace with /images/about-manisha.jpg")

# Generate Moments SVGs
moments_dir = "images/moments"
os.makedirs(moments_dir, exist_ok=True)
moments = [
    ("moment-01.svg", "Celebrating Love", "Weddings & Grand Sangeet Evenings", "WEDDING MAGIC", "Replace with /images/moments/moment-01.jpg"),
    ("moment-02.svg", "Creating Memories", "Haldi, Mehendi & Celebrations", "JOYFUL RITUALS", "Replace with /images/moments/moment-02.jpg"),
    ("moment-03.svg", "Bringing Energy to the Stage", "Corporate & Youth Galas", "ELECTRIC CROWD", "Replace with /images/moments/moment-03.jpg"),
    ("moment-04.svg", "Making Every Celebration Special", "Milestones & Star Nights", "UNFORGETTABLE", "Replace with /images/moments/moment-04.jpg"),
]
for fname, title, sub, tag, hint in moments:
    create_svg(os.path.join(moments_dir, fname), 800, 950, title, sub, tag, hint)

# Generate Gallery SVGs
gallery_items = [
    ("manisha-01.svg", "Grand Wedding Reception", "Regal Couple Spotlight & Stage Emcee", "WEDDINGS", "Replace with /images/gallery/manisha-01.jpg"),
    ("manisha-02.svg", "Haldi Celebration", "High-Energy Joyful Rituals & Games", "HALDI", "Replace with /images/gallery/manisha-02.jpg"),
    ("manisha-03.svg", "Sangeet & Mehendi Night", "Music, Dance & Family Fun", "MEHENDI", "Replace with /images/gallery/manisha-03.jpg"),
    ("manisha-04.svg", "Regal Ring Ceremony", "Romantic Engagement Hosting", "RING CEREMONY", "Replace with /images/gallery/manisha-04.jpg"),
    ("manisha-05.svg", "Milestone Birthday Bash", "Interactive Entertainment & Games", "BIRTHDAYS", "Replace with /images/gallery/manisha-05.jpg"),
    ("manisha-06.svg", "Corporate Annual Awards", "Professional Summit & Gala Emcee", "CORPORATE", "Replace with /images/gallery/manisha-06.jpg"),
    ("manisha-07.svg", "Youth College Fest", "High-Octane Star Night Hosting", "COLLEGE FEST", "Replace with /images/gallery/manisha-07.jpg"),
    ("manisha-08.svg", "Brand Launch Activation", "Product Reveal & Media Interaction", "ADVERTISEMENTS", "Replace with /images/gallery/manisha-08.jpg"),
    ("manisha-09.svg", "Celebrity Night Hosting", "Live Stage Dynamics & Crowd Connection", "STAGE HOSTING", "Replace with /images/gallery/manisha-09.jpg"),
    ("manisha-10.svg", "Private Social Gathering", "Custom Themed Family Evening", "PRIVATE EVENTS", "Replace with /images/gallery/manisha-10.jpg"),
    ("manisha-11.svg", "Grand Bridal Entry", "Emotional & Cinematic Announcements", "WEDDINGS", "Replace with /images/gallery/manisha-11.jpg"),
    ("manisha-12.svg", "Corporate Leadership Summit", "Executive Presence & Audience Management", "CORPORATE", "Replace with /images/gallery/manisha-12.jpg")
]
for fname, title, sub, tag, hint in gallery_items:
    create_svg(os.path.join("images/gallery", fname), 800, 1000, title, sub, tag, hint)

# Generate Video Thumbnails (16:9 ratio, 960x540)
video_thumbs = [
    ("video-thumb-01.svg", "Grand Wedding Showreel", "Highlights of Sangeet & Reception Hosting", "WEDDING REEL", "Replace with /images/videos/video-thumb-01.jpg"),
    ("video-thumb-02.svg", "Haldi Madness & Games", "Spreading Smiles & Festive Energy", "HALDI SPECIAL", "Replace with /images/videos/video-thumb-02.jpg"),
    ("video-thumb-03.svg", "Corporate Excellence Gala", "Award Night Ceremony Hosting", "CORPORATE REEL", "Replace with /images/videos/video-thumb-03.jpg"),
    ("video-thumb-04.svg", "College Fest Stage Energy", "Youth Crowd Engagement & Roars", "YOUTH FEST", "Replace with /images/videos/video-thumb-04.jpg"),
    ("video-thumb-05.svg", "Brand Launch Showcase", "High-End Retail & Product Reveal", "BRAND LAUNCH", "Replace with /images/videos/video-thumb-05.jpg"),
    ("video-thumb-06.svg", "Golden Jubilee Birthday", "Heartwarming Family Engagement", "BIRTHDAY HOST", "Replace with /images/videos/video-thumb-06.jpg"),
]
for fname, title, sub, tag, hint in video_thumbs:
    create_svg(os.path.join("images/videos", fname), 960, 540, title, sub, tag, hint)

# Generate Favicon SVG
favicon_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3D1"/>
      <stop offset="40%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#AA771C"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="#0c0d12"/>
  <rect x="4" y="4" width="120" height="120" rx="24" fill="none" stroke="url(#gold)" stroke-width="2.5" opacity="0.6"/>
  <circle cx="64" cy="64" r="50" fill="none" stroke="url(#gold)" stroke-width="1" stroke-dasharray="3 4" opacity="0.4"/>
  <!-- MS Monogram -->
  <text x="64" y="76" font-family="'Cinzel', 'Playfair Display', serif" font-size="44" font-weight="700" fill="url(#gold)" text-anchor="middle" letter-spacing="1">MS</text>
  <!-- Tiny Microphone on Top -->
  <path d="M64 22c1.6 0 3-1.4 3-3V16c0-1.6-1.4-3-3-3s-3 1.4-3 3v3c0 1.6 1.4 3 3 3zm5-3c0 2.8-2.2 5-5 5s-5-2.2-5-5h-2c0 3.5 2.6 6.4 6 6.9V28h2v-2.1c3.4-.5 6-3.4 6-6.9h-2z" fill="url(#gold)"/>
</svg>'''
with open("images/favicon.svg", "w", encoding="utf-8") as f:
    f.write(favicon_content)
print("Created images/favicon.svg")
print("All placeholder SVGs generated successfully!")

