import { SHOW_PRICING } from "./flags";
import { projects } from "./projects";

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
export type AboutItem = { when?: string; title: string; sub?: string; text: string; tags?: string[] };
export type AboutTab = { name: string; items: AboutItem[] };
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
  media: "photo" | "about" | "frames" | "services" | "skills" | "insights" | "pricing" | "form";
  aboutTabs?: AboutTab[];
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
export const GITHUB = "https://github.com/SuprabhatK";
export const GITHUB_LABEL = "github.com/SuprabhatK";
/** Add real client or colleague quotes here and a "Kind words" tab appears in the About section. Leave empty until you have them. */
export const testimonials: { quote: string; name: string; role: string }[] = [];
export const LINKEDIN = "https://www.linkedin.com/in/suprabhat-karmakar/";
export const LINKEDIN_LABEL = "linkedin.com/in/suprabhat-karmakar";

const allSections: Section[] = [
  {
    id: "intro",
    nav: "Home",
    eyebrow: "Suprabhat Karmakar · Senior Frontend Developer",
    title: "Websites & web apps that grow your business",
    desc: "Every great website starts with a simple conversation. Bring me a clear idea and I'll bring it to life, or bring me just a goal and I'll help you shape the right plan. With 5+ years as a Senior Frontend and Full-Stack Developer and consultant, I take care of everything from design and development to the database and hosting, until your website is live and working for your business.",
    points: ["Have an idea? I design and build it, end to end", "Want guidance? I help you shape the right website for your business", "AEM EDS (Adobe Edge Delivery Services) specialist"],
    media: "photo",
    hue: 0,
  },
  {
    id: "about",
    nav: "About",
    eyebrow: "About me",
    title: "Enterprise experience, hands-on craft",
    desc: "I am a Senior Frontend Developer from Mumbai with 5+ years of experience, including 2+ years specialising in Adobe Edge Delivery Services. I build fast, accessible websites and full-stack products, and I lead a team of 4 developers through planning, code reviews and delivery.",
    points: [
      "Based in Mumbai, India",
      "Enterprise work for insurance and finance brands",
      "Focused on reusable architecture, responsive design and performance",
      "Developer and consultant: I build your idea, or help you shape it first",
    ],
    media: "about",
    aboutTabs: [
      {
        name: "Experience",
        items: [
          {
            when: "Oct 2021 to now",
            title: "Senior Frontend Developer, AEM EDS",
            sub: "Dept Technology & Marketing Pvt Ltd / Tekno Point Multimedia India Pvt Ltd, Mumbai",
            text: "I architect and build reusable, responsive AEM EDS blocks, including complex ones with REST and GraphQL integrations and dynamic content rendering.",
            tags: ["AEM EDS", "JavaScript", "REST", "GraphQL"],
          },
          {
            title: "Website migrations",
            text: "I drive migrations from non-AEM platforms to AEM EDS: component-to-block mapping, migration scripts, content import, implementation and validation.",
            tags: ["Migration scripts", "Content import", "Validation"],
          },
          {
            title: "Authoring and platform setup",
            text: "I set up the Universal Editor with a repo-less approach and manage EDS administration, including CDN settings, robots.txt and Content Security Policy headers.",
            tags: ["Universal Editor", "CDN", "CSP"],
          },
          {
            title: "Production quality",
            text: "I lead production troubleshooting with a go-live checklist, defect resolution and quality validation across implementations.",
            tags: ["Go-live checklist", "Debugging", "QA"],
          },
          {
            title: "Frontend applications",
            text: "I build React, Redux and JavaScript applications, and traditional AEM features with HTL/Sightly and client libraries, with API integration and performance optimisation.",
            tags: ["React", "Redux", "HTL / Sightly"],
          },
        ],
      },
      {
        name: "Leadership",
        items: [
          { title: "Technical planning", text: "I lead technical implementation and project delivery, planning the approach and breaking work into clear tasks." },
          { title: "A team of 4 developers", text: "I coordinate a team of 4 through task allocation and delivery tracking, so everyone knows what is next." },
          { title: "Code reviews", text: "Every change is reviewed to keep quality consistent and the codebase easy to work in." },
          { title: "Talking to stakeholders", text: "Requirement calls, feedback sessions and bug discussions, like the two weekly calls with the NGS Super team, keep clients informed and projects on track." },
        ],
      },
      {
        name: "Clients",
        items: projects.map((pr) => ({ title: pr.name, sub: pr.industry + " · " + pr.kind, text: pr.summary })),
      },
      {
        name: "Education",
        items: [
          {
            when: "2018 to 2021",
            title: "Bachelor of Science in Computer Science",
            sub: "Mathuradas Vissanji College of Science",
            text: "A computer science foundation that I turned into hands-on frontend and full-stack experience from 2021 onward.",
          },
        ],
      },
      {
        name: "Exploring",
        items: [
          { title: "Adobe App Builder and I/O Runtime", text: "A proof of concept with a publish-event listener that captures content publishing events, for event-driven integrations." },
          { title: "Cloudflare Edge Workers", text: "Exploring how fund pages can be generated and rendered at the edge, to show what edge-based delivery makes possible." },
          { title: "Full-stack with Next.js", text: "Building complete products end to end, such as the Vaymora Foods store with its storefront, admin dashboard and database." },
        ],
      },
      ...(testimonials.length
        ? [{ name: "Kind words", items: testimonials.map((t) => ({ title: t.name, sub: t.role, text: t.quote })) }]
        : []),
    ],
    hue: -10,
  },
  {
    id: "consulting",
    nav: "Consulting",
    eyebrow: "Developer and consultant",
    title: "Bring your idea, or let's shape it together",
    desc: "Some clients arrive with a clear idea, and others simply know they want their business to grow. Both are a good place to start. If you already know what you need, I will build it. If you would like guidance first, we look at how your business works, who your customers are and what could help most, and I design the website around that.",
    points: [
      "Have a clear idea? I design and build it",
      "Want advice first? We look at your goals and customers together",
      "Either way, you get practical growth ideas you can act on",
    ],
    cta: { label: "Share your idea or goal", goto: "contact" },
    media: "about",
    aboutTabs: [
      {
        name: "Ways to start",
        items: [
          { title: "I have an idea", text: "Tell me what you want to build. I confirm the scope, then design and build it end to end, including the database and hosting." },
          { title: "I have a goal", text: "Tell me what you want to achieve, such as more enquiries or more sales, and we work out together what the website should do." },
          { title: "I have an existing site", text: "I can review it with you, suggest improvements, or migrate it, for example to AEM EDS." },
        ],
      },
      {
        name: "Where to focus",
        items: [
          { title: "A clear offer", text: "Visitors should understand within seconds what you do, who it is for and why they should choose you." },
          { title: "An obvious next step", text: "Call, WhatsApp, enquire or buy: every page can guide visitors to what to do next." },
          { title: "Proof that builds trust", text: "Case studies, reviews and results help new visitors feel confident about choosing you." },
          { title: "A fast mobile experience", text: "Most visitors arrive on a phone, so speed and clear layouts make a real difference." },
          { title: "Insight into what visitors do", text: "Analytics shows where visitors come from and what they do, so decisions are based on facts." },
          { title: "Easy updating for your team", text: "When your team can update the site themselves, it stays fresh without waiting for a developer." },
        ],
      },
      {
        name: "Growth ideas",
        items: [
          { title: "Capture more enquiries", text: "Clear calls to action, short forms and click-to-chat on WhatsApp make it easy for interested visitors to reach you.", tags: ["Forms", "WhatsApp", "Calls to action"] },
          { title: "Turn visitors into customers", text: "A simple journey, proof of quality and a smooth checkout or booking flow help visitors decide.", tags: ["Trust", "Speed", "Checkout"] },
          { title: "Bring customers back", text: "Offers such as a first-order gift, membership or gifting give people a reason to return, as on the Vaymora store.", tags: ["Offers", "Membership", "Gifting"] },
          { title: "Be found online", text: "Clean structure, good metadata and fast pages help search engines understand and rank your content.", tags: ["SEO", "Structure", "Speed"] },
          { title: "Know what works", text: "Analytics shows which pages and campaigns bring results, so decisions come from data, not guesswork.", tags: ["Google Analytics", "Reports"] },
          { title: "Save your team time", text: "An admin dashboard or easy authoring, plus integrations with the tools you already use, removes manual work.", tags: ["Admin", "Authoring", "Integrations"] },
        ],
      },
      {
        name: "By business",
        items: [
          { title: "Local and service businesses", text: "Show your services and areas clearly, make it easy to request a quote or booking, and keep contact details one tap away.", tags: ["Quote requests", "Clear services", "Mobile-first"] },
          { title: "Online stores", text: "Make products easy to find, remove friction at checkout, and add offers and accounts that encourage repeat purchases.", tags: ["Catalogue", "Checkout", "Accounts"] },
          { title: "Enterprise and content teams", text: "Use reusable components and easy authoring so teams publish quickly and consistently, with speed and accessibility built in.", tags: ["AEM EDS", "Authoring", "Performance"] },
          { title: "Logistics and B2B companies", text: "Explain the service and the process clearly, show credibility, and make it simple for a business buyer to make contact.", tags: ["Credibility", "Clear process", "Enquiries"] },
        ],
      },
    ],
    hue: -25,
  },
  {
    id: "services",
    nav: "Services",
    eyebrow: "What I do for your business",
    title: "Design to launch, end to end",
    desc: "One experienced developer and consultant for the whole journey. Bring your idea, or let's shape it together. I handle design, development, the database connection, hosting and support, so there are no hand-offs and nothing gets lost in translation.",
    points: ["Clear scope, a clear plan and regular updates", "Mobile-first, fast and search-friendly by default", "Database connected and the site hosted for you, end to end"],
    cta: { label: "Start a project", goto: "contact" },
    media: "services",
    services: [
      { title: "Business consulting", text: "Not sure where to start? We look at your goals and customers together and plan a website that helps your business grow.", get: "Your goals · growth ideas · clear next steps" },
      { title: "Design & frontend development", text: "Modern, brand-aligned and accessible interfaces built with React and Next.js.", get: "UI concept · responsive layouts · reusable components" },
      { title: "Full-stack development", text: "APIs, databases, authentication and admin panels that work together.", get: "REST/GraphQL · databases · secure admin" },
      { title: "E-commerce, end to end", text: "Storefront, catalogue, orders and a back-office you can run yourself.", get: "Product & order management · integrations" },
      { title: "AEM EDS delivery", text: "Adobe Edge Delivery Services sites with custom blocks and easy authoring.", get: "Blocks · Universal Editor · migrations" },
      { title: "Database, hosting & support", text: "After building, I connect your database, host the site and keep it fast, with reliable help after launch.", get: "Database setup · hosting · Lighthouse · fixes" },
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
          { name: "Database design & connectivity", benefit: "A well-structured database matched to your needs, connected securely to your site." },
          { name: "File & image storage", benefit: "Image and file uploads managed cleanly from your admin." },
          { name: "Admin dashboards", benefit: "Manage products, orders and content without touching code." },
          { name: "Adobe App Builder", benefit: "Event-driven integrations, such as reacting to content publishes." },
          { name: "Hosting & deployment", benefit: "Your site is deployed and hosted, so it goes live ready for visitors." },
          { name: "Domain setup", benefit: "Your own domain connected, so visitors reach the site on your address." },
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
          { name: "Google Analytics & tracking", benefit: "See how visitors find and use your site, with tracking set up properly from the start." },
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
        "summary": "There is no single best database. I choose one to fit your data, your traffic and your needs.",
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
          "It saves ongoing development cost, because everyday updates no longer need me."
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
          "A modern stack (Next.js, a managed database, cloud storage) lets you start lean and grow as the business does.",
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
        "title": "What a smooth launch looks like",
        "read": "2 min read",
        "summary": "A good launch is calm and predictable, because the checks were done before anyone sees the site.",
        "bullets": [
          "I run through a go-live checklist that covers performance, accessibility and redirects.",
          "Analytics, such as Google Analytics, is set up so you can see how visitors use the site from the start.",
          "Support continues after launch, with quick debugging and fixes if something needs attention."
        ]
      },
      {
        "cat": "Business",
        "title": "One developer, from build to hosting",
        "read": "2 min read",
        "summary": "When the same person builds the site, connects the database and hosts it, nothing falls between teams.",
        "bullets": [
          "No hand-offs: the design, the code, the database and the hosting are set up to work together.",
          "One point of contact if something needs attention after launch.",
          "Fewer delays, because there is no waiting for another vendor to connect the pieces."
        ]
      },
      {
        "cat": "Business",
        "title": "Start with your goals, not the design",
        "read": "2 min read",
        "summary": "A good website starts from what the business wants to achieve, not from choosing colours.",
        "bullets": [
          "Whether you arrive with an idea or just a goal, I start by understanding your customers and what you want to achieve.",
          "Then we decide together what the website needs to do for your business.",
          "The design and the build follow from that, so every page has a purpose."
        ]
      },
      {
        "cat": "Business",
        "title": "Website ideas that help a business grow",
        "read": "3 min read",
        "summary": "Small, practical changes often matter more than a full redesign.",
        "bullets": [
          "Make the next step obvious on every page.",
          "Show proof: case studies, reviews and results.",
          "Track what visitors do, then improve what the data shows."
        ]
      }
    ],
    hue: 15,
  },
  ...(SHOW_PRICING
    ? ([
    {
      id: "pricing",
      nav: "How I work",
      eyebrow: "How I work with you",
      title: "Know what to expect upfront",
      desc: "No surprises. Your estimate depends on four things: the functionality you need, how complex it is, what you can provide, and what I need to do. Pricing is negotiable and shared after a short call.",
      points: [
        "Scope and estimate in writing before I start",
        "Fixed price or hourly, your choice, and prices are negotiable",
        "Based on real projects: two sites in about 7 hours each, a full store in 9 days",
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
    title: "Tell me about your idea or goal",
    desc: "Have an idea, a goal, or an existing site you would like to improve? Share a few details and I will reply with next steps, or call me directly.",
    media: "form",
    hue: -45,
  },
];

/** the sections shown on the home page (the pricing section is only included when SHOW_PRICING is on) */
export const sections: Section[] = allSections;
