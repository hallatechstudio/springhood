import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Phone, MapPin, Award, ShieldCheck, Globe2, Sparkles, Quote, Mail } from "lucide-react";

import heroVilla from "@/assets/hero-villa.jpg";
import aboutInterior from "@/assets/about-interior.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { num: "01", title: "Acquisitions", body: "We help you find and buy the finest estates and homes. Our team provides private advice and patient negotiation to secure the right address for you." },
  { num: "02", title: "Listings & Sales", body: "We market your home with professional care and discretion. Our global network connects you with serious buyers while protecting your privacy at every step." },
  { num: "03", title: "Private Rentals", body: "We manage high-end rentals for long-term and seasonal stays. Our process matches your home with responsible tenants who value and respect your property." },
  { num: "04", title: "Asset Management", body: "We take full care of your property, from maintenance to staffing. Our team handles the daily details so your home remains easy to own from anywhere." },
];

const principles = [
  { icon: ShieldCheck, title: "Absolute discretion", body: "Most of what we do never reaches a portal or a press release. Our clients trust us with what they cannot afford to publish." },
  { icon: Award, title: "Senior-led, always", body: "Every engagement is led by a principal with at least a decade of experience. No handoffs, no junior intermediaries." },
  { icon: Globe2, title: "A quietly global network", body: "Relationships in 19 countries, cultivated over 28 years — opening doors that a single market simply cannot." },
  { icon: Sparkles, title: "Considered, never rushed", body: "We move at the pace of the property and the people. The right outcome is worth waiting a season for." },
];

const team = [
  { name: "David igbokwe", role: "Director, Estates", years: "11 yrs" },
];

const testimonials = [
   { quote: "Springhood found a home we did not know existed, in a neighbourhood we had quietly written off. Two years on, it still feels like the only place we could have landed.", author: "Adeola & Chinedu Okafor", role: "Private clients, since 2022" },
   { quote: "The most considered firm we have worked with on either side of the Atlantic. They protect their clients the way a good lawyer does — with care and without theatre.", author: "Ngozi Eze", role: "Family office principal" },
];

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white md:px-10">
        <a href="#" className="font-display text-lg tracking-tight">
          <span className="text-sky">⬩</span> Springhood
          <span className="ml-1 text-xs font-normal opacity-70">PROPERTIES</span>
        </a>
        <nav className="hidden gap-10 text-sm md:flex">
          {[
            ["Practice", "#services"],
            ["Principles", "#principles"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="opacity-80 transition hover:opacity-100">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 border border-white/30 px-4 py-2 text-xs tracking-[0.18em] uppercase transition hover:bg-white hover:text-sky-deep md:inline-flex"
        >
          Private Inquiry <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-sky-deep text-white">
      <img
        src={heroVilla}
        alt="A modern villa at golden hour overlooking an infinity pool"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-deep/80 via-sky-deep/30 to-sky-deep/95" />
      <Nav />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <div className="hairline mb-6 text-sky">Est. 2008 · Distinguished Residences</div>
        <h1 className="max-w-5xl font-display text-5xl font-light leading-[1.02] md:text-7xl lg:text-[5.5rem]">
          Homes with a quiet
          <span className="italic text-sky-soft"> sense of place.</span>
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Springhood Properties is a small, senior-led practice representing estates, penthouses,
            and architectural homes — matched to owners who value craft, privacy, and longevity.
          </p>
          <div className="flex gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-sky px-6 py-3 text-sm font-medium text-sky-deep transition hover:bg-white"
            >
              Our Practice <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Speak With Us
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px border-t border-white/15 bg-white/15 text-white md:grid-cols-4">
          {[
            ["18", "Years curating"],
            ["$2.4B", "In transactions"],
            ["140+", "Estates sold"],
            ["19", "Countries served"],
          ].map(([n, l]) => (
            <div key={l} className="bg-sky-deep/80 px-5 py-6 backdrop-blur">
              <div className="font-display text-3xl text-sky md:text-4xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="hairline text-sky-deep/60">Our Belief</div>
        <h2 className="mt-4 font-display text-4xl font-light leading-[1.15] text-sky-deep md:text-6xl">
          A home is the longest conversation you will ever have with a place.
        </h2>
        <div className="mt-12 grid gap-10 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
          <p>
            For nearly two decades, Springhood Properties has guided a deliberately small group of
            clients through the decisions that quietly shape a life where to live, what to keep,
            and when to let a beloved address pass to its next custodian.
          </p>
          <p>
            We do not measure ourselves in volume. We measure ourselves in the calibre of the homes
            we represent, the trust of the families who return to us a generation later, and the
            length of the relationships we keep.
          </p>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section id="principles" className="bg-sky-deep py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="hairline text-sky">What sets us apart</div>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
              Four principles we will not compromise.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              They are not slogans. They are the reasons our clients introduce us to their
              closest friends — and why, eighteen years in, we still answer every inquiry
              ourselves.
            </p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-sky-deep p-8">
                <Icon className="h-6 w-6 text-sky" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="hairline text-sky-deep/60">Practice</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-light leading-tight text-sky-deep md:text-5xl">
              Four ways we work — each conducted in confidence.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every engagement is led by a senior principal. We move at the pace of the property,
            not the market.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-sky-deep/10 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.num} className="bg-background p-10">
              <div className="flex items-baseline justify-between">
                <div className="font-display text-sm text-sky">{s.num}</div>
                <div className="h-px flex-1 ml-6 bg-sky-deep/15" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-sky-deep">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="relative">
          <img
            src={aboutInterior}
            alt="An elegant interior with considered detailing"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden bg-sky px-6 py-5 text-sky-deep md:block">
            <div className="font-display text-3xl">Since 2008</div>
            <div className="text-xs uppercase tracking-[0.18em]">Family led</div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="hairline text-sky-deep/60">Our House</div>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight text-sky-deep md:text-5xl">
            A small firm with a long memory.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Springhood Properties has remained deliberately small —
            twelve specialists representing a focused list of homes we know intimately. Our clients are
            collectors, founders, and families who plan in decades, not quarters.
          </p>
          <p className="mt-4 text-muted-foreground">
            We do not chase listings. We are introduced to them — often privately, often long before they
            are named on any market. The same goes for our buyers: most arrive through someone we have
            already helped, and stay with us for the rest of their lives.
          </p>
          <p className="mt-4 text-muted-foreground">
            It is, we admit, an old-fashioned way to work. We see no reason to change it.
          </p>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {team.map((t) => (
              <div key={t.name} className="flex items-center justify-between py-4">
                <div>
                  <div className="font-display text-lg text-sky-deep">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="hairline text-sky">{t.years}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-sky-deep/[0.03] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="hairline text-sky-deep/60">In their words</div>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-light leading-tight text-sky-deep md:text-5xl">
          The kindest things said about us were said quietly.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.author} className="border-l-2 border-sky pl-8">
              <Quote className="h-6 w-6 text-sky" strokeWidth={1.5} />
              <blockquote className="mt-5 font-display text-xl font-light leading-relaxed text-sky-deep md:text-2xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-display text-sky-deep">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[1fr_1.1fr] md:px-10">
        <div>
          <div className="hairline text-sky-deep/60">Begin a Conversation</div>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight text-sky-deep md:text-5xl">
            Tell us what you are looking for — or what you are ready to let go of.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Every inquiry is read by a principal within one business day. Conversations remain
            confidential whether or not we proceed, and there is never an obligation to continue.
          </p>
          <div className="mt-10 space-y-4 text-sm text-sky-deep">
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky" /> 080330500326</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky" /> 08187515551</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky" /> hello@springhoodproperties.com</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky" /> Randle Avenue, Surulere, Lagos</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border border-sky-deep/15 bg-background p-8 md:p-10">
          <MessageCircle className="h-10 w-10 text-whatsapp" strokeWidth={1.5} />
          <h3 className="mt-4 font-display text-2xl text-whatsapp">Reach us on WhatsApp</h3>
          <p className="mt-3 text-center text-muted-foreground">
            The quickest way to start a private conversation. Tap the button below and a principal will respond directly.
          </p>
          <a
            href="https://wa.me/23480330500326"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-whatsapp px-8 py-4 text-sm font-medium text-white transition hover:bg-whatsapp/90"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-sky-deep text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="font-display text-lg text-white">
          <span className="text-sky">⬩</span> Springhood Properties Ltd
        </div>
        <div className="text-xs tracking-[0.18em] uppercase text-white/50">
          © {new Date().getFullYear()} Springhood Properties · All rights reserved
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Manifesto />
      <Principles />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
