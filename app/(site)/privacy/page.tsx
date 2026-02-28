import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero banner */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Last updated: February 2026
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {/* 1 – Overview */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">1. Overview</h2>
            <p className="mt-2 text-slate">
              {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting your privacy. This policy explains what
              information we collect through this website, how we use it, and
              your rights regarding that information.
            </p>
          </div>

          {/* 2 – Data Collection */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">
              2. Information We Collect
            </h2>
            <p className="mt-2 text-slate">
              We collect only the information you voluntarily provide when you
              use our contact form or otherwise reach out to us:
            </p>
            <ul className="mt-3 space-y-2 text-slate">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong>Contact details:</strong> name, email address, phone number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong>Organization:</strong> facility or company name (optional)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong>Message content:</strong> the text of your inquiry</span>
              </li>
            </ul>
            <p className="mt-3 text-slate">
              We do <strong>not</strong> collect protected health information
              (PHI) through this website. PHI handling during courier operations
              is governed by separate Business Associate Agreements with each
              healthcare partner.
            </p>
          </div>

          {/* 3 – Contact Form */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">
              3. Contact Form Submissions
            </h2>
            <p className="mt-2 text-slate">
              When you submit our contact form, the data is transmitted over an
              encrypted (HTTPS) connection and delivered to our team via a
              transactional email service. We use your submission solely to
              respond to your inquiry, provide quotes, or discuss potential
              service arrangements. We do not sell, rent, or share your
              information with third parties for marketing purposes.
            </p>
          </div>

          {/* 4 – Cookies & Analytics */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">
              4. Cookies &amp; Analytics
            </h2>
            <p className="mt-2 text-slate">
              This website may use essential, first-party cookies required for
              basic functionality (e.g., form state). We do not use advertising
              cookies or third-party tracking pixels. If we add analytics in the
              future, this section will be updated accordingly.
            </p>
          </div>

          {/* 5 – Data Retention */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">
              5. Data Retention
            </h2>
            <p className="mt-2 text-slate">
              Contact form submissions are retained for as long as necessary to
              fulfill the purpose for which they were collected — typically no
              longer than 24 months after our last communication. You may
              request deletion of your data at any time by contacting us.
            </p>
          </div>

          {/* 6 – Security */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">6. Security</h2>
            <p className="mt-2 text-slate">
              We implement industry-standard security measures including TLS
              encryption in transit and access controls for stored data.
              However, no method of electronic transmission or storage is 100 %
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* 7 – HIPAA Note */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">
              7. HIPAA &amp; Courier Operations
            </h2>
            <p className="mt-2 text-slate">
              This privacy policy applies only to data collected through the
              {" "}{SITE.name} website. The handling of protected health
              information during our courier operations is governed by HIPAA and
              by the Business Associate Agreements executed with each healthcare
              partner. For questions about PHI handling, please contact us
              directly.
            </p>
          </div>

          {/* 8 – Changes */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">
              8. Changes to This Policy
            </h2>
            <p className="mt-2 text-slate">
              We may update this privacy policy from time to time. Changes will
              be posted on this page with a revised &quot;last updated&quot;
              date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* 9 – Contact */}
          <div>
            <h2 className="text-xl font-bold text-charcoal">9. Contact</h2>
            <p className="mt-2 text-slate">
              If you have questions about this privacy policy or wish to
              exercise your data-related rights, please contact us:
            </p>
            <ul className="mt-3 space-y-1 text-slate">
              <li>
                Email:{" "}
                <a href={`mailto:${SITE.email}`} className="font-medium">
                  {SITE.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={`tel:${SITE.phone}`} className="font-medium">
                  {SITE.phone}
                </a>
              </li>
              <li>Mail: {SITE.address}</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
