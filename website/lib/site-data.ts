export const services = [
  {
    tag: "01",
    title: "Web Development",
    description:
      "Custom Next.js websites and digital platforms with fast performance, flexible content structures, and launch-focused user journeys.",
    points: [
      "Brand websites and landing pages",
      "Headless marketing experiences",
      "Performance and responsive implementation",
    ],
  },
  {
    tag: "02",
    title: "3D Visualization",
    description:
      "Spatial storytelling, product renders, and atmospheric visuals that make complex ideas feel tactile and premium.",
    points: [
      "Product visualization",
      "Architectural and concept scenes",
      "3D assets for campaigns and launch films",
    ],
  },
  {
    tag: "03",
    title: "Motion Design",
    description:
      "Motion systems and branded animation that sharpen product messaging and create a more cinematic digital rhythm.",
    points: [
      "Launch trailers and logo animation",
      "UI motion direction",
      "Social and campaign content systems",
    ],
  },
  {
    tag: "04",
    title: "Game Development",
    description:
      "Interactive environments, lightweight web games, and real-time experiences designed for attention and engagement.",
    points: [
      "Web-based interactive experiences",
      "Playable campaign prototypes",
      "Concept development for immersive worlds",
    ],
  },
] as const;

export const portfolioItems = [
  {
    slug: "nova-grid",
    name: "Nova Grid",
    category: "Web Development",
    year: "2025",
    summary:
      "A product launch website for an AI infrastructure company, built around deep-scroll storytelling and animated data reveals.",
    description:
      "Nova Grid translates a dense technical product into a cinematic browsing experience. The site combines modular editorial pacing, animated metrics, and deep-scroll transitions to make infrastructure feel tangible and premium.",
    clientScenario:
      "An AI infrastructure startup needed a launch-ready website before a major funding announcement and product demo cycle.",
    visualConcept:
      "An atmospheric interface system built from data grids, luminous accents, and motion-led sections that feel like walking through a command center.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion Design"],
    deliverables: ["Strategy", "Design", "Next.js"],
    images: [
      {
        src: "/portfolio/nova-grid-01.svg",
        alt: "Nova Grid interface overview",
      },
      {
        src: "/portfolio/nova-grid-02.svg",
        alt: "Nova Grid editorial layout composition",
      },
    ],
  },
  {
    slug: "vanta-habitat",
    name: "Vanta Habitat",
    category: "3D Visualization",
    year: "2025",
    summary:
      "High-contrast spatial renders for a future-living concept brand, combining technical realism with editorial composition.",
    description:
      "Vanta Habitat is a world-building visualization series for a speculative living environment. The work balances realistic materials with cinematic framing to create a premium future-lifestyle narrative.",
    clientScenario:
      "A property concept team needed investor-grade visualizations before physical prototyping and planning approvals.",
    visualConcept:
      "Shadowy architectural silhouettes, reflective surfaces, and light wells that make the environment feel both luxurious and mysterious.",
    technologies: ["Blender", "Octane Render", "Look Development", "Compositing"],
    deliverables: ["3D", "Lookdev", "Campaign"],
    images: [
      {
        src: "/portfolio/vanta-habitat-01.svg",
        alt: "Vanta Habitat architectural hero render",
      },
      {
        src: "/portfolio/vanta-habitat-02.svg",
        alt: "Vanta Habitat spatial composition board",
      },
    ],
  },
  {
    slug: "pulse-zero",
    name: "Pulse Zero",
    category: "Motion Design",
    year: "2024",
    summary:
      "An identity and motion toolkit for a fintech launch, including teaser loops, interface transitions, and keynote visuals.",
    description:
      "Pulse Zero establishes a motion language for launch videos, keynote visuals, and social edits. The system keeps every moving asset visually related while still feeling sharp and campaign-ready.",
    clientScenario:
      "A fintech startup was preparing launch-day assets across keynote, paid ads, onboarding, and social content.",
    visualConcept:
      "Signal-wave curves, kinetic bars, and restrained neon light that suggest speed, confidence, and financial precision.",
    technologies: ["After Effects", "Cinema 4D", "Figma", "Brand Motion"],
    deliverables: ["Motion", "Identity", "Launch"],
    images: [
      {
        src: "/portfolio/pulse-zero-01.svg",
        alt: "Pulse Zero motion identity cover frame",
      },
      {
        src: "/portfolio/pulse-zero-02.svg",
        alt: "Pulse Zero campaign animation rhythm study",
      },
    ],
  },
  {
    slug: "echo-sector",
    name: "Echo Sector",
    category: "Game Development",
    year: "2024",
    summary:
      "A browser-based sci-fi micro experience that translated a campaign universe into a playable teaser world.",
    description:
      "Echo Sector is a playable teaser world designed to extend a campaign beyond static content. It compresses exploration, world-building, and interaction into a web-first launch moment.",
    clientScenario:
      "A media brand wanted an interactive reveal asset that could bridge hype between announcement and full release.",
    visualConcept:
      "Derelict stations, HUD overlays, and atmospheric scanning effects built into a focused micro-experience.",
    technologies: ["Three.js", "WebGL", "Gameplay Prototyping", "UI Design"],
    deliverables: ["Gameplay", "UI", "WebGL"],
    images: [
      {
        src: "/portfolio/nova-grid-02.svg",
        alt: "Echo Sector interface exploration frame",
      },
      {
        src: "/portfolio/pulse-zero-01.svg",
        alt: "Echo Sector teaser world mood image",
      },
    ],
  },
  {
    slug: "astra-frame",
    name: "Astra Frame",
    category: "Web Development",
    year: "2024",
    summary:
      "A modular portfolio system for a creative hardware studio, with immersive transitions and editorial content blocks.",
    description:
      "Astra Frame gives a product-led studio a modular way to publish launches, stories, and visual process. It was built to feel immersive without sacrificing editorial clarity.",
    clientScenario:
      "A hardware studio needed a flexible site that could support launches, case studies, and team storytelling with one system.",
    visualConcept:
      "Large-format typography, cinematic spacing, and modular content frames that create a gallery-like sense of navigation.",
    technologies: ["Next.js", "Headless CMS", "Tailwind CSS", "Responsive Systems"],
    deliverables: ["CMS", "UX", "Frontend"],
    images: [
      {
        src: "/portfolio/nova-grid-01.svg",
        alt: "Astra Frame homepage composition",
      },
      {
        src: "/portfolio/vanta-habitat-02.svg",
        alt: "Astra Frame content system layouts",
      },
    ],
  },
  {
    slug: "luma-core",
    name: "Luma Core",
    category: "3D Visualization",
    year: "2023",
    summary:
      "Product hero visuals and cutaway sequences built for a new consumer device reveal campaign.",
    description:
      "Luma Core turns a technical product into a premium campaign language with hero stills, exploded views, and light-driven close-up renders built for launch marketing.",
    clientScenario:
      "A consumer device team needed visual assets before manufacturing photography was possible.",
    visualConcept:
      "Precision-lit product studies, floating cutaway components, and clean high-contrast backdrops that emphasize engineering detail.",
    technologies: ["Cinema 4D", "Redshift", "Photoshop", "3D Compositing"],
    deliverables: ["CGI", "Rendering", "Compositing"],
    images: [
      {
        src: "/portfolio/vanta-habitat-01.svg",
        alt: "Luma Core hero render composition",
      },
      {
        src: "/portfolio/pulse-zero-02.svg",
        alt: "Luma Core cutaway visual system",
      },
    ],
  },
] as const;
