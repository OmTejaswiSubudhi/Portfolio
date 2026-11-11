# Manisha Subudhi — Official Portfolio Website
> **“Your Event. Her Energy. Unforgettable Moments.”**
> Professional Anchor | Event Host | Presenter • Jamshedpur & Pan-India

A premium, modern, elegant, and visually impressive personal portfolio website built specifically for professional female anchor and stage presenter **Manisha Subudhi**.

---

## 🌟 Key Highlights & Design Features

- **Luxury Gold & Deep Obsidian Palette**: Tailored for high-end event hosting, weddings, corporate summits, and celebrity galas.
- **3D Hero Showcase**: Interactive mouse/gyroscope 3D tilt card with ambient stage lighting halos, rotating orbital accents, and live availability pulse.
- **10 Interactive Event Categories**: Weddings, Haldi, Mehendi, Ring Ceremony, Birthdays, Corporate Galas, College Fests, Brand Launches, Social Gatherings, and Special Occasions.
- **Photo Portfolio Gallery**:
  - Category filters (`All`, `Weddings`, `Haldi`, `Mehendi`, `Birthdays`, `Corporate`, `Advertisements`, `Other Events`).
  - Full-screen Lightbox Modal with Next/Previous navigation, keyboard support (`Esc`, `←`, `→`), and mobile touch swipe.
  - Automatic fallback system: Displays bespoke gold placeholder graphics until real `.jpg` photos are placed.
- **Video Portfolio**:
  - Category filters (`All`, `Wedding`, `Haldi`, `Mehendi`, `Birthday`, `Corporate`, `Advertisement`, `Stage Hosting`).
  - Video Player Modal supporting **YouTube**, **Vimeo**, and **Local MP4** video files.
- **Hosting Style**: 5 animated cards highlighting *Energetic*, *Interactive*, *Confident*, *Versatile*, and *Engaging* stage skills.
- **Moments That Speak**: Cinematic cards for “Celebrating Love”, “Creating Memories”, “Bringing Energy to the Stage”, and “Making Every Celebration Special”.
- **Client Testimonials**: Verified 5-star rating reviews from wedding couples and corporate organizers.
- **Instant Booking Engine**:
  - Direct 1-tap **WhatsApp Booking** with an automatically formatted inquiry message.
  - Direct **Call Now** (`tel:`) and **Email** (`mailto:`) actions.
  - Floating WhatsApp beacon and mobile quick-action bar.
- **Zero Build Tools Needed**: Pure vanilla HTML5, CSS3, and modern JavaScript. Works immediately in any browser by double-clicking `index.html`.

---

## 📁 Project Structure

```text
c:\manisha portfolio\
│
├── index.html                  # Semantic, SEO & Schema.org optimized single-page website
├── README.md                   # This comprehensive customization & deployment guide
├── generate_placeholders.py    # Python script that created the luxury SVG placeholders
│
├── css/
│   └── style.css               # Luxury gold styling, animations, responsive breakpoints
│
├── js/
│   ├── data.js                 # Central database: Photos, Videos, Events, Testimonials & Contacts
│   └── main.js                 # Interactivity: 3D tilt, particles, lightbox, filters & WhatsApp
│
└── images/
    ├── favicon.svg             # Luxury gold "MS" monogram favicon
    ├── hero-manisha.jpg        # [Replace] Hero section 3D portrait (or uses hero-manisha.svg fallback)
    ├── about-manisha.jpg       # [Replace] About section portrait (or uses about-manisha.svg fallback)
    │
    ├── gallery/                # Event photos
    │   ├── manisha-01.jpg      # Wedding Reception photo
    │   ├── manisha-02.jpg      # Haldi Ceremony photo
    │   ├── manisha-03.jpg      # Mehendi & Sangeet photo
    │   ├── manisha-04.jpg      # Ring Ceremony photo
    │   ├── manisha-05.jpg      # Corporate Awards photo
    │   ├── manisha-06.jpg      # Milestone Birthday photo
    │   ├── manisha-07.jpg      # College Fest photo
    │   ├── manisha-08.jpg      # Brand Launch photo
    │   ├── manisha-09.jpg      # Stage Performance photo
    │   ├── manisha-10.jpg      # Private Event photo
    │   ├── manisha-11.jpg      # Bridal Entry photo
    │   └── manisha-12.jpg      # Leadership Summit photo
    │
    ├── videos/                 # Video thumbnails
    │   ├── video-thumb-01.jpg  # Wedding showreel thumbnail
    │   ├── video-thumb-02.jpg  # Haldi special thumbnail
    │   ├── video-thumb-03.jpg  # Corporate gala thumbnail
    │   ├── video-thumb-04.jpg  # College fest thumbnail
    │   ├── video-thumb-05.jpg  # Brand launch thumbnail
    │   └── video-thumb-06.jpg  # Birthday special thumbnail
    │
    └── moments/                # Cinematic highlights
        ├── moment-01.jpg       # "Celebrating Love"
        ├── moment-02.jpg       # "Creating Memories"
        ├── moment-03.jpg       # "Bringing Energy to the Stage"
        └── moment-04.jpg       # "Making Every Celebration Special"
```

---

## 📸 How to Add Manisha's Real Photos

You can replace placeholder photos in two simple ways:

### Option A: The Quick File Drop (Zero Code)
Simply save Manisha's real photos into the `images/gallery/` folder with the corresponding filenames:
- `images/hero-manisha.jpg` (Hero main portrait)
- `images/about-manisha.jpg` (About section portrait)
- `images/gallery/manisha-01.jpg` (Weddings)
- `images/gallery/manisha-02.jpg` (Haldi)
- `images/gallery/manisha-03.jpg` (Mehendi)
- `images/gallery/manisha-04.jpg` (Ring Ceremony)
... and so on up to `manisha-12.jpg`.

*Note: The website is pre-configured with graceful fallbacks. If an image file hasn't been added yet, it automatically shows the elegant gold vector badge rather than a broken image link.*

### Option B: Adding New Photos via `js/data.js`
Open `js/data.js` in any text editor. Under `photos: [ ... ]`, you can add or remove items:

```javascript
{
  id: "photo-13",
  title: "New Year Eve Star Gala",
  category: "other", // weddings | haldi | mehendi | birthdays | corporate | advertisements | other
  categoryLabel: "Star Nights",
  image: "images/gallery/manisha-13.jpg",
  fallback: "images/gallery/manisha-01.svg",
  aspect: "tall", // "tall" or "square"
  location: "Taj Hotel, Mumbai",
  description: "Hosting 1,200+ guests for the annual countdown."
}
```

---

## 🎥 How to Add or Update Videos

Open `js/data.js` and locate the `videos: [ ... ]` array.

### 1. For a YouTube Video:
```javascript
{
  id: "video-01",
  title: "Grand Wedding Sangeet Highlights",
  category: "wedding", // wedding | haldi | mehendi | birthday | corporate | advertisement | stage
  categoryLabel: "Wedding",
  description: "Highlights of Manisha's stage hosting at a 600-guest royal wedding.",
  duration: "03:45",
  type: "youtube",
  videoId: "YOUR_YOUTUBE_ID", // The ID from youtube.com/watch?v=YOUR_YOUTUBE_ID
  thumbnail: "images/videos/video-thumb-01.jpg",
  thumbnailFallback: "images/videos/video-thumb-01.svg"
}
```

### 2. For a Vimeo Video:
```javascript
{
  ...
  type: "vimeo",
  videoId: "123456789" // The Vimeo video ID
}
```

### 3. For a Locally Hosted MP4 Video:
Place your MP4 file in `videos/` (e.g. `videos/sangeet-highlights.mp4`) and set:
```javascript
{
  ...
  type: "local",
  videoUrl: "videos/sangeet-highlights.mp4"
}
```

---

## 💬 How WhatsApp Booking Works

When a visitor fills out the booking form on the website (selecting their event type, date, location, and guest count) and clicks **"Book via WhatsApp"**, the site automatically generates and sends a pre-formatted message:

```text
Hello Manisha, I would like to discuss anchoring/hosting for my upcoming event.

*Event Booking Details:*
👤 *Name:* Rohit Verma
📞 *Phone:* 9876543210
✉️ *Email:* rohit@example.com
💍 *Event Type:* Grand Wedding
📅 *Date:* 2026-12-15
📍 *City / Venue:* Jamshedpur
👥 *Expected Guests:* 400
💬 *Notes:* Looking for bilingual English/Hindi anchoring for the Sangeet and Reception.
```

This saves time for both the client and Manisha, giving all essential booking info upfront!

---

## 📞 Updating Contact Details

All contact information is centralized at the very top of `js/data.js` inside `PORTFOLIO_CONFIG.brand`:

```javascript
brand: {
  name: "Manisha Subudhi",
  phone: "9693316301",
  phoneDisplay: "+91 96933 16301",
  email: "manishasubudhijsr@gmail.com",
  instagram: "https://www.instagram.com/anchor_manishasubudhi?srtk=MW56YnZxYjMyN3g5bA==",
  instagramDisplay: "@anchor_manishasubudhi",
  location: "Jamshedpur, Jharkhand, India",
  tagline: "Your Event. Her Energy. Unforgettable Moments."
}
```

Modifying this once automatically updates the phone links, email links, Instagram buttons, and footer throughout the entire website.

---

## 🚀 How to Launch / Deploy This Website (Free in 60 Seconds)

Because this website is built with clean modern web standards and has no build step, it can be deployed anywhere instantly:

### Method 1: Netlify (Drag & Drop — Recommended)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `c:\manisha portfolio` folder onto the web page.
3. Your website is live worldwide with a custom URL and free SSL!

### Method 2: GitHub Pages (Free Hosting)
1. Create a repository on GitHub (e.g. `manisha-subudhi-portfolio`).
2. Push this folder's contents to the repository.
3. Under **Settings → Pages**, select the branch `main` and root `/`.
4. Your site will be live at `https://yourusername.github.io/manisha-subudhi-portfolio`.

### Method 3: Vercel
1. Install or visit [vercel.com](https://vercel.com).
2. Connect your repository or run `vercel` in the command line.
3. It deploys automatically as a static site.

### Method 4: Traditional Hosting (Hostinger, GoDaddy, Bluehost, cPanel)
1. Open your hosting cPanel File Manager.
2. Go to `public_html`.
3. Upload all files and folders (`index.html`, `css/`, `js/`, `images/`).

---

## 💻 Local Testing on Your Computer

To preview the website locally on your computer:
1. Open PowerShell or Command Prompt.
2. Navigate to the folder:
   ```powershell
   cd "c:\manisha portfolio"
   ```
3. Run Python's built-in web server:
   ```powershell
   python -m http.server 8000
   ```
4. Open your browser and navigate to:
   ```text
   http://localhost:8000
   ```
*(Or simply double-click `index.html` in Windows File Explorer!)*

---

© 2026 Manisha Subudhi. All Rights Reserved.  
Crafted with elegance for stage excellence.

#   P o r t f o l i o  
 #   P o r t f o l i o  
 