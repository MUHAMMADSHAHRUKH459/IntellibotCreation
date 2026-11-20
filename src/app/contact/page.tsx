import type { Metadata } from "next";
import { Mail, MessageCircle, Building2 } from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import GradientBlobs from "@/components/ui/GradientBlobs";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { getWhatsAppUrl, siteConfig, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} about a custom business management system, web application, or AI-powered automation project.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="section relative overflow-hidden pt-12">
        <GradientBlobs variant="subtle" />
        <div className="container-custom relative z-10 text-center">
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-navy-light/40 px-4 py-1.5 text-xs font-medium text-accent-light">
            Get in Touch
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-glow gradient-text sm:text-5xl md:text-6xl">
            Let&apos;s build something great together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            Share what your business or organization needs to manage. The project
            form prepares a message for you to review and send through WhatsApp.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: contact info */}
          <div className="flex flex-col gap-6">
            <GlowCard>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-text">Email Us</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-sm text-muted hover:text-accent-light"
              >
                {siteConfig.email}
              </a>
            </GlowCard>

            <GlowCard>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-text">WhatsApp</h3>
              <a
                href={getWhatsAppUrl("Hello, I would like to discuss a business system project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-11 items-center text-sm text-muted hover:text-accent-light"
              >
                {siteConfig.whatsapp} · Message us
              </a>
            </GlowCard>

            <GlowCard>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-text">Who We Help</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Retail shops, businesses, foundations, and welfare organizations
                in Pakistan.
              </p>
            </GlowCard>

            <div className="flex gap-3">
              {[
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
                { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent-light"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-custom max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions before you reach out" />
          <div className="flex flex-col gap-3">
            {faqs.slice(0, 4).map((faq) => (
              <div key={faq.question} className="glass-card rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-text">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}