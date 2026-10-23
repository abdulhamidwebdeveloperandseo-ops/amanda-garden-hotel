import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amanda Garden Hotel — Website Plan" },
      { name: "description", content: "A simple build plan for the Amanda Garden Hotel website: pages, features, style and a ready prompt for Google AI Studio." },
      { property: "og:title", content: "Amanda Garden Hotel — Website Plan" },
      { property: "og:description", content: "Pages, features, style guide and a ready-to-copy AI Studio prompt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const pages = [
  { name: "Home", items: ["Full-width garden hero photo with hotel name", "Short welcome message", "Book Now button", "Highlights: rooms, dining, garden, events", "Guest reviews"] },
  { name: "Rooms & Suites", items: ["Room cards with photo, price per night, size and beds", "Amenities list (Wi-Fi, AC, TV, breakfast)", "Book this room button"] },
  { name: "Dining", items: ["Restaurant & bar intro", "Sample menu", "Opening hours"] },
  { name: "Facilities", items: ["Garden & lounge", "Pool / gym / spa (if available)", "Event & meeting halls", "Parking & airport pickup"] },
  { name: "Gallery", items: ["Photo grid of rooms, garden, food and events"] },
  { name: "Booking", items: ["Check-in / check-out dates", "Guests and room type", "Name, phone, email, special requests", "Confirmation message"] },
  { name: "Contact", items: ["Address with map", "Phone, WhatsApp, email", "Contact form", "Social media links"] },
];

const style = [
  ["Colors", "Deep garden green, warm cream, soft gold accents"],
  ["Fonts", "Elegant serif for headings, clean sans-serif for text"],
  ["Mood", "Calm, natural, welcoming, premium but friendly"],
  ["Devices", "Mobile-first, works on phone, tablet and desktop"],
];

const steps = [
  "Open Google AI Studio and start a new app (Build mode).",
  "Paste the prompt below and generate the first version.",
  "Check each page on phone size and ask for fixes one at a time.",
  "Replace sample photos, prices and contact details with real ones.",
  "Deploy and share the link.",
];

const prompt = `Build a modern, mobile-first hotel website for "Amanda Garden Hotel".
Style: deep garden green, warm cream and soft gold; elegant serif headings with clean sans-serif body text; calm, natural and welcoming.
Pages: Home (garden hero image, welcome text, Book Now button, highlights, reviews), Rooms & Suites (room cards with photo, price per night, amenities, book button), Dining (restaurant intro, menu, hours), Facilities (garden, lounge, events hall, parking, airport pickup), Gallery (photo grid), Booking (dates, guests, room type, contact details, confirmation message), Contact (address with map, phone, WhatsApp, email, form, social links).
Add a sticky top menu, a footer with contact info, and smooth simple animations. Use placeholder photos I can replace later.`;

function Index() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="bg-primary px-6 py-16 text-center text-primary-foreground">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Website Plan</p>
        <h1 className="mt-3 font-display text-4xl sm:text-6xl">Amanda Garden Hotel</h1>
        <p className="mx-auto mt-4 max-w-md text-sm opacity-80">
          A simple blueprint to build the hotel website in Google AI Studio.
        </p>
      </header>

      <div className="mx-auto max-w-3xl space-y-12 px-5 py-12">
        <section>
          <h2 className="font-display text-2xl text-primary">1. Goal</h2>
          <p className="mt-3 text-muted-foreground">
            Show the hotel's beauty, help guests explore rooms and facilities, and make booking or contacting the hotel quick and easy.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-primary">2. Pages</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {pages.map((p, i) => (
              <div key={p.name} className="rounded-lg border bg-card p-5">
                <h3 className="font-display text-lg">
                  <span className="text-accent-foreground">{String(i + 1).padStart(2, "0")}</span> {p.name}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {p.items.map((it) => <li key={it}>• {it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-primary">3. Look & feel</h2>
          <dl className="mt-4 divide-y rounded-lg border bg-card">
            {style.map(([k, v]) => (
              <div key={k} className="flex gap-4 p-4 text-sm">
                <dt className="w-20 shrink-0 font-semibold">{k}</dt>
                <dd className="text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="font-display text-2xl text-primary">4. Build steps</h2>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">{i + 1}</span>
                <span className="pt-1">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-2xl text-primary">5. AI Studio prompt</h2>
            <button onClick={copy} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="mt-4 whitespace-pre-wrap rounded-lg border bg-muted p-5 text-sm leading-relaxed">{prompt}</pre>
        </section>
      </div>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">Amanda Garden Hotel · Website Plan</footer>
    </main>
  );
}
