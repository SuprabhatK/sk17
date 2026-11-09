export type Project = {
  id: string;
  name: string;
  industry: string;
  kind: string;
  duration: string;
  durationNote: string;
  role: string;
  url: string;
  image: string;
  ratio?: number;
  stack: string[];
  summary: string;
  brief: string;
  facts: { n: string; label: string }[];
  delivered: { title: string; text: string }[];
  process: { title: string; text: string }[];
  clientProvided: string[];
  iDid: string[];
};

/* NOTE: facts come from Suprabhat. Copy in the "delivered" and "process" sections was
   expanded around those facts, so review each project and edit anything that is not accurate. */
export const projects: Project[] = [
  {
    id: "ngs",
    name: "NGS Super",
    industry: "Superannuation (Australia)",
    kind: "AEM EDS",
    duration: "3 months",
    durationNote: "Regular client calls",
    role: "AEM EDS developer: blocks, authoring, navigation and API integration",
    url: "https://www.ngssuper.com.au/",
    image: "/projects/ngs.webp",
    stack: ["AEM EDS", "JavaScript", "CSS", "REST APIs", "Universal Editor", "Google Analytics"],
    summary: "A superannuation member website on AEM Edge Delivery Services, delivered in 3 months with a steady weekly rhythm of client calls.",
    brief:
      "NGS Super needed a fast, accessible website that its own team could update without developers. AEM EDS was the platform: lightweight pages, easy authoring, and a header that stays in step with the site as pages change.",
    facts: [
      { n: "3 months", label: "start to live" },
      { n: "AEM EDS", label: "blocks and authoring setup" },
      { n: "Dynamic", label: "navigation that updates itself" },
      { n: "REST", label: "API integrations in blocks" },
    ],
    delivered: [
      {
        title: "Authoring components (AEM EDS blocks)",
        text: "I designed and built a library of reusable blocks, each with a simple authoring structure that editors fill in. Content teams assemble pages from these blocks, so most new pages need no developer at all. Each block is responsive, accessible and checked against Lighthouse.",
      },
      {
        title: "Dynamic navigation",
        text: "The header menu is generated from the site's own page structure. When pages are added, renamed or moved, the header updates automatically, with no code change and no redeploy. That removes a whole class of 'we forgot to update the menu' problems.",
      },
      {
        title: "Client API integration",
        text: "The client provided the APIs, and I connected them to blocks so live data appears on authored pages, with proper loading and error states so a slow or failing API never breaks the page.",
      },
      {
        title: "Platform setup and go-live",
        text: "EDS configuration, performance and accessibility checks, and a go-live checklist, so the launch was calm and predictable.",
      },
      {
        title: "Google Analytics",
        text: "I added Google Analytics to the site, so the team can measure traffic and see how members find and use their pages.",
      },
    ],
    process: [
      { title: "Call 1: requirement gathering", text: "Every week we walked through the next set of pages and components, confirmed content and API needs, and agreed priorities." },
      { title: "Build between calls", text: "I built the blocks and pages, tested them, and shared a preview link so the client could see real progress, not slides." },
      { title: "Call 2: feedback and bugs", text: "Later the same week we reviewed the preview together, logged feedback and bugs, and agreed exactly what would be fixed next." },
      { title: "Repeat, then launch", text: "Repeating this loop through the project kept surprises small. At the end the site went live." },
    ],
    clientProvided: ["The backend APIs and access to them", "Requirements and priorities in the weekly call", "Prompt feedback on each preview"],
    iDid: ["Block architecture and authoring model", "Dynamic header navigation", "API integration with error handling", "Responsive build, QA and performance tuning", "Go-live and support", "Google Analytics setup"],
  },
  {
    id: "tataaia",
    name: "Tata AIA Life Insurance",
    industry: "Life insurance (India)",
    kind: "AEM + React",
    duration: "3 years",
    durationNote: "Long-running engagement",
    role: "Frontend developer: AEM components, React features and Redux state",
    url: "https://www.tataaia.com/",
    image: "/projects/tataaia.webp",
    ratio: 2.093,
    stack: ["AEM", "HTL / Sightly", "Client Libraries", "React", "Redux", "REST APIs", "Google Analytics"],
    summary: "A 3-year engagement on a large insurance website with 1000+ pages and 100+ API calls, built with AEM components and React features powered by Redux.",
    brief:
      "Tata AIA runs one of India's large insurance sites: over a thousand pages, many product and fund pages, and customer features that depend on live data. The work was to keep that platform fast, consistent and easy for authors to extend while adding real functionality.",
    facts: [
      { n: "3 years", label: "of continuous delivery" },
      { n: "1000+", label: "pages on the site" },
      { n: "100+", label: "API calls integrated" },
      { n: "Redux", label: "for predictable state" },
    ],
    delivered: [
      {
        title: "Authoring components in AEM",
        text: "I built AEM components with author-friendly dialogs, HTL (Sightly) templates and client libraries, so content teams can assemble and maintain 1000+ pages from consistent building blocks instead of one-off pages.",
      },
      {
        title: "Interactive features in React",
        text: "Functionality that needs real interaction was built as React components inside AEM pages: fund information, contact-us forms, and flows for updating a customer's email address or mobile number, each with validation and clear feedback.",
      },
      {
        title: "State management with Redux",
        text: "Redux holds the shared state: form data across steps, user details, API responses and loading/error status. Components stay small and predictable, which matters when one feature touches many APIs.",
      },
      {
        title: "API integration at scale",
        text: "More than 100 API calls power funds data, contact requests, customer detail updates and more. I structured them behind a consistent integration layer with validation and error handling, so adding the next API is routine instead of risky.",
      },
      {
        title: "Quality in production",
        text: "Code reviews, browser debugging, accessibility checks and production troubleshooting kept a large, always-live site stable across releases.",
      },
      {
        title: "Google Analytics",
        text: "Google Analytics is integrated across the site, including the React-driven journeys, so the business can measure traffic and understand how visitors use its pages and features.",
      },
    ],
    process: [
      { title: "Agile, in sprints", text: "Work was planned in sprints with the wider team: requirements refined, tasks estimated and delivered in regular releases." },
      { title: "Components first", text: "Shared AEM components and React building blocks were built once and reused across pages and features." },
      { title: "Review and release", text: "Every change went through code review and testing before release, with production support afterwards." },
    ],
    clientProvided: ["Business requirements and product rules", "API specifications and environments", "Page structure and content from the authoring teams"],
    iDid: ["AEM components, templates and dialogs", "React feature development", "Redux store design and state flows", "API integration and validation", "Debugging, performance and accessibility", "Google Analytics setup"],
  },
  {
    id: "generali",
    name: "Generali Central Insurance",
    industry: "General and health insurance (India)",
    kind: "AEM + React",
    duration: "2 years",
    durationNote: "API discussions, logic and change requests",
    role: "Frontend developer: AEM components, React features, API integration and change requests",
    url: "https://www.generalicentralinsurance.com/",
    image: "/projects/generali.webp",
    ratio: 2.096,
    stack: ["AEM", "HTL / Sightly", "React", "REST APIs", "JavaScript", "Google Analytics"],
    summary: "A 2-year AEM and React engagement on an insurance website, built around close API discussions, careful functionality logic and a steady flow of change requests.",
    brief:
      "An insurer's website is more than pages: products, renewals, claims and customer journeys all depend on APIs and business rules that keep changing. The work was to build and maintain that functionality reliably while the business kept evolving it.",
    facts: [
      { n: "2 years", label: "of continuous delivery" },
      { n: "AEM + React", label: "authoring plus interactive features" },
      { n: "API talks", label: "agreed with the client's teams" },
      { n: "Change requests", label: "handled as the business evolved" },
    ],
    delivered: [
      {
        title: "Authoring components in AEM",
        text: "I built AEM components with author-friendly dialogs and templates, so content teams can create and update pages from consistent building blocks without developer help.",
      },
      {
        title: "Functionality in React",
        text: "Interactive journeys were built as React components inside AEM pages, with the validation, states and feedback users expect from a modern insurance site.",
      },
      {
        title: "API discussions and integration",
        text: "Before building, I worked through each API with the client's teams: what is requested, what comes back, which errors can occur. Then I integrated it with clear loading and error handling, so the feature behaves well when a service is slow or fails.",
      },
      {
        title: "Functionality logic",
        text: "I translated business rules into code, asking the right questions up front so edge cases were settled in conversation instead of found in production.",
      },
      {
        title: "Change requests",
        text: "Requirements changed over two years. Each change request was understood, estimated, implemented, tested and released, keeping the codebase tidy so the next change stayed cheap.",
      },
      {
        title: "Google Analytics",
        text: "I added Google Analytics tracking to the site, including the React-driven journeys, so the team can measure traffic and understand how customers use the pages.",
      },
    ],
    process: [
      { title: "Discuss the API and the logic", text: "For each feature we agreed the API contract and the business rules with the client before any code was written." },
      { title: "Build and review", text: "Components and integrations were built, code reviewed and tested against the agreed behaviour." },
      { title: "Change request cycle", text: "New or changed requirements followed a simple loop: clarify, estimate, implement, test, release." },
    ],
    clientProvided: ["API specifications and test environments", "Business rules and functionality requirements", "Change requests and priorities"],
    iDid: ["AEM components and templates", "React feature development", "API discussion and integration", "Implementing and adjusting business logic", "Testing, debugging and release support", "Google Analytics setup"],
  },
  {
    id: "vaymora",
    name: "Vaymora Foods",
    industry: "Online food retail",
    kind: "Full-stack e-commerce",
    duration: "9 days",
    durationNote: "Concept to live store",
    role: "Full-stack developer: design, storefront, admin, database and deployment",
    url: "https://www.vaymorafoods.com/",
    image: "/projects/vaymora.webp",
    stack: ["Next.js", "React", "Managed database", "Cloud image storage", "Admin dashboard", "Google Analytics"],
    summary: "A complete online store built end to end in 9 days: storefront, admin dashboard, database, image storage and a large application integration.",
    brief:
      "A food brand needed to sell online quickly, with its own admin and no ongoing platform fees eating into margin. I built the whole stack: what customers see, what the team manages, and the data underneath.",
    facts: [
      { n: "9 days", label: "from start to live" },
      { n: "Full-stack", label: "storefront + admin + DB" },
      { n: "Database", label: "managed Postgres in this build" },
      { n: "Cloud", label: "image storage" },
    ],
    delivered: [
      {
        title: "Storefront",
        text: "A fast, premium-feeling shop: product browsing, search and cart, customer accounts, a membership programme, gifting, free-delivery messaging and a first-order offer, plus a WhatsApp shortcut for quick customer contact.",
      },
      {
        title: "Admin dashboard",
        text: "A private back-office for the team to manage products, images and orders without touching code, so everyday changes never need a developer.",
      },
      {
        title: "Database and image storage",
        text: "A database holds products, customers and orders (managed Postgres in this build), and product images are uploaded from the admin to cloud storage and served fast to shoppers. The exact tools can change to suit each client's requirements.",
      },
      {
        title: "Large application integration",
        text: "The store connects to a larger application, so data and processes flow between systems instead of being re-entered by hand.",
      },
      {
        title: "Google Analytics",
        text: "Google Analytics is set up on the store, so the owner can see traffic and how shoppers use the site, and make decisions from real data.",
      },
    ],
    process: [
      { title: "Days 1 to 2: foundations", text: "Data model, project setup and the storefront skeleton, so everything after builds on solid ground." },
      { title: "Days 3 to 5: shopping experience", text: "Catalogue, search, cart, accounts and offers." },
      { title: "Days 6 to 7: admin", text: "Dashboard, product management and image upload." },
      { title: "Days 8 to 9: integrate, test, launch", text: "Application integration, QA across devices, deployment and go-live." },
    ],
    clientProvided: ["Brand identity and product details", "Offers and business rules, such as the first-order gift and delivery threshold", "Feedback on previews during the build"],
    iDid: ["Information architecture and UI", "Storefront, cart and accounts", "Admin dashboard", "Database design and image storage", "Integration, testing and deployment", "Google Analytics setup"],
  },
  {
    id: "siddhivinayak",
    name: "Siddhivinayak Water Transport",
    industry: "Water supply services (Mumbai)",
    kind: "Frontend website",
    duration: "About 7 hours",
    durationNote: "Built and live in one working day",
    role: "Frontend developer: design, build and deploy",
    url: "https://siddhivinayak-water-transport.vercel.app/",
    image: "/projects/siddhivinayak.webp",
    stack: ["Next.js", "React", "CSS", "Vercel"],
    summary: "A clear, trust-building website for a 24x7 water supply business, designed, built and live in about 7 hours.",
    brief:
      "A local service business needed a professional online presence that explains its services and makes it easy to request a delivery. The goal: live fast, look credible, work on every phone.",
    facts: [
      { n: "~7 hrs", label: "to build and go live" },
      { n: "Responsive", label: "works on every device" },
      { n: "Live", label: "deployed and publicly available" },
      { n: "Clear CTAs", label: "request supply, view services" },
    ],
    delivered: [
      { title: "Focused page structure", text: "A strong hero with the offer and two clear actions, followed by services, areas served and contact, so a visitor understands the business in seconds." },
      { title: "Responsive, fast and simple", text: "Mobile-first layout with lightweight assets, so it loads quickly on phones and mid-range connections." },
      { title: "Deployed live", text: "Deployed live and ready to connect to a custom domain whenever the business wants." },
    ],
    process: [
      { title: "Brief to structure", text: "Agree the services, areas and main call to action." },
      { title: "Design and build", text: "Layout, copy placement and build in one focused session." },
      { title: "Deploy", text: "Test on mobile and desktop, then publish live." },
    ],
    clientProvided: ["Business details, services and areas covered", "Logo and any photos"],
    iDid: ["Page structure and visual design", "Responsive frontend build", "Testing and deployment"],
  },
  {
    id: "starlite",
    name: "Starlite Global",
    industry: "International shipping and logistics",
    kind: "Frontend website",
    duration: "About 7 hours",
    durationNote: "Built and live in one working day",
    role: "Frontend developer: design, build and deploy",
    url: "https://starliteglobal-id7j-git-master-suprabhatk17s-projects.vercel.app/",
    image: "/projects/starlite.webp",
    stack: ["Next.js", "React", "CSS", "Vercel"],
    summary: "A corporate website for an international logistics company, designed, built and live in about 7 hours.",
    brief:
      "A shipping company needed a clean corporate site that communicates reliability: what it does, how it works and how to get in touch, with a design that feels established.",
    facts: [
      { n: "~7 hrs", label: "to build and go live" },
      { n: "5 sections", label: "home, about, services, core business, contact" },
      { n: "Responsive", label: "works on every device" },
      { n: "Live", label: "deployed and publicly available" },
    ],
    delivered: [
      { title: "Corporate site structure", text: "Home, About, Services, Core Business and Contact, with a clear headline and call to action up front." },
      { title: "Brand-led visual design", text: "Imagery, colour and typography that match the company's logo and industry." },
      { title: "Deployed live", text: "Deployed live, with a custom domain easy to add later." },
    ],
    process: [
      { title: "Brief to structure", text: "Agree sections, tone and the main action." },
      { title: "Design and build", text: "Layout and build in a single focused session." },
      { title: "Deploy", text: "Responsive testing, then live." },
    ],
    clientProvided: ["Company details and service descriptions", "Logo and brand colours"],
    iDid: ["Page structure and visual design", "Responsive frontend build", "Testing and deployment"],
  },
];
