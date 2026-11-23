import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientBlobs from "@/components/ui/GradientBlobs";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} - How we handle your data and LinkedIn connections.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 23, 2026";

  return (
    <div className="relative overflow-hidden pt-12 pb-24">
      <GradientBlobs variant="subtle" />

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description={`How we collect, use, and protect your information at ${siteConfig.name}.`}
          align="left"
        />

        <div className="mt-12 max-w-4xl">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-10 text-muted leading-relaxed">
            <section>
              <p className="mb-4">
                Last Updated: {lastUpdated}
              </p>
              <p>
                At {siteConfig.name}, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services, particularly concerning our AI automation and LinkedIn integration features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">1. Information We Collect</h2>
              <p>
                We may collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Contact us via our website forms or email.</li>
                <li>Request a proposal or discovery session.</li>
                <li>Connect your LinkedIn account to our AI-powered services.</li>
                <li>Use our business management systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">2. How We Use Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Develop custom business management systems tailored to your needs.</li>
                <li>Process your requests and respond to your inquiries.</li>
                <li>Facilitate AI-powered automation workflows as requested.</li>
                <li>Communicate with you about updates or service-related announcements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">3. AI Services and Third-Party Providers</h2>
              <p>
                To provide advanced automation and intelligence, we utilize third-party AI service providers, including OpenAI and Anthropic.
              </p>
              <p className="mt-2">
                When you use our AI-powered features, certain data may be processed through these providers&apos; APIs. We ensure that your data is handled according to their professional API data usage policies, which typically exclude the use of customer data for training their foundational models.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">4. LinkedIn Account Connection and OAuth</h2>
              <p>
                For features requiring LinkedIn integration, we use the official LinkedIn OAuth 2.0 protocol. This allows you to grant our application specific permissions without sharing your LinkedIn password with us.
              </p>
              <p className="mt-2">
                The connection process is handled through LinkedIn&apos;s secure servers. {siteConfig.name} only receives the authorization codes and tokens necessary to perform the actions you have permitted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">5. LinkedIn Profile Data and Content Processing</h2>
              <p>
                When you connect your LinkedIn account, we may process profile data (such as your name, headline, and profile picture) and content (such as posts or comments) specifically to provide the automation services you have requested.
              </p>
              <p className="mt-2">
                We only access the data authorized by the scopes presented during the LinkedIn login process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">6. Access Tokens and Encryption</h2>
              <p>
                Access tokens received from LinkedIn are treated as highly sensitive information. These tokens are stored securely using industry-standard encryption methods.
              </p>
              <p className="mt-2">
                Encryption ensures that even in the unlikely event of unauthorized database access, your tokens remain protected and unusable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">7. Data Storage and Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. Our systems utilize secure hosting environments and encrypted database connections.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">8. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal data. We only share information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Service providers (like hosting or AI API providers) necessary to deliver our services.</li>
                <li>Legal authorities if required by law or to protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">9. Data Retention and Deletion Requests</h2>
              <p>
                We retain your data for as long as necessary to provide the services you have requested or to comply with legal obligations.
              </p>
              <p className="mt-2">
                You have the right to request the deletion of your data at any time. To make a deletion request, please contact us at <a href={`mailto:${siteConfig.email}`} className="text-accent-light hover:underline">{siteConfig.email}</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">10. Disconnecting LinkedIn</h2>
              <p>
                You can disconnect your LinkedIn account from our services at any time through your account settings or by revoking access within your LinkedIn profile settings. Upon disconnection, we will stop processing new data from your LinkedIn account and, upon request, delete previously stored LinkedIn-related data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">11. User Privacy Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, or delete your personal data, as well as the right to data portability and to object to certain processing activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">12. Contact Information</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-navy-light/50 border border-border">
                <p className="font-medium text-text">{siteConfig.name}</p>
                <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-accent-light hover:underline">{siteConfig.email}</a></p>
                <p>WhatsApp: {siteConfig.whatsapp}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
