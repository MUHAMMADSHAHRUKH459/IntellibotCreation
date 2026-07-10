import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock, Calendar } from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import GradientBlobs from "@/components/ui/GradientBlobs";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} to discuss your web development, software, or AI automation project.`,
};

export default function ContactPage() {
  const whatsappDigits = siteConfig.whatsapp.replace(/[^0-9]/g, "");

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
            Tell us about your project and we&apos;ll get back to you within 24 hours
            with a clear plan and next steps.
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
                href={`https://wa.me/${whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-muted hover:text-accent-light"
              >
                {siteConfig.whatsapp}
              </a>
            </GlowCard>

            <GlowCard>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                <Calendar className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-text">Book a Call</h3>
              <a
                href="#"
                className="mt-1 block text-sm text-muted hover:text-accent-light"
              >
                Schedule a free consultation
              </a>
            </GlowCard>

            <GlowCard>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-light text-accent-light">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-text">Office</h3>
              <p className="mt-1 text-sm text-muted">Remote-first — serving clients globally</p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
                <Clock className="h-3.5 w-3.5" />
                Mon - Sat, 10:00 AM - 7:00 PM (PKT)
              </p>
            </GlowCard>

            <div className="flex gap-3">
              {[
                { icon: LinkedinIcon, href: siteConfig.social.linkedin },
                { icon: GithubIcon, href: siteConfig.social.github },
                { icon: TwitterIcon, href: siteConfig.social.twitter },
                { icon: FacebookIcon, href: siteConfig.social.facebook },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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

      {/* Map placeholder */}
      <section className="section pt-0">
        <div className="container-custom">
          <div className="glass-card flex h-64 items-center justify-center rounded-3xl bg-navy-light/30 sm:h-80">
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-accent-light/50" />
              <p className="mt-3 text-sm text-muted">Map integration coming soon</p>
            </div>
          </div>
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