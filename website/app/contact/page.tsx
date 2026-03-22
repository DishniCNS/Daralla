import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact | Daralla",
  description: "Contact Daralla to request a new creative technology project.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      <SectionHeading
        eyebrow="Contact"
        title="Tell us what you want to build"
        description="Share the scope, goals, and budget. Daralla will prepare a structured request email so you can send the brief instantly from desktop or phone."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/75">
            Studio Contact
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Email
              </p>
              <p className="mt-2 text-lg text-white">hello@daralla.studio</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                How It Works
              </p>
              <p className="mt-2 text-lg text-white">
                A ready-to-send email draft opens instantly
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Preferred Projects
              </p>
              <p className="mt-2 text-lg text-white">
                Product sites, campaign worlds, immersive showcases
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Response Time
              </p>
              <p className="mt-2 text-lg text-white">Usually within 48 hours</p>
            </div>
          </div>
        </aside>

        <ContactForm />
      </div>
    </div>
  );
}
