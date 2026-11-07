import { SHOW_PRICING } from "./flags";

export type Card = {
  title: string;
  sub: string;
  tags?: string[];
  href?: string;
  image?: string;
  ratio?: number;
  cta?: string;
};

export type Service = { title: string; text: string; get: string };
export type SkillTab = { name: string; tiles: { name: string; benefit: string }[] };
export type Insight = { cat: "AEM EDS" | "Full-stack" | "Business"; title: string; read: string; summary: string; bullets: string[] };

export type Section = {
  id: string;
  nav: string;
  links?: { label: string; href: string }[];
  eyebrow: string;
  title: string;
  desc: string;
  points?: string[];
  cta?: { label: string; goto: string };
  media: "photo" | "frames" | "services" | "skills" | "insights" | "pricing" | "form";
  cards?: Card[];
  services?: Service[];
  process?: string[];
  tabs?: SkillTab[];
  stats?: { n: string; label: string }[];
  insights?: Insight[];
  hue: number;
};

export const EMAIL = "suprabhat.karmakar17@gmail.com";
export const PHONE = "+91 96198 10168";
export const PHONE_TEL = "+919619810168";
export const WHATSAPP_NUMBER = PHONE_TEL.replace("+", "");
export const whatsappLink = (text = "") => `https://wa.me/${WHATSAPP_NUMBER}${text ? "?text=" + encodeURIComponent(text) : ""}`;
export const LINKEDIN = "https://linkedin.com/in/suprabhat-karmakar";
export const LINKEDIN_LABEL = "linkedin.com/in/suprabhat-karmakar";

const allSections: Section[] = [
  {
    id: "intro",
    nav: "Home",
    eyebrow: "Hello, I'm Suprabhat Karmakar",
    title: "Websites & web apps that grow your business",
    desc: "Senior Frontend & Full-Stack Developer with 5+ years of experience. I design, build and launch fast, accessible websites and e-commerce platforms, from the first idea to a live product.",
    points: ["Website design and frontend development", "Full-stack apps: APIs, database and admin panel", "AEM EDS (Adobe Edge Delivery Services) specialist"],
    media: "photo",
    hue: 0,
  },
  {
    id: "services",
    nav: "Services",
    eyebrow: "What I do for your business",
    title: "Design to launch, end to end",
    desc: "One experienced developer for the whole journey. You share the idea; I handle design, development, deployment and support, so there are no hand-offs and nothing gets lost in translation.",
    points: ["Clear scope, timeline and regular updates", "Mobile-first, fast and search-friendly by default", "Free hosting options to keep your running costs low"],
    cta: { label: "Start a project", goto: "contact" },
    media: "services",
    services: [
      { title: "Website design", text: "Modern, brand-aligned layouts that look sharp on every device.", get: "UI concept · responsive layouts · design system" },
      { title: "Frontend development", text: "Fast, accessible interfaces built with React and Next.js.", get: "Reusable components · animation · SEO basics" },
      { title: "Full-stack development", text: "APIs, databases, authentication and admin panels that work together.", get: "REST/GraphQL · databases · secure admin" },
      { title: "E-commerce, end to end", text: "Storefront, catalogue, orders and a back-office you can run yourself.", get: "Product & order management · integrations" },
      { title: "AEM EDS delivery", text: "Adobe Edge Delivery Services sites with custom blocks and easy authoring.", get: "Blocks · Universal Editor · migrations" },
      { title: "Performance & support", text: "Lighthouse audits, accessibility checks and reliable post-launch help.", get: "Speed tuning · fixes · go-live checklist" },
    ],
    process: ["Discover", "Design", "Build", "Launch", "Support"],
    hue: -20,
  },
  {
    id: "eds",
    nav: "AEM EDS",
    eyebrow: "Enterprise · 2+ years",
    title: "AEM EDS for large brands",
    desc: "I architect reusable AEM EDS (Edge Delivery Services) blocks and ship them for large insurance and finance brands, from authoring setup to go-live.",
    points: [
      "Custom AEM EDS blocks with REST & GraphQL integrations",
      "Auto-blocking and Universal Editor (repo-less setup)",
      "Non-AEM to AEM EDS migrations and admin configuration",
    ],
    links: [{ label: "Read the case studies", href: "/projects#ngs" }],
    media: "frames",
    cards: [
      { title: "NGS Super", sub: "Superannuation · AEM EDS", tags: ["AEM EDS", "Blocks", "GraphQL"], href: "https://www.ngssuper.com.au/", image: "/projects/ngs.webp", cta: "Visit NGS Super" },
      { title: "Tata AIA", sub: "Insurance · AEM + React", tags: ["AEM", "React", "APIs"], href: "https://www.tataaia.com/", image: "/projects/tataaia.webp", ratio: 2.093, cta: "Visit Tata AIA" },
      { title: "Generali Central Insurance", sub: "Insurance · AEM + React", tags: ["AEM", "React", "APIs"], href: "https://www.generalicentralinsurance.com/", image: "/projects/generali.webp", ratio: 2.096, cta: "Visit Generali Central" },
    ],
    hue: -30,
  },
  {
    id: "commerce",
    nav: "Commerce",
    eyebrow: "Full-stack · E-commerce",
    title: "Commerce, end to end",
    desc: "Vaymora Foods is a complete online store that I built across the whole stack, from storefront to database.",
    points: ["Storefront with account and checkout flows", "Admin dashboard and a large-case application integration", "A database for products, customers and orders, plus cloud storage for images"],
    links: [{ label: "Read the case study", href: "/projects#vaymora" }],
    media: "frames",
    cards: [{ title: "Vaymora Foods", sub: "Storefront + admin + database", tags: ["Next.js", "Database", "Image storage", "Admin"], href: "https://www.vaymorafoods.com/", image: "/projects/vaymora.webp", cta: "Visit Vaymora Foods" }],
    hue: 25,
  },
  {
    id: "frontend",
    nav: "Interfaces",
    eyebrow: "Frontend builds",
    title: "Polished interfaces",
    desc: "Responsive business websites with clean structure, strong performance and clear calls to action.",
    points: ["Pixel-accurate, mobile-first layouts", "Reusable, well-structured components", "Lighthouse and accessibility minded"],
    links: [{ label: "Read the case studies", href: "/projects#siddhivinayak" }],
    media: "frames",
    cards: [
      { title: "Siddhivinayak Water Transport", sub: "Service business website", tags: ["Frontend", "Responsive"], href: "https://siddhivinayak-water-transport.vercel.app/", image: "/projects/siddhivinayak.webp", cta: "Visit Siddhivinayak" },
      { title: "Starlite Global", sub: "Logistics company website", tags: ["Frontend", "Responsive"], href: "https://starliteglobal-id7j-git-master-suprabhatk17s-projects.vercel.app/", image: "/projects/starlite.webp", cta: "Visit Starlite Global" },
    ],
    hue: 40,
  },
  {
    id: "skills",
    nav: "Skills",
    eyebrow: "Skills & stack",
    title: "The tools behind the results",
    desc: "Every tool below is here for a reason: it makes your site faster to load, easier to update, or simpler to grow. Pick a category to see what each skill means for you.",
    points: ["5+ years in frontend development", "Led a team of 4 developers: planning, reviews and delivery", "Exploring edge rendering with Cloudflare Workers and Adobe App Builder"],
    media: "skills",
    stats: [
      { n: "5+", label: "years experience" },
      { n: "2+", label: "years AEM EDS" },
      { n: "4", label: "developers led" },
      { n: "6", label: "live projects shown" },
    ],
    tabs: [
      {
        name: "AEM EDS",
        tiles: [
          { name: "Custom blocks", benefit: "Reusable components your authors can drop into any page." },
          { name: "Auto-blocking", benefit: "Plain documents turn into structured, designed pages automatically." },
          { name: "Universal Editor", benefit: "Edit content visually, with a repo-less setup that is quick to launch." },
          { name: "Migrations to AEM EDS", benefit: "Move your existing site over with content, mapping and validation handled." },
          { name: "Admin & config", benefit: "CDN settings, robots.txt and security (CSP) headers set up correctly." },
          { name: "Dynamic Media", benefit: "Optimised images and video that load fast on any device." },
        ],
      },
      {
        name: "Frontend",
        tiles: [
          { name: "React & Next.js", benefit: "Interactive sites that are quick to load and good for SEO." },
          { name: "JavaScript (ES6+)", benefit: "Clean, maintainable code that is easy to extend later." },
          { name: "Redux", benefit: "Predictable state for larger apps with many moving parts." },
          { name: "HTML5, CSS3, SCSS", benefit: "Semantic, accessible markup with consistent styling." },
          { name: "Tailwind CSS", benefit: "Rapid, consistent UI work without bloated stylesheets." },
          { name: "GSAP animation", benefit: "Smooth, purposeful motion that makes a brand feel premium." },
        ],
      },
      {
        name: "Full-stack",
        tiles: [
          { name: "REST APIs", benefit: "Reliable connections between your site and other systems." },
          { name: "GraphQL", benefit: "Fetch exactly the data a page needs, nothing extra." },
          { name: "Database design & connectivity", benefit: "A well-structured database matched to your needs and budget, connected securely to your site." },
          { name: "File & image storage", benefit: "Image and file uploads managed cleanly from your admin." },
          { name: "Admin dashboards", benefit: "Manage products, orders and content without touching code." },
          { name: "Adobe App Builder", benefit: "Event-driven integrations, such as reacting to content publishes." },
        ],
      },
      {
        name: "Delivery",
        tiles: [
          { name: "Lighthouse audits", benefit: "Measured speed and quality, not guesses." },
          { name: "Accessibility", benefit: "Usable by everyone, and a smaller legal and reputational risk." },
          { name: "Code reviews", benefit: "Fewer bugs reach production and the codebase stays tidy." },
          { name: "Agile / Scrum", benefit: "Visible progress in short cycles, with room to adjust." },
          { name: "Go-live checklist", benefit: "A calm, predictable launch with nothing forgotten." },
          { name: "Production support", benefit: "Quick debugging and fixes when it matters most." },
          { name: "Google Analytics & tracking", benefit: "See how visitors find and use your site, with tracking set up properly from day one." },
          { name: "SEO fundamentals", benefit: "Clean metadata and structure so search engines understand your pages." },
        ],
      },
    ],
    hue: -80,
  },
  {
    id: "insights",
    nav: "Insights",
    eyebrow: "Insights for decision makers",
    title: "Know before you build",
    desc: "Short reads on AEM EDS, full-stack development and getting real value from a website. Filter by topic, then open any of them.",
    points: ["AEM EDS, full-stack and business topics", "Straight answers, including when a simpler option fits better", "Written for business owners, not only developers"],
    cta: { label: "Discuss your project", goto: "contact" },
    media: "insights",
    insights: [
      {
        "cat": "AEM EDS",
        "title": "Why AEM EDS is worth a look",
        "read": "2 min read",
        "summary": "AEM EDS (Edge Delivery Services) serves pages as lightweight HTML from a global network, so sites are quick by design.",
        "bullets": [
          "Speed: pages ship little JavaScript, which helps visitors, search ranking and conversion.",
          "Authoring: marketers write in familiar documents or the Universal Editor, with no developer needed for routine updates.",
          "Maintenance: a simpler codebase of plain JavaScript and CSS is cheaper to change than a heavy legacy stack."
        ]
      },
      {
        "cat": "AEM EDS",
        "title": "Authoring that marketers actually enjoy",
        "read": "2 min read",
        "summary": "The best platform is the one your team can use without raising a ticket for every change.",
        "bullets": [
          "I build reusable blocks, so editors compose pages from a library instead of requesting new code.",
          "Dynamic navigation means the header updates itself when pages are added, renamed or moved.",
          "Clear block structures keep pages consistent, even with many authors."
        ]
      },
      {
        "cat": "AEM EDS",
        "title": "Moving to AEM EDS without losing your SEO",
        "read": "3 min read",
        "summary": "A migration is mostly planning: knowing what you have, mapping it, and checking the result before anyone sees it.",
        "bullets": [
          "Audit your pages and map each component to a reusable block.",
          "Import content with scripts so nothing is retyped by hand, and keep URLs and redirects intact.",
          "Configure CDN, robots.txt and security headers, then run a go-live checklist and validation pass."
        ]
      },
      {
        "cat": "Full-stack",
        "title": "Why I build stores and apps on Next.js",
        "read": "3 min read",
        "summary": "Next.js lets one codebase serve fast, search-friendly pages and the APIs behind them.",
        "bullets": [
          "Pages render on the server, so they load quickly and search engines can read them.",
          "Frontend and API routes live together, which keeps the project simple to build and to maintain.",
          "The React ecosystem is huge, so features like forms, tables and animation are well supported."
        ]
      },
      {
        "cat": "Full-stack",
        "title": "Choosing the right database for your project",
        "read": "3 min read",
        "summary": "There is no single best database. I choose one to fit your data, your traffic and your budget.",
        "bullets": [
          "Relational databases (such as Postgres) suit shops and apps whose data is connected: products, customers and orders.",
          "I connect the database securely to your site and keep your options open, so you can change provider later.",
          "Vaymora Foods uses a managed Postgres database with cloud image storage. Another project may call for something different."
        ]
      },
      {
        "cat": "Full-stack",
        "title": "An admin dashboard lets your team run the business",
        "read": "2 min read",
        "summary": "If every product or price change needs a developer, the site slows the business down.",
        "bullets": [
          "Staff add products, upload images and manage orders themselves, with no code involved.",
          "Access can be limited to the right people, so changes are safe.",
          "It saves ongoing development cost, because day-to-day updates no longer need me."
        ]
      },
      {
        "cat": "Full-stack",
        "title": "Connecting your systems with APIs",
        "read": "3 min read",
        "summary": "Integrations stop your team from entering the same data twice and keep every system in step.",
        "bullets": [
          "I integrate REST and GraphQL APIs with clear loading, error and retry-friendly states.",
          "On a large insurance site that meant 100+ API calls for funds, contact requests and customer updates.",
          "A tidy integration layer makes adding the next API routine instead of risky."
        ]
      },
      {
        "cat": "Business",
        "title": "Custom online store or off-the-shelf?",
        "read": "3 min read",
        "summary": "Hosted platforms are quickest to start. A custom store gives you control once your needs outgrow templates.",
        "bullets": [
          "Choose custom when you need your own admin, unusual workflows or integrations with existing systems.",
          "A modern stack (Next.js, a managed database, cloud storage) can run on free tiers while you validate the idea.",
          "Vaymora Foods is built this way: storefront, admin dashboard, database and image storage."
        ]
      },
      {
        "cat": "Business",
        "title": "Performance and accessibility pay for themselves",
        "read": "2 min read",
        "summary": "A fast, accessible site loads quicker, reaches more people and is easier for search engines to understand.",
        "bullets": [
          "I audit with Lighthouse before and after, so improvements are measured.",
          "Accessible design widens your audience and lowers compliance risk.",
          "Good structure makes future changes faster and cheaper."
        ]
      },
      {
        "cat": "Business",
        "title": "Launching on a small budget",
        "read": "2 min read",
        "summary": "You do not need an expensive setup to go live professionally.",
        "bullets": [
          "Free hosting tiers are enough for many brochure sites; I choose one that fits your terms of use.",
          "Two of my sites went live in about 7 hours each, on free hosting.",
          "You can upgrade hosting or add a custom domain later without rebuilding anything."
        ]
      }
    ],
    hue: 15,
  },
  ...(SHOW_PRICING
    ? ([
    {
      id: "pricing",
      nav: "Pricing",
      eyebrow: "Transparent pricing",
      title: "Know the cost upfront",
      desc: "No surprises. My rate is shown openly, and your quote depends on four things: the functionality you need, how complex it is, what you can provide, and what I need to do. And the price is negotiable.",
      points: [
        "Fixed price or hourly, your choice, and prices are negotiable",
        "Calibrated on real projects: two sites in about 7 hours each, a full store in 9 days",
        "Try the interactive estimator for your own idea",
      ],
      links: [{ label: "Open the estimator", href: "/projects#pricing" }],
      media: "pricing",
      hue: 20,
    },
      ] as Section[])
    : []),
  {
    id: "contact",
    nav: "Contact",
    eyebrow: "Let's work together",
    title: "Tell me about your project",
    desc: "Need a new website, an online store or an AEM EDS specialist? Send a few details and I'll reply with next steps, or call me directly.",
    media: "form",
    hue: -45,
  },
];

/** the sections shown on the home page (the pricing section is only included when SHOW_PRICING is on) */
export const sections: Section[] = allSections;
