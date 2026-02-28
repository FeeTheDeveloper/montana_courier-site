import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="prose prose-gray mx-auto max-w-3xl">
        <h1>Privacy Policy</h1>
        <p className="lead">
          Last updated: February 2026
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you contact us through our website, we collect the information you
          provide — such as your name, email address, phone number, organization,
          and the contents of your message. We do not collect personal health
          information (PHI) through this website.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information you submit solely to respond to your inquiry,
          provide quotes, and communicate about our courier services. We do not
          sell, rent, or share your personal information with third parties for
          marketing purposes.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement industry-standard security measures to protect the
          information you provide. All form submissions are transmitted over
          encrypted (HTTPS) connections.
        </p>

        <h2>HIPAA Compliance</h2>
        <p>
          Our courier operations comply fully with HIPAA regulations. This
          privacy policy pertains only to information collected through the
          {" "}{SITE.name} website. Handling of protected health information
          during courier operations is governed by separate Business Associate
          Agreements with our healthcare partners.
        </p>

        <h2>Cookies</h2>
        <p>
          This website may use essential cookies for basic functionality. We do
          not use advertising or tracking cookies.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us
          at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
          <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>.
        </p>
      </div>
    </Section>
  );
}
