import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ThemeBolt from "@/components/ThemeBolt";
import { LinkedInIcon, LinkedInLogo } from "@/components/Social";
import ProjectsDial from "@/components/ProjectsDial";
import { projects } from "@/lib/projects";
import { PHONE, PHONE_TEL, EMAIL, LINKEDIN } from "@/lib/content";
import { SHOW_PRICING } from "@/lib/flags";
import "./projects.css";

export const metadata: Metadata = SHOW_PRICING
  ? {
      title: "Project case studies & how I work | Suprabhat Karmakar",
      description: "Detailed case studies of AEM EDS, React and full-stack projects by Suprabhat Karmakar, with a clear view of how I work with clients and an interactive project estimator.",
    }
  : {
      title: "Project case studies | Suprabhat Karmakar",
      description: "Detailed case studies of AEM EDS, React and full-stack projects by Suprabhat Karmakar.",
    };

const shortName: Record<string, string> = { ngs: "NGS Super", tataaia: "Tata AIA", generali: "Generali Central", vaymora: "Vaymora Foods", siddhivinayak: "Siddhivinayak", starlite: "Starlite Global" };
const dialItems = [
  { id: "top", label: "Overview" },
  ...projects.map((p) => ({ id: p.id, label: shortName[p.id] ?? p.name })),
  ...(SHOW_PRICING ? [{ id: "pricing", label: "How I work" }] : []),
];

export default async function ProjectsPage() {
  // the pricing block is only loaded (and shipped) when the flag is on
  const PricingBlock = SHOW_PRICING ? (await import("@/components/PricingBlock")).default : null;
  return (
    <div className="pg">
      <ProjectsDial items={dialItems} />
      <header className="pg-top">
        <div className="logo">
          <ThemeBolt />
          <Link href="/" aria-label="Home">
            17
          </Link>
        </div>
        <nav className="pg-nav">
          <a href="#work">Case studies</a>
          {SHOW_PRICING && <a href="#pricing">How I work</a>}
          <LinkedInIcon href={LINKEDIN} />
          <Link className="pill" href="/?s=contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="pg-main">
        {/* hero */}
        <section id="top" className="pg-hero">
          <Link className="back" href="/">
            ← Back to portfolio
          </Link>
          <p className="eyebrow">Project case studies</p>
          <h1 className="title">{SHOW_PRICING ? "What I built, how it was run, and how I work with you" : "What I built and how it was run"}</h1>
          <p className="lead">
            Six real projects, from a 3-year enterprise engagement to sites that went live in 7 hours. Below you will find what each one involved, how we worked with the client, who did what{SHOW_PRICING ? ", and a transparent way to estimate your own project" : ""}.
          </p>
          <div className="pg-stats">
            <div>
              <b>6</b>
              <span>live projects</span>
            </div>
            <div>
              <b>3 yrs</b>
              <span>longest engagement</span>
            </div>
            <div>
              <b>9 days</b>
              <span>full-stack store</span>
            </div>
            <div>
              <b>~7 hrs</b>
              <span>per brochure site</span>
            </div>
          </div>
          <div className="pg-jump">
            {projects.map((p) => (
              <a key={p.id} href={`#${p.id}`}>
                {p.name}
              </a>
            ))}
            {SHOW_PRICING && (
              <a href="#pricing" className="hl">
                How I work &amp; estimator
              </a>
            )}
          </div>
        </section>

        {/* case studies */}
        <div id="work" />
        {projects.map((p, i) => (
          <article key={p.id} id={p.id} className="case">
            <div className="case-head">
              <span className="case-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="eyebrow">
                  {p.kind} · {p.industry}
                </p>
                <h2>{p.name}</h2>
              </div>
            </div>

            <div className="case-grid">
              <div className="case-visual">
                <a className="frame" href={p.url} target="_blank" rel="noopener noreferrer">
                  <div className="frame-bar">
                    <i />
                    <i />
                    <i />
                    <span>{p.url.replace(/^https?:\/\//, "").replace(/\/$/, "").slice(0, 38)}</span>
                  </div>
                  <div className="frame-body" style={p.ratio ? { aspectRatio: p.ratio } : undefined}>
                    <Image src={p.image} alt={`${p.name} website`} fill sizes="(max-width:900px) 92vw, 46vw" style={{ objectFit: "cover", objectPosition: "top" }} />
                  </div>
                  <div className="frame-cap">
                    <div>
                      <h3>Visit {p.name}</h3>
                      <p>{p.duration} · {p.durationNote}</p>
                    </div>
                    <span className="arrow">↗</span>
                  </div>
                </a>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="case-intro">
                <p className="case-sum">{p.summary}</p>
                <p className="case-brief">{p.brief}</p>
                <div className="facts">
                  {p.facts.map((f) => (
                    <div key={f.label}>
                      <b>{f.n}</b>
                      <span>{f.label}</span>
                    </div>
                  ))}
                </div>
                <p className="case-role">
                  <strong>My role:</strong> {p.role}
                </p>
              </div>
            </div>

            <div className="case-cols">
              <section>
                <h3>What I built</h3>
                <div className="deliver">
                  {p.delivered.map((d) => (
                    <div key={d.title} className="glass">
                      <h4>{d.title}</h4>
                      <p>{d.text}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h3>How we worked</h3>
                <ol className="steps">
                  {p.process.map((s) => (
                    <li key={s.title}>
                      <strong>{s.title}</strong>
                      <span>{s.text}</span>
                    </li>
                  ))}
                </ol>
                <div className="split">
                  <div className="glass">
                    <h5>The client provided</h5>
                    <ul>
                      {p.clientProvided.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass">
                    <h5>I delivered</h5>
                    <ul>
                      {p.iDid.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </article>
        ))}

        {PricingBlock && <PricingBlock />}

        <section className="pg-cta glass">
          <h2>Have a project in mind?</h2>
          <p>{SHOW_PRICING ? "Send a few details and I will reply with a scope and a fixed quote." : "Send a few details and I will reply with next steps."}</p>
          <div className="cta">
            <Link className="btn" href="/?s=contact">
              Contact me <i>→</i>
            </Link>
            <a className="btn ghost" href={`tel:${PHONE_TEL}`}>
              {PHONE}
            </a>
            <a className="btn ghost" href={`mailto:${EMAIL}`}>
              Email
            </a>
            <a className="btn ghost soc-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              <LinkedInLogo /> LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
