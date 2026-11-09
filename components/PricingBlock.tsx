import Estimator from "@/components/Estimator";
import Faq, { type FaqItem } from "@/components/Faq";
import { hasRate, rateLabel, iNeedFromYou, iDoForYou } from "@/lib/pricing";

const promises = [
  { t: "Scope and estimate in writing", d: "Before I start, you get the scope, the estimate and the timeline in writing, so there are no surprises later." },
  { t: "Updates you can actually see", d: "Preview links and regular check-ins, the same rhythm that worked on NGS Super, with two client calls every week." },
  { t: "Changes handled openly", d: "If requirements change, I explain the effect on time and cost first, and go ahead only when you agree." },
  { t: "Fast and performance-minded", d: "Pages are checked with Lighthouse and for accessibility before launch. Two brochure sites went live in about 7 hours each." },
  { t: "A clean handover", d: "A deployed, tested site and a go-live checklist, with code organised so your team or another developer can carry on." },
  { t: "Honest advice", d: "If a simpler or cheaper option fits your goal better, I will tell you, even if it means a smaller project." },
];

const trust = [
  { n: "5+", l: "years of experience" },
  { n: "6", l: "live projects" },
  { n: "3 yrs", l: "on one enterprise engagement" },
  { n: "~7 hrs", l: "to launch a brochure site" },
];

const faq: FaqItem[] = [
  {
    q: "How do you estimate a project?",
    a: "I look at four things: the functionality you need, how complex it is, what you can provide (designs, content, quick feedback) and what I need to do. The hours are based on projects I have actually delivered. After a short call I confirm the scope and send a final quote.",
  },
  {
    q: "Fixed price or hourly?",
    a: "Either. A fixed price suits a clear scope, and hourly billing suits work that will keep evolving. Prices are negotiable, and we agree the approach before I start.",
  },
  {
    q: "What if my requirements change?",
    a: "That is normal. We follow a simple loop: clarify the change, estimate its effect, agree, then build, test and release. I handled change requests like this for two years on an insurance website.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "A short brief or a call is enough. Designs and content are helpful, or I can create them. If anything needs connecting, such as an API, I will need access and documentation. One person who can approve work quickly makes everything faster.",
  },
  {
    q: "Can you work with my existing site or team?",
    a: "Yes. I have migrated sites to AEM EDS and worked alongside client teams on enterprise sites, using regular calls, previews and code reviews.",
  },
  {
    q: "Do you help after launch?",
    a: "Yes. I have supported live sites in production, fixing issues and handling updates. We agree the support arrangement upfront.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope. A brochure website took about 7 hours of work, a full online store took 9 days, and a large AEM EDS build took a few months with weekly client calls. The estimator above gives a typical effort for your scope.",
  },
];

/** The pricing + estimator block of the projects page. Only loaded when SHOW_PRICING is true. */
export default function PricingBlock() {
  return (
    <>
      {/* pricing */}
      <section id="pricing" className="pricing">
        <p className="eyebrow">Pricing &amp; estimates</p>
        <h2 className="title">Know what to expect before we start</h2>
        <p className="lead">
          {hasRate ? (
            <>
              My rate is <strong>{rateLabel()} per hour</strong>, and <strong>prices are negotiable</strong>.
            </>
          ) : (
            <>
              <strong>Prices are negotiable</strong> and shared after a short call about your project.
            </>
          )}{" "}
          You can choose a fixed price or hourly billing. The estimate below depends on four things, and the hours are calibrated on projects I have actually delivered: two sites in about 7 hours each, a full store in 9 days, and a 3-month AEM EDS build.
        </p>

        <div className="trust">
          {trust.map((x) => (
            <div key={x.l}>
              <b>{x.n}</b>
              <span>{x.l}</span>
            </div>
          ))}
        </div>

        <div className="drivers">
          <div className="glass">
            <b>01</b>
            <h4>Functionality</h4>
            <p>Every feature (forms, admin, accounts, payments, integrations) adds a known amount of effort.</p>
          </div>
          <div className="glass">
            <b>02</b>
            <h4>Complexity</h4>
            <p>Simple, standard or complex scopes change the effort, because unknowns and integrations take longer.</p>
          </div>
          <div className="glass">
            <b>03</b>
            <h4>What you provide</h4>
            <p>Ready designs, content and fast feedback reduce the effort. If I create them, they are added.</p>
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

        <h3 className="sub-h">My promises to you</h3>
        <div className="promises">
          {promises.map((x, i) => (
            <div key={x.t} className="glass">
              <b>{String(i + 1).padStart(2, "0")}</b>
              <h4>{x.t}</h4>
              <p>{x.d}</p>
            </div>
          ))}
        </div>

        <h3 className="sub-h">Common questions</h3>
        <Faq items={faq} />
      </section>
    </>
  );
}
