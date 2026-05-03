import logo from "@/assets/logo.png";
import oven from "@/assets/oven.jpg";
import pizzaBresaola from "@/assets/pizza-bresaola.jpg";
import pizzaPomodoro from "@/assets/pizza-pomodoro.jpg";
import pizzaFormaggi from "@/assets/pizza-formaggi.jpg";
import pizzaDiavola from "@/assets/pizza-diavola.jpg";
import storefront from "@/assets/storefront.jpg";
import { Flame, MapPin, Phone, Clock, Instagram, Facebook, Star, Pizza, Quote } from "lucide-react";

const menuRosse = [
  { n: "01", name: "Marinara", desc: "pomodoro, olio, origano", price: "4,00" },
  { n: "02", name: "Margherita", desc: "pomodoro, mozzarella, olio, basilico", price: "5,50" },
  { n: "03", name: "Napoli", desc: "pomodoro, mozzarella, acciughe, capperi", price: "6,50" },
  { n: "04", name: "Prosciutto", desc: "pomodoro, mozzarella, prosciutto cotto", price: "7,00" },
  { n: "05", name: "Prosciutto e Funghi", desc: "pomodoro, mozzarella, prosciutto cotto, funghi", price: "7,50" },
  { n: "06", name: "Wurstel", desc: "pomodoro, mozzarella, wurstel", price: "7,00" },
  { n: "07", name: "Ananas", desc: "pomodoro, mozzarella, prosciutto cotto, ananas", price: "7,50" },
  { n: "08", name: "Bufala", desc: "pomodoro, mozzarella di bufala DOP, basilico", price: "8,50" },
  { n: "09", name: "Capricciosa", desc: "pomodoro, mozzarella, prosciutto, funghi, carciofi, olive", price: "8,00" },
  { n: "10", name: "Quattro Stagioni", desc: "pomodoro, mozzarella, olive, carciofi, funghi, prosciutto", price: "8,50" },
  { n: "11", name: "Quattro Formaggi", desc: "pomodoro, mozzarella, fontina, gorgonzola, grana", price: "8,00" },
  { n: "12", name: "Gorgo e Cipolla", desc: "pomodoro, mozzarella, gorgonzola, cipolla", price: "8,00" },
  { n: "13", name: "Gorgo e Noci", desc: "pomodoro, mozzarella, gorgonzola, noci", price: "8,00" },
  { n: "14", name: "Bra", desc: "pomodoro, mozzarella, salsiccia di Bra, scaglie di grana", price: "7,50" },
  { n: "15", name: "Peperoni e Salsiccia", desc: "pomodoro, mozzarella, peperoni, salsiccia", price: "7,50" },
  { n: "16", name: "Diavola", desc: "pomodoro, mozzarella, salame piccante", price: "7,00" },
  { n: "17", name: "Frutti di Mare", desc: "pomodoro, mozzarella, frutti di mare misti", price: "8,50" },
  { n: "18", name: "Stracchino e Rucola", desc: "pomodoro, mozzarella, stracchino, rucola (fuori cottura)", price: "7,50" },
  { n: "19", name: "Speck e Brie", desc: "pomodoro, mozzarella, brie, speck (fuori cottura)", price: "8,50" },
  { n: "20", name: "Burrata", desc: "pomodoro, mozzarella, burrata, prosciutto crudo (fuori cottura)", price: "9,50" },
  { n: "21", name: "Primavera", desc: "pomodoro, mozzarella, verdure di stagione", price: "8,00" },
  { n: "22", name: "Vegetariana", desc: "pomodoro, mozzarella, verdure miste, peperoni", price: "7,50" },
  { n: "23", name: "San Daniele", desc: "pomodoro, mozzarella, prosciutto crudo San Daniele, grana", price: "8,50" },
  { n: "24", name: "Fiarelli", desc: "pomodoro, mozzarella, friarielli, salsiccia di Bra", price: "8,50" },
  { n: "25", name: "Fumè", desc: "pomodoro, mozzarella, scamorza affumicata, speck", price: "8,00" },
  { n: "26", name: "Gustosa", desc: "pomodoro, mozzarella, salsiccia, cipolla", price: "7,50" },
  { n: "27", name: "Siciliana", desc: "pomodoro, mozzarella, melanzane, ricotta", price: "7,50" },
  { n: "28", name: "Pugliese", desc: "pomodoro, mozzarella, cime di rapa, salsiccia", price: "8,00" },
  { n: "29", name: "Piemontese", desc: "pomodoro, mozzarella, salsiccia di Bra, fonduta", price: "8,00" },
  { n: "30", name: "Tonno e Cipolla", desc: "pomodoro, mozzarella, tonno, cipolla", price: "7,50" },
  { n: "31", name: "Porchetta", desc: "pomodoro, mozzarella di bufala, salsiccia piccante, friarielli, peperoni", price: "8,00" },
  { n: "32", name: "Bismark", desc: "pomodoro, mozzarella, prosciutto cotto, uovo", price: "7,50" },
];

const menuBianche = [
  { n: "33", name: "Paesana", desc: "mozzarella, olio, salsiccia, cipolla", price: "7,00" },
  { n: "34", name: "Biancaneve", desc: "mozzarella, panna, prosciutto cotto, funghi", price: "8,00" },
  { n: "35", name: "Estiva", desc: "mozzarella, pomodorini, rucola (fuori cottura)", price: "7,50" },
  { n: "36", name: "Rustica", desc: "mozzarella, salsiccia, friarielli (fuori cottura)", price: "8,00" },
  { n: "37", name: "Funghi Porcini", desc: "mozzarella di bufala, olio, funghi porcini, salsiccia di Bra", price: "10,00" },
];

const reviews = [
  { name: "Roberto Panizzolo", text: "Pizza veramente ottima, cotta bene e con ingredienti freschi. Bravi!", stars: 5 },
  { name: "Cristina R.", text: "Pizza buona, personale gentile e prezzi giusti. Da consigliare!", stars: 5 },
  { name: "Valeria Milanesio", text: "Una delle migliori pizze d'asporto di Bra. Impasto leggero e digeribile.", stars: 5 },
];

const galleryImgs = [
  { src: pizzaBresaola, alt: "Pizza con bresaola e rucola" },
  { src: pizzaPomodoro, alt: "Pizza con pomodorini e grana" },
  { src: pizzaFormaggi, alt: "Pizza quattro formaggi" },
  { src: pizzaDiavola, alt: "Pizza diavola" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter] overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-white/5">
        <div className="container flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-[hsl(var(--brand-flame))]/60 bg-black flex items-center justify-center">
              <img src={logo} alt="Pizza 38 logo" className="h-full w-full object-cover" />
            </div>
            <span className="font-[Bebas_Neue] text-2xl tracking-wider hidden sm:inline">PIZZA 38</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#menu" className="hover:text-[hsl(var(--brand-flame))] transition">Menu</a>
            <a href="#about" className="hover:text-[hsl(var(--brand-flame))] transition">Chi siamo</a>
            <a href="#reviews" className="hover:text-[hsl(var(--brand-flame))] transition">Recensioni</a>
            <a href="#contact" className="hover:text-[hsl(var(--brand-flame))] transition">Contatti</a>
          </nav>
          <a href="tel:+390172751897" className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-black hover:scale-105 transition" style={{ background: "var(--gradient-flame)" }}>
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">0172 751897</span><span className="sm:hidden">Chiama</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={oven} alt="Forno a legna Pizza 38" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
          <div className="absolute inset-0 bg-radial-flame" />
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute block w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-flame))]/60 animate-float"
              style={{
                left: `${10 + i * 11}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${5 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center pt-28 pb-16">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(var(--brand-flame))]/40 text-[hsl(var(--brand-flame))] text-xs uppercase tracking-widest mb-6">
              <Flame className="w-3.5 h-3.5 animate-flicker" /> Pizzeria Artigianale · Bra
            </div>
            <h1 className="font-[Bebas_Neue] text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-wide">
              L'arte della <br />
              <span className="text-gradient-flame">pizza al forno</span>
              <br /> a legna.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-md font-[Caveat]">
              "Sempre il meglio" — farine selezionate, mozzarella di bufala campana DOP e ingredienti dei produttori locali.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+390172751897" className="px-6 py-3 rounded-full font-semibold text-black hover:scale-105 transition inline-flex items-center gap-2" style={{ background: "var(--gradient-flame)", boxShadow: "var(--shadow-glow)" }}>
                <Phone className="w-4 h-4" /> Chiama ora per la tua pizza
              </a>
              <a href="#menu" className="px-6 py-3 rounded-full font-semibold border border-white/20 hover:border-[hsl(var(--brand-flame))] hover:bg-white/5 transition">
                Scopri il menu
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-foreground/60">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[hsl(var(--brand-flame))] text-[hsl(var(--brand-flame))]" />)}</div>
              <span>Pizza artigianale dal cuore di Bra</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-radial-flame blur-2xl scale-110" />
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-[hsl(var(--brand-flame))]/50 animate-float bg-black flex items-center justify-center" style={{ boxShadow: "var(--shadow-glow)" }}>
                <img src={logo} alt="Pizza 38" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/40 text-xs uppercase tracking-widest hover:text-[hsl(var(--brand-flame))] transition">
          ↓ Scorri
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 container grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--brand-flame))]/20 to-[hsl(var(--brand-ember))]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition" />
          <img src={storefront} alt="La pizzeria Pizza 38 a Bra" className="relative rounded-2xl object-cover w-full h-[500px]" />
        </div>
        <div>
          <p className="text-[hsl(var(--brand-flame))] uppercase tracking-widest text-sm">Chi siamo</p>
          <h2 className="font-[Bebas_Neue] text-5xl md:text-6xl mt-3">Tradizione, <span className="text-gradient-flame">fuoco</span> e passione.</h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Dal cuore di Bra, in Piemonte, Pizza 38 porta in tavola la vera pizza artigianale. Ogni impasto è curato con farine selezionate
            a lunga lievitazione, cotto nel nostro forno a legna che dona quel profumo inconfondibile.
          </p>
          <ul className="mt-6 space-y-3 text-foreground/80">
            <li className="flex gap-3"><Flame className="text-[hsl(var(--brand-flame))] shrink-0" /> Mozzarella di bufala campana DOP</li>
            <li className="flex gap-3"><Flame className="text-[hsl(var(--brand-flame))] shrink-0" /> Salsiccia di Bra & produttori locali</li>
            <li className="flex gap-3"><Flame className="text-[hsl(var(--brand-flame))] shrink-0" /> Farine selezionate a lunga lievitazione</li>
          </ul>
        </div>
      </section>

      {/* GALLERY - 4 piccoli rettangoli */}
      <section className="container grid grid-cols-2 md:grid-cols-4 gap-4 pb-24">
        {galleryImgs.map((g, i) => (
          <div key={i} className="overflow-hidden rounded-xl group aspect-square">
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
          </div>
        ))}
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 relative" style={{ background: "hsl(var(--brand-charcoal))" }}>
        <div className="absolute inset-0 bg-radial-flame opacity-50" />
        <div className="container relative">
          <div className="text-center mb-14">
            <p className="text-[hsl(var(--brand-flame))] uppercase tracking-widest text-sm flex items-center justify-center gap-2"><Pizza className="w-4 h-4" /> Le nostre</p>
            <h2 className="font-[Bebas_Neue] text-6xl md:text-7xl text-gradient-flame">PIZZE</h2>
            <p className="font-[Caveat] text-2xl text-foreground/70 mt-2">"Sempre il meglio" — ingredienti freschi e selezionati</p>
          </div>

          <h3 className="font-[Bebas_Neue] text-3xl text-center mb-8 tracking-widest">LE ROSSE</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-5xl mx-auto">
            {menuRosse.map((m) => (
              <div key={m.n} className="flex gap-4 items-baseline border-b border-white/10 pb-3 hover:border-[hsl(var(--brand-flame))]/50 transition group">
                <span className="font-[Bebas_Neue] text-2xl text-[hsl(var(--brand-flame))] group-hover:scale-110 transition w-10">{m.n}</span>
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <h3 className="font-semibold uppercase tracking-wide text-sm">{m.name}</h3>
                    <span className="font-[Bebas_Neue] text-xl text-[hsl(var(--brand-flame))]">€ {m.price}</span>
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-[Bebas_Neue] text-3xl text-center mt-16 mb-8 tracking-widest">LE BIANCHE</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-5xl mx-auto">
            {menuBianche.map((m) => (
              <div key={m.n} className="flex gap-4 items-baseline border-b border-white/10 pb-3 hover:border-[hsl(var(--brand-flame))]/50 transition group">
                <span className="font-[Bebas_Neue] text-2xl text-[hsl(var(--brand-flame))] group-hover:scale-110 transition w-10">{m.n}</span>
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <h3 className="font-semibold uppercase tracking-wide text-sm">{m.name}</h3>
                    <span className="font-[Bebas_Neue] text-xl text-[hsl(var(--brand-flame))]">€ {m.price}</span>
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-foreground/50 text-sm">
            Ogni rinforzo di ingredienti € 0,50 · Frutti di mare € 1,50 · Pizze baby riduzione € 0,50<br />
            Il prezzo varia in base all'ingrediente richiesto
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 container">
        <div className="text-center mb-12">
          <p className="text-[hsl(var(--brand-flame))] uppercase tracking-widest text-sm">Recensioni Google</p>
          <h2 className="font-[Bebas_Neue] text-5xl md:text-6xl">Cosa dicono <span className="text-gradient-flame">di noi</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <article key={i} className="rounded-2xl p-6 border border-white/10 hover:border-[hsl(var(--brand-flame))]/50 hover:-translate-y-1 transition relative" style={{ background: "linear-gradient(135deg, hsl(0 0% 9%), hsl(0 0% 6%))" }}>
              <Quote className="w-8 h-8 text-[hsl(var(--brand-flame))]/30 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(r.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[hsl(var(--brand-flame))] text-[hsl(var(--brand-flame))]" />)}
              </div>
              <p className="text-foreground/80 italic leading-relaxed">"{r.text}"</p>
              <p className="mt-4 font-semibold text-sm text-[hsl(var(--brand-flame))]">— {r.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 container">
        <div className="text-center mb-12">
          <p className="text-[hsl(var(--brand-flame))] uppercase tracking-widest text-sm">Contatti</p>
          <h2 className="font-[Bebas_Neue] text-5xl md:text-6xl">Vieni a <span className="text-gradient-flame">trovarci</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 h-[420px] relative animate-glow-pulse">
            <iframe
              title="Pizza 38 - Mappa"
              src="https://www.google.com/maps?q=Pizza+38+Viale+Industria+52+Bra+CN&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 content-start">
            <a href="https://maps.app.goo.gl/n2YxMxurGBbLcXw38" target="_blank" rel="noopener" className="rounded-2xl p-6 border border-white/10 hover:border-[hsl(var(--brand-flame))]/50 hover:-translate-y-1 transition block">
              <MapPin className="w-7 h-7 text-[hsl(var(--brand-flame))]" />
              <h3 className="font-[Bebas_Neue] text-2xl mt-3">Dove siamo</h3>
              <p className="text-foreground/70 mt-2 text-sm">Viale Industria, 52<br />12042 Bra (CN)</p>
            </a>
            <div className="rounded-2xl p-6 border border-white/10">
              <Clock className="w-7 h-7 text-[hsl(var(--brand-flame))]" />
              <h3 className="font-[Bebas_Neue] text-2xl mt-3">Orari</h3>
              <ul className="text-foreground/70 mt-2 text-sm space-y-1">
                <li className="flex justify-between"><span>Domenica</span><span>18:00 – 22:00</span></li>
                <li className="flex justify-between text-foreground/40"><span>Lunedì</span><span>Chiuso</span></li>
                <li className="flex justify-between text-foreground/40"><span>Martedì</span><span>Chiuso</span></li>
                <li className="flex justify-between"><span>Mercoledì</span><span>18:00 – 22:00</span></li>
                <li className="flex justify-between"><span>Giovedì</span><span>18:00 – 22:00</span></li>
                <li className="flex justify-between"><span>Venerdì</span><span>18:00 – 22:00</span></li>
                <li className="flex justify-between"><span>Sabato</span><span>18:00 – 22:00</span></li>
              </ul>
            </div>
            <a href="tel:+390172751897" className="sm:col-span-2 rounded-2xl p-6 border border-[hsl(var(--brand-flame))]/40 hover:border-[hsl(var(--brand-flame))] transition block group" style={{ background: "linear-gradient(135deg, hsl(var(--brand-charcoal)), hsl(0 0% 8%))" }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full" style={{ background: "var(--gradient-flame)" }}>
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-[Bebas_Neue] text-2xl">Chiama ora per la tua pizza</h3>
                  <p className="text-[hsl(var(--brand-flame))] font-semibold text-2xl">0172 751897</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 mt-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-[hsl(var(--brand-flame))]/50 bg-black">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </div>
            <span className="font-[Bebas_Neue] text-xl tracking-wider">PIZZA 38 · BRA</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/PIZZA-38-100063764610552/" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-[hsl(var(--brand-flame))] transition"><Facebook /></a>
          </div>
          <p className="text-sm text-foreground/50">© {new Date().getFullYear()} Pizza 38 — Pizzeria artigianale</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
