/**
 * ==============================================================================
 * MANISHA SUBUDHI - PORTFOLIO DATABASE & CONFIGURATION
 * ==============================================================================
 * 
 * Easily edit this file to update:
 * 1. Contact & Social Links
 * 2. Photo Gallery (add, remove, or change photos)
 * 3. Video Portfolio (YouTube, Vimeo, or local MP4 files)
 * 4. Events & Services List
 * 5. Client Testimonials
 * 6. Highlight Moments
 * 
 * TIP FOR PHOTOS:
 * Save your real photos in the "images/gallery/" folder with names like
 * "manisha-01.jpg", "manisha-02.jpg", etc. The website will automatically
 * display your real photos, with elegant gold placeholders if not yet added!
 * ==============================================================================
 */

const PORTFOLIO_CONFIG = {
  brand: {
    name: "Manisha Subudhi",
    firstName: "Manisha",
    lastName: "Subudhi",
    profession: "Professional Anchor | Event Host | Presenter",
    tagline: "Your Event. Her Energy. Unforgettable Moments.",
    heroDescription: "Bringing energy, confidence and memorable moments to every stage and celebration.",
    aboutIntro: "Manisha Subudhi is a passionate and confident professional anchor and event host who brings energy, elegance and audience engagement to every event. With a natural ability to connect with people and keep the audience engaged, she creates a lively and memorable atmosphere on every stage.",
    
    // Contact Information
    phone: "9693316301",
    phoneDisplay: "+91 96933 16301",
    email: "manishasubudhijsr@gmail.com",
    instagram: "https://www.instagram.com/anchor_manishasubudhi?srtk=MW56YnZxYjMyN3g5bA==",
    instagramDisplay: "@anchor_manishasubudhi",
    location: "Jamshedpur, Jharkhand, India",
    availability: "Available for Pan-India & Destination Events",
    
    // Default WhatsApp prefilled text
    whatsappDefaultMessage: "Hello Manisha, I came across your portfolio and would like to discuss an event or professional collaboration.",
    
    // Key Stats
    stats: [
      { number: "500+", label: "Events Hosted" },
      { number: "10+", label: "Event Formats" },
      { number: "100%", label: "Audience Engagement" },
      { number: "5★", label: "Client Satisfaction" }
    ]
  },

  // 10 Key Event Services
  events: [
    {
      id: "weddings",
      icon: "💍",
      title: "Weddings",
      subtitle: "Grand Ceremonies & Receptions",
      description: "From regal bridal entries to heartfelt varmala rituals and high-energy stage announcements, creating a magical fairytale atmosphere.",
      highlights: ["Grand Bridal Entries", "Varmala Stage Direction", "Couple Spotlight & Family Fun", "Bilingual Hosting"]
    },
    {
      id: "haldi",
      icon: "💛",
      title: "Haldi Ceremony",
      subtitle: "Vibrant, Joyful & Playful Rituals",
      description: "Infusing yellow-tinted celebrations with spontaneous laughter, customized games, traditional cheer, and lively family interactions.",
      highlights: ["Interactive Family Games", "Tradition-Infused Energy", "Dance & Music Cues", "Spontaneous Crowd Humor"]
    },
    {
      id: "mehendi",
      icon: "🌿",
      title: "Mehendi Ceremony",
      subtitle: "Festive Vibes & Melodious Gatherings",
      description: "Setting the ideal celebratory tone with music, lighthearted banter, bride-tribe activities, and unforgettable musical rounds.",
      highlights: ["Bride-Tribe Spotlights", "Sing-Along & Antakshari Rounds", "Aunties vs. Cousins Banter", "Warm Festive Ambience"]
    },
    {
      id: "ring-ceremony",
      icon: "💎",
      title: "Ring Ceremony",
      subtitle: "Engagements & Cocktail Nights",
      description: "A classy and romantic evening celebrating love, ring exchanges, heartfelt toasts, and captivating couple dance introductions.",
      highlights: ["Romantic Narrative Hosting", "Ring Exchange Directing", "Champagne Toasts", "Cocktail Gala Glamour"]
    },
    {
      id: "birthdays",
      icon: "🎂",
      title: "Birthday Celebrations",
      subtitle: "Milestones, Jubilees & Kids Bashes",
      description: "High-octane entertainment tailored to all generations, from sweet 16s and magical 1st birthdays to regal 50th and 75th jubilees.",
      highlights: ["Customized Trivia & Games", "Lively Cake Cutting Ceremony", "All-Age Crowd Inclusivity", "Surprise Moment Orchestration"]
    },
    {
      id: "corporate",
      icon: "🎤",
      title: "Corporate Events",
      subtitle: "Awards, Summits & Annual Meets",
      description: "Refined, articulate and poised hosting that aligns with brand prestige, maintaining punctual agendas and professional stage presence.",
      highlights: ["Annual Excellence Awards", "Product & Service Launches", "Leadership Conclaves", "Team Building & Gala Dinners"]
    },
    {
      id: "college",
      icon: "🎓",
      title: "College & Cultural Events",
      subtitle: "Youth Fests & Celebrity Star Nights",
      description: "Electrifying thousands of college students with unflagging enthusiasm, sharp wit, and crowd-rousing chants and cheers.",
      highlights: ["Star Celebrity Introductions", "Inter-College Competitions", "Roaring Crowd Dynamics", "Spontaneous Spot Contests"]
    },
    {
      id: "advertisements",
      icon: "📢",
      title: "Brand & Ad Events",
      subtitle: "Promotions, Roadshows & Activations",
      description: "Engaging footfall with dynamic product demonstrations, live audience polling, influencer buzz, and high-conversion announcements.",
      highlights: ["Mall & Store Activations", "Press & Media Interactions", "Audience Giveaways & Contests", "High Brand Recall Tone"]
    },
    {
      id: "private-social",
      icon: "🎉",
      title: "Private & Social Events",
      subtitle: "Anniversaries & Family Get-Togethers",
      description: "Warm, personalized hosting that makes every guest feel cherished, blending intimacy with sparkling celebration.",
      highlights: ["Silver & Golden Anniversaries", "Theme Parties & Banquets", "Personalized Family Stories", "Joyous Memory Lane Moments"]
    },
    {
      id: "special-events",
      icon: "✨",
      title: "Other Special Events",
      subtitle: "Festivals, VIP Dinners & Bespoke Occasions",
      description: "Flexible, tailored stage hosting crafted specifically around your unique concept, cultural requirements, and guest profile.",
      highlights: ["Cultural Festival Celebrations", "Sports Meets & Tournaments", "Charity Galas & Fundraisers", "Custom Tailored Format"]
    }
  ],

  // Photo Gallery Items - Real Event Photos of Manisha Subudhi
  photos: [
    {
      id: "photo-01",
      title: "Royal Golden Wedding Stage & Varmala",
      category: "weddings",
      categoryLabel: "Weddings",
      image: "images/gallery/manisha-01.jpg",
      fallback: "images/gallery/manisha-01.svg",
      aspect: "tall",
      location: "Royal Wedding Lawn & Banquet",
      description: "Manisha on the royal golden wedding stage emceeing the grand wedding ceremony and varmala rituals with cue card."
    },
    {
      id: "photo-02",
      title: "Grand Floral Wedding Stage Emcee",
      category: "weddings",
      categoryLabel: "Weddings",
      image: "images/gallery/manisha-02.jpg",
      fallback: "images/gallery/manisha-02.svg",
      aspect: "tall",
      location: "Grand Floral Wedding Stage",
      description: "Hosting the couple spotlight and grand sangeet evening in a designer bridal lehenga."
    },
    {
      id: "photo-03",
      title: "Royal Sangeet & Reception Gala",
      category: "weddings",
      categoryLabel: "Weddings",
      image: "images/gallery/manisha-03.jpg",
      fallback: "images/gallery/manisha-03.svg",
      aspect: "tall",
      location: "Grand Banquet Ballroom",
      description: "Hosting in a shimmering royal blue evening gown, directing couple spotlights and celebratory toasts."
    },
    {
      id: "photo-04",
      title: "Vibrant Sunflower Haldi Celebration",
      category: "haldi",
      categoryLabel: "Haldi",
      image: "images/gallery/manisha-04.jpg",
      fallback: "images/gallery/manisha-04.svg",
      aspect: "tall",
      location: "Haldi Celebration Arena",
      description: "Infusing yellow celebrations with sunglasses, wireless microphone, high-energy games, and festive cheer."
    },
    {
      id: "photo-05",
      title: "Daytime Lawn & Poolside Haldi Celebration",
      category: "haldi",
      categoryLabel: "Haldi",
      image: "images/gallery/manisha-05.jpg",
      fallback: "images/gallery/manisha-05.svg",
      aspect: "tall",
      location: "Outdoor Lawn Pavilion",
      description: "Hosting the daytime Haldi & Sangeet party under a colorful floral butterfly arch with scenic mountain views."
    },
    {
      id: "photo-06",
      title: "Traditional Festive Mehendi Ki Raat",
      category: "mehendi",
      categoryLabel: "Mehendi",
      image: "images/gallery/manisha-06.jpg",
      fallback: "images/gallery/manisha-06.svg",
      aspect: "tall",
      location: "Mehendi Celebration Stage",
      description: "Leading bride-tribe games, music rounds, and family banter on the authentic floral Mehendi stage."
    },
    {
      id: "photo-07",
      title: "Corporate Excellence Awards Ballroom",
      category: "corporate",
      categoryLabel: "Corporate",
      image: "images/gallery/manisha-07.jpg",
      fallback: "images/gallery/manisha-07.svg",
      aspect: "tall",
      location: "Convention Center Ballroom",
      description: "Commanding the grand ballroom stage with chandeliers, atmospheric fog effects, and executive poise."
    },
    {
      id: "photo-08",
      title: "Leadership Summit & Cocktail Gala",
      category: "corporate",
      categoryLabel: "Corporate",
      image: "images/gallery/manisha-08.jpg",
      fallback: "images/gallery/manisha-08.svg",
      aspect: "tall",
      location: "Grand Hotel Banquets",
      description: "Hosting corporate leaders and dignitaries in an elegant emerald satin evening gown."
    },
    {
      id: "photo-09",
      title: "Maruti Suzuki NEXA Luxury Car Launch",
      category: "advertisements",
      categoryLabel: "Brand Launch",
      image: "images/gallery/manisha-09.jpg",
      fallback: "images/gallery/manisha-09.svg",
      aspect: "square",
      location: "NEXA Showroom / Jamshedpur",
      description: "Official presenter for Maruti Suzuki NEXA flagship SUV launch with branded podium and live audience interaction."
    },
    {
      id: "photo-10",
      title: "Maruti Suzuki NEXA Delivery & Reveal",
      category: "advertisements",
      categoryLabel: "Brand Launch",
      image: "images/gallery/manisha-10.jpg",
      fallback: "images/gallery/manisha-10.svg",
      aspect: "tall",
      location: "NEXA Automobile Arena",
      description: "Hosting the official NEXA car reveal and key handover ceremony for premium clientele."
    },
    {
      id: "photo-11",
      title: "Hyundai Creta Launch & Red Carpet",
      category: "advertisements",
      categoryLabel: "Brand Launch",
      image: "images/gallery/manisha-11.jpg",
      fallback: "images/gallery/manisha-11.svg",
      aspect: "tall",
      location: "Hyundai Automobile Showroom",
      description: "Delivering crisp brand messaging on the red carpet for the Hyundai Creta launch event."
    },
    {
      id: "photo-12",
      title: "Automobile Showroom Reveal & Emcee",
      category: "advertisements",
      categoryLabel: "Brand Launch",
      image: "images/gallery/manisha-12.jpg",
      fallback: "images/gallery/manisha-12.svg",
      aspect: "tall",
      location: "Automobile Showcase Gallery",
      description: "Engaging footfall, VIP buyers, and dealership management with professional product presentation."
    },
    {
      id: "photo-13",
      title: "Miss & Mrs Fashion Show - Anchor Manisha",
      category: "advertisements",
      categoryLabel: "Fashion Show",
      image: "images/gallery/manisha-13.jpg",
      fallback: "images/gallery/manisha-13.svg",
      aspect: "tall",
      location: "Sai Regency, Sakchi, Jamshedpur",
      description: "Official event poster for Hariyali Sawan Miss & Mrs Fashion Show anchored by Manisha."
    },
    {
      id: "photo-14",
      title: "Live Star Night & Concert Stage Hosting",
      category: "other",
      categoryLabel: "Stage Hosting",
      image: "images/gallery/manisha-14.jpg",
      fallback: "images/gallery/manisha-14.svg",
      aspect: "tall",
      location: "Palace Concert Amphitheatre",
      description: "Anchoring live musical star nights with electric energy, purple concert lighting, and roaring crowd dynamics."
    },
    {
      id: "photo-15",
      title: "Stage Excellence & Emcee Felicitation",
      category: "other",
      categoryLabel: "Award Felicitation",
      image: "images/gallery/manisha-15.jpg",
      fallback: "images/gallery/manisha-15.svg",
      aspect: "square",
      location: "Cultural Fest Stage",
      description: "Manisha receiving the prestigious Stage Excellence & Anchoring Trophy from festival dignitaries."
    },
    {
      id: "photo-16",
      title: "Natural Smile Foundation Charity Gala",
      category: "other",
      categoryLabel: "Charity & Social",
      image: "images/gallery/manisha-16.jpg",
      fallback: "images/gallery/manisha-16.svg",
      aspect: "square",
      location: "Jamshedpur",
      description: "Anchoring the Deepawali Gift Distribution and smile-sharing initiative for underprivileged children."
    },
    {
      id: "photo-17",
      title: "Chic Private Celebrations & Theme Parties",
      category: "birthdays",
      categoryLabel: "Birthdays",
      image: "images/gallery/manisha-17.jpg",
      fallback: "images/gallery/manisha-17.svg",
      aspect: "square",
      location: "Sky Lounge & Banquets",
      description: "Bringing warmth and contemporary charm to milestone birthdays and private celebrations."
    },
    {
      id: "photo-18",
      title: "Signature Festive Glamour & Red Carpet",
      category: "other",
      categoryLabel: "Host Portrait",
      image: "images/gallery/manisha-18.jpg",
      fallback: "images/gallery/manisha-18.svg",
      aspect: "square",
      location: "Jamshedpur / Pan-India",
      description: "Manisha's signature confidence and festive glamour that lights up every live stage."
    },
    {
      id: "photo-19",
      title: "Royal Purple Sangeet Gala & Red Carpet",
      category: "weddings",
      categoryLabel: "Weddings",
      image: "images/gallery/manisha-19.jpg",
      fallback: "images/gallery/manisha-19.svg",
      aspect: "tall",
      location: "Grand Sangeet & Reception Ballroom",
      description: "Manisha hosting an opulent Sangeet evening in a royal purple designer evening gown with stage spotlighting."
    }
  ],

  // Video Portfolio Items
  videos: [
    {
      id: "video-01",
      title: "Royal Golden Wedding & Varmala Stage Hosting",
      category: "wedding",
      categoryLabel: "Wedding",
      description: "Watch Manisha host a grand royal wedding ceremony with couple spotlights, varmala announcements, and family cheer.",
      duration: "00:28",
      type: "local",
      videoUrl: "videos/manisha-video-01.mp4",
      thumbnail: "images/videos/video-thumb-01.jpg",
      thumbnailFallback: "images/videos/video-thumb-01.svg"
    },
    {
      id: "video-02",
      title: "High-Energy Sunflower Haldi Celebrations",
      category: "haldi",
      categoryLabel: "Haldi",
      description: "Festive family cheer, funny brother-sister games, and infectious positivity that had all guests dancing.",
      duration: "00:09",
      type: "local",
      videoUrl: "videos/manisha-video-02.mp4",
      thumbnail: "images/videos/video-thumb-02.jpg",
      thumbnailFallback: "images/videos/video-thumb-02.svg"
    },
    {
      id: "video-03",
      title: "Traditional Mehendi Ceremony Celebrations",
      category: "mehendi",
      categoryLabel: "Mehendi",
      description: "Interactive games, Antakshari rounds, and bride-tribe banters on the festive floral Mehendi stage.",
      duration: "00:11",
      type: "local",
      videoUrl: "videos/manisha-video-03.mp4",
      thumbnail: "images/videos/video-thumb-03.jpg",
      thumbnailFallback: "images/videos/video-thumb-03.svg"
    },
    {
      id: "video-04",
      title: "Corporate Annual Excellence Awards Gala",
      category: "corporate",
      categoryLabel: "Corporate",
      description: "Commanding the grand ballroom stage with atmospheric lighting, fog effects, and executive poise.",
      duration: "00:15",
      type: "local",
      videoUrl: "videos/manisha-video-04.mp4",
      thumbnail: "images/videos/video-thumb-04.jpg",
      thumbnailFallback: "images/videos/video-thumb-04.svg"
    },
    {
      id: "video-05",
      title: "Maruti Suzuki NEXA & Brand Launch Activations",
      category: "advertisement",
      categoryLabel: "Brand Launch",
      description: "Delivering crisp brand messaging, unveiling flagship automobiles, and conducting live VIP audience interactions.",
      duration: "00:06",
      type: "local",
      videoUrl: "videos/manisha-video-05.mp4",
      thumbnail: "images/videos/video-thumb-05.jpg",
      thumbnailFallback: "images/videos/video-thumb-05.svg"
    },
    {
      id: "video-06",
      title: "Star Night Concert & Live Stage Hosting",
      category: "stage",
      categoryLabel: "Stage Hosting",
      description: "Electrifying a massive audience at a live musical star night, coordinating celebrity entries and crowd roars.",
      duration: "00:06",
      type: "local",
      videoUrl: "videos/manisha-video-06.mp4",
      thumbnail: "images/videos/video-thumb-06.jpg",
      thumbnailFallback: "images/videos/video-thumb-06.svg"
    },
    {
      id: "video-07",
      title: "Daytime Lawn Haldi & Sangeet Games",
      category: "haldi",
      categoryLabel: "Haldi Ceremony",
      description: "Outdoor mountain lawn Haldi celebration with crowd banter, music games, and festive family energy.",
      duration: "00:11",
      type: "local",
      videoUrl: "videos/manisha-video-07.mp4",
      thumbnail: "images/videos/video-thumb-07.jpg",
      thumbnailFallback: "images/videos/video-thumb-07.svg"
    },
    {
      id: "video-08",
      title: "Royal Blue Gown Sangeet & Couple Spotlight",
      category: "wedding",
      categoryLabel: "Sangeet & Reception",
      description: "Hosting a glamorous sangeet evening, welcoming the bride and groom, and getting guests onto the dance floor.",
      duration: "00:18",
      type: "local",
      videoUrl: "videos/manisha-video-08.mp4",
      thumbnail: "images/videos/video-thumb-08.jpg",
      thumbnailFallback: "images/videos/video-thumb-08.svg"
    },
    {
      id: "video-09",
      title: "Grand Varmala Ritual & Wedding Stage Direction",
      category: "wedding",
      categoryLabel: "Wedding Ceremony",
      description: "Live clip of Manisha directing the grand varmala entry, orchestrating fireworks cues, and engaging the wedding hall.",
      duration: "00:56",
      type: "local",
      videoUrl: "videos/manisha-video-09.mp4",
      thumbnail: "images/videos/video-thumb-09.jpg",
      thumbnailFallback: "images/videos/video-thumb-09.svg"
    },
    {
      id: "video-10",
      title: "Royal Purple Gala & Cocktail Night Emcee",
      category: "wedding",
      categoryLabel: "Cocktail & Gala",
      description: "Captivating live hosting at an opulent cocktail night in designer purple gown, delivering witty banter and toasts.",
      duration: "00:35",
      type: "local",
      videoUrl: "videos/manisha-video-10.mp4",
      thumbnail: "images/videos/video-thumb-10.jpg",
      thumbnailFallback: "images/videos/video-thumb-10.svg"
    },
    {
      id: "video-11",
      title: "Maruti Suzuki Delivery Ceremony & Car Reveal",
      category: "advertisement",
      categoryLabel: "Brand Activation",
      description: "Conducting the VIP car handover ceremony and customer felicitation at the automobile showroom.",
      duration: "00:04",
      type: "local",
      videoUrl: "videos/manisha-video-11.mp4",
      thumbnail: "images/videos/video-thumb-11.jpg",
      thumbnailFallback: "images/videos/video-thumb-11.svg"
    },
    {
      id: "video-12",
      title: "Fashion Show Ramp Host & Contestant Introductions",
      category: "stage",
      categoryLabel: "Fashion & Cultural",
      description: "High-glamour hosting at the Miss & Mrs Fashion Show ramp walk, introducing designer collections and celebrity judges.",
      duration: "00:11",
      type: "local",
      videoUrl: "videos/manisha-video-12.mp4",
      thumbnail: "images/videos/video-thumb-12.jpg",
      thumbnailFallback: "images/videos/video-thumb-12.svg"
    },
    {
      id: "video-13",
      title: "Corporate Gala Dinner & Executive Awards",
      category: "corporate",
      categoryLabel: "Corporate Summit",
      description: "Guiding senior executives, leadership speeches, and team recognitions with polished stage etiquette.",
      duration: "00:15",
      type: "local",
      videoUrl: "videos/manisha-video-13.mp4",
      thumbnail: "images/videos/video-thumb-13.jpg",
      thumbnailFallback: "images/videos/video-thumb-13.svg"
    },
    {
      id: "video-14",
      title: "Mega Star Musical Night & Live Crowd Energy",
      category: "stage",
      categoryLabel: "Concert & Star Night",
      description: "Leading massive crowd countdowns, singer introductions, and stadium-wide cheering at a live concert night.",
      duration: "00:22",
      type: "local",
      videoUrl: "videos/manisha-video-14.mp4",
      thumbnail: "images/videos/video-thumb-14.jpg",
      thumbnailFallback: "images/videos/video-thumb-14.svg"
    },
    {
      id: "video-15",
      title: "Exclusive Private Celebration & Milestone Party",
      category: "birthday",
      categoryLabel: "Private Party",
      description: "Customized games, lively banter, and celebratory toasts that bring every generation of family together.",
      duration: "00:08",
      type: "local",
      videoUrl: "videos/manisha-video-15.mp4",
      thumbnail: "images/videos/video-thumb-15.jpg",
      thumbnailFallback: "images/videos/video-thumb-15.svg"
    },
    {
      id: "video-16",
      title: "Grand Sangeet & High-Energy Stage Hosting",
      category: "wedding",
      categoryLabel: "Sangeet Ceremony",
      description: "Full 1-minute live clip of Manisha engaging a roaring crowd, orchestrating couple entries, and pumping energetic festive beats.",
      duration: "00:59",
      type: "local",
      videoUrl: "videos/manisha-video-16.mp4",
      thumbnail: "images/videos/video-thumb-16.jpg",
      thumbnailFallback: "images/videos/video-thumb-16.svg"
    },
    {
      id: "video-17",
      title: "Haldi Ceremony Crowd Interaction & Banter",
      category: "haldi",
      categoryLabel: "Haldi Ceremony",
      description: "Spontaneous crowd humor, playful family teasing, and joyful wedding rituals that keep the audience smiling.",
      duration: "00:13",
      type: "local",
      videoUrl: "videos/manisha-video-17.mp4",
      thumbnail: "images/videos/video-thumb-17.jpg",
      thumbnailFallback: "images/videos/video-thumb-17.svg"
    },
    {
      id: "video-18",
      title: "Stage Entry Countdown & Star Introduction",
      category: "stage",
      categoryLabel: "Stage Hosting",
      description: "A commanding stage intro and celebrity announcement with energetic stage lighting and microphone presence.",
      duration: "00:05",
      type: "local",
      videoUrl: "videos/manisha-video-18.mp4",
      thumbnail: "images/videos/video-thumb-18.jpg",
      thumbnailFallback: "images/videos/video-thumb-18.svg"
    },
    {
      id: "video-19",
      title: "Grand Sangeet & Couple Entry Spotlight (HD)",
      category: "wedding",
      categoryLabel: "Sangeet Ceremony",
      description: "High-definition 41-second live stage reel of Manisha orchestrating the couple's grand entrance, family cheer, and wedding party dancing.",
      duration: "00:41",
      type: "local",
      videoUrl: "videos/manisha-video-19.mp4",
      thumbnail: "images/videos/video-thumb-19.jpg",
      thumbnailFallback: "images/videos/video-thumb-19.svg"
    },
    {
      id: "video-20",
      title: "Crowd Energy & Stage Spotlight Microphone",
      category: "stage",
      categoryLabel: "Stage Hosting",
      description: "High-voltage stage presence delivering rapid crowd engagement and festive excitement.",
      duration: "00:04",
      type: "local",
      videoUrl: "videos/manisha-video-20.mp4",
      thumbnail: "images/videos/video-thumb-20.jpg",
      thumbnailFallback: "images/videos/video-thumb-20.svg"
    },
    {
      id: "video-21",
      title: "Grand Wedding Sangeet Stage & Live Hype",
      category: "wedding",
      categoryLabel: "Sangeet Ceremony",
      description: "Directing the grand stage lighting, introducing VIP guests, and energizing the sangeet party crowd.",
      duration: "00:15",
      type: "local",
      videoUrl: "videos/manisha-video-21.mp4",
      thumbnail: "images/videos/video-thumb-21.jpg",
      thumbnailFallback: "images/videos/video-thumb-21.svg"
    },
    {
      id: "video-22",
      title: "Haldi Ceremony Festive Rituals & Energy",
      category: "haldi",
      categoryLabel: "Haldi Ceremony",
      description: "Spontaneous wedding games, brother-sister banter, and family interaction on the festive Haldi stage.",
      duration: "00:10",
      type: "local",
      videoUrl: "videos/manisha-video-22.mp4",
      thumbnail: "images/videos/video-thumb-22.jpg",
      thumbnailFallback: "images/videos/video-thumb-22.svg"
    },
    {
      id: "video-23",
      title: "Celebrity Star Night & Massive Audience Cheering",
      category: "stage",
      categoryLabel: "Concert & Star Night",
      description: "Leading the concert countdown, coordinating musical cues, and keeping thousands of spectators roaring.",
      duration: "00:20",
      type: "local",
      videoUrl: "videos/manisha-video-23.mp4",
      thumbnail: "images/videos/video-thumb-23.jpg",
      thumbnailFallback: "images/videos/video-thumb-23.svg"
    },
    {
      id: "video-24",
      title: "High-Octane Stage Presence & Event Directing",
      category: "stage",
      categoryLabel: "Stage Hosting",
      description: "Commanding the microphone with magnetic confidence, warm smile, and crowd-pleasing stage charisma.",
      duration: "00:18",
      type: "local",
      videoUrl: "videos/manisha-video-24.mp4",
      thumbnail: "images/videos/video-thumb-24.jpg",
      thumbnailFallback: "images/videos/video-thumb-24.svg"
    }
  ],

  // Hosting Strengths
  strengths: [
    {
      id: "energetic",
      icon: "⚡",
      title: "Energetic",
      subtitle: "Unflagging Stage Drive",
      description: "Keeps the audience engaged throughout the event with infectious positivity, boundless enthusiasm and a smile that lights up the room."
    },
    {
      id: "interactive",
      icon: "🤝",
      title: "Interactive",
      subtitle: "Deep Human Connection",
      description: "Creates a strong connection with the audience, breaks the ice naturally, and invites every generation into the heart of the celebration."
    },
    {
      id: "confident",
      icon: "👑",
      title: "Confident",
      subtitle: "Effortless Stage Poise",
      description: "Professional, composed and comfortable under blinding spotlights, handling spontaneous moments and schedule changes with graceful ease."
    },
    {
      id: "versatile",
      icon: "🎭",
      title: "Versatile",
      subtitle: "Adaptive Hosting Style",
      description: "Seamlessly adapts tone and presence according to event nuances—from solemn corporate etiquette to vibrant sangeet madness."
    },
    {
      id: "engaging",
      icon: "✨",
      title: "Engaging",
      subtitle: "Memorable Celebrations",
      description: "Transforms standard itineraries into magnetic, heartwarming experiences that leave guests talking about the event for months."
    }
  ],

  // Cinematic Highlights ("Moments That Speak")
  moments: [
    {
      id: "moment-1",
      title: "Celebrating Love",
      subtitle: "Weddings & Grand Sangeet Evenings",
      image: "images/moments/moment-01.jpg",
      fallback: "images/moments/moment-01.svg",
      tag: "WEDDING MAGIC",
      quote: "Every couple has a unique fairytale. My microphone brings their love story alive on stage."
    },
    {
      id: "moment-2",
      title: "Creating Memories",
      subtitle: "Haldi, Mehendi & Family Gatherings",
      image: "images/moments/moment-02.jpg",
      fallback: "images/moments/moment-02.svg",
      tag: "JOYFUL RITUALS",
      quote: "Laughter, tears of happiness, and spontaneous dance moves that families cherish forever."
    },
    {
      id: "moment-3",
      title: "Bringing Energy to the Stage",
      subtitle: "Corporate Conclaves & Youth Galas",
      image: "images/moments/moment-03.jpg",
      fallback: "images/moments/moment-03.svg",
      tag: "ELECTRIC CROWD",
      quote: "Commanding auditoriums with clarity, charisma, and unmatched crowd engagement."
    },
    {
      id: "moment-4",
      title: "Making Every Celebration Special",
      subtitle: "Milestones, Jubilees & Brand Nights",
      image: "images/moments/moment-04.jpg",
      fallback: "images/moments/moment-04.svg",
      tag: "UNFORGETTABLE",
      quote: "No two events are alike. We turn ordinary moments into timeless stage masterpieces."
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      id: "test-1",
      name: "Rohit & Ananya Sen",
      role: "Wedding Couple",
      eventType: "Grand Wedding & Sangeet",
      rating: 5,
      date: "February 2026",
      text: "Manisha was the life of our Sangeet and Wedding! Her energy was infectious, and she engaged every single family member—from my 80-year-old grandmother to all my friends. She made our special day truly unforgettable."
    },
    {
      id: "test-2",
      name: "Vikram Malhotra",
      role: "VP Marketing, Tata Steel Vendors Meet",
      eventType: "Corporate Annual Gala",
      rating: 5,
      date: "January 2026",
      text: "Manisha conducted our corporate leadership conclave with remarkable elegance and poise. Her articulation, stage control, and prompt management of our VIP speaker line-up was truly commendable. Highly recommended!"
    },
    {
      id: "test-3",
      name: "Pooja & Sameer Verma",
      role: "Hosts",
      eventType: "Haldi & Ring Ceremony",
      rating: 5,
      date: "December 2025",
      text: "Manisha was amazing throughout the event. Her energy and interaction with the audience made the celebration even more special. The customized games she planned for our Haldi had everyone in splits!"
    },
    {
      id: "test-4",
      name: "Dr. Alok Srivastava",
      role: "Convener, National Medical Conference",
      eventType: "Cultural Evening & Banquet",
      rating: 5,
      date: "November 2025",
      text: "Professional, punctual, and wonderfully engaging. She handled our 450+ delegates seamlessly. Her confidence and stage charm made our formal banquet both prestigious and enjoyable."
    },
    {
      id: "test-5",
      name: "Sneha Mukherjee",
      role: "Mother of the Birthday Girl",
      eventType: "18th Birthday Milestone",
      rating: 5,
      date: "October 2025",
      text: "Manisha brought so much warmth and fun to my daughter's 18th birthday bash! She kept the youth hooked, ensured the cake cutting was cinematic, and had everyone dancing. Thank you Manisha!"
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}

