import Estimator from "@/components/Estimator";
import { HOURLY_RATE, inr, iNeedFromYou, iDoForYou } from "@/lib/pricing";

/** The pricing + estimator block of the projects page. Only loaded when SHOW_PRICING is true. */
export default function PricingBlock() {
  return (
    <>
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

    </>
  );
}
