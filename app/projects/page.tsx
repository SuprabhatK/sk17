import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ThemeBolt from "@/components/ThemeBolt";
import Estimator from "@/components/Estimator";
import ProjectsDial from "@/components/ProjectsDial";
import { projects } from "@/lib/projects";
import { HOURLY_RATE, inr, iNeedFromYou, iDoForYou } from "@/lib/pricing";
import { PHONE, PHONE_TEL, EMAIL } from "@/lib/content";
import "./projects.css";

export const metadata: Metadata = {
  title: "Project case studies & pricing | Suprabhat Karmakar",
  description:
    "Detailed case studies of AEM EDS, React and full-stack projects by Suprabhat Karmakar, with transparent pricing and an interactive estimator.",
};

const shortName: Record<string, string> = { ngs: "NGS Super", tataaia: "Tata AIA", generali: "Generali Central", vaymora: "Vaymora Foods", siddhivinayak: "Siddhivinayak", starlite: "Starlite Global" };
const dialItems = [
  { id: "top", label: "Overview" },
  ...projects.map((p) => ({ id: p.id, label: shortName[p.id] ?? p.name })),
  { id: "pricing", label: "Pricing" },
];

export default function ProjectsPage() {
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
          <a href="#pricing">Pricing</a>
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
          <h1 className="title">What I built, how it was run, and what it costs</h1>
          <p className="lead">
            Six real projects, from a 3-year enterprise engagement to sites that went live in 7 hours. Below you will find what each one involved, how we worked with the client, who did what, and a transparent way to estimate your own project.
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
            <a href="#pricing" className="hl">
              Pricing &amp; estimator
            </a>
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

        {/* pricing */}
        <section id="pricing" className="pricing">
          <p className="eyebrow">Pricing, upfront</p>
          <h2 className="title">Know the cost before we start</h2>
          <p className="lead">
            My rate is <strong>{inr(HOURLY_RATE)} per hour</strong>, and <strong>prices are negotiable</strong>. You can choose a fixed price or hourly billing. The estimate below depends on four things, and the base hours are calibrated on projects I have actually delivered: two sites in about 7 hours each, a full store in 9 days, and a 3-month AEM EDS build.
          </p>

          <div className="drivers">
            <div className="glass">
              <b>01</b>
              <h4>Functionality</h4>
              <p>Every feature (forms, admin, accounts, payments, integrations) adds a known number of hours.</p>
            </div>
            <div className="glass">
              <b>02</b>
              <h4>Complexity</h4>
              <p>Simple, standard or complex scopes change the effort, because unknowns and integrations take longer.</p>
            </div>
            <div className="glass">
              <b>03</b>
              <h4>What you provide</h4>
              <p>Ready designs, content and fast feedback reduce hours. If I create them, they are added.</p>
            </div>
            <div className="glass">
              <b>04</b>
              <h4>What I do</h4>
              <p>Design, build, test, deploy and hand over. You see the scope in writing before work starts.</p>
            </div>
          </div>

          <Estimator />

          <div className="split big">
            <div className="glass">
              <h4>What I need from you</h4>
              <ul>
                {iNeedFromYou.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="glass">
              <h4>What I do for you</h4>
              <ul>
                {iDoForYou.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pg-cta glass">
          <h2>Have a project in mind?</h2>
          <p>Send a few details and I will reply with a scope and a fixed quote.</p>
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
          </div>
        </section>
      </main>
    </div>
  );
}
