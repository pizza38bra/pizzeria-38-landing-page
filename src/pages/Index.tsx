import logo from "@/assets/logo.png";
import oven from "@/assets/oven.jpg";
import pizzaBresaola from "@/assets/pizza-bresaola.jpg";
import pizzaPomodoro from "@/assets/pizza-pomodoro.jpg";
import storefront from "@/assets/storefront.jpg";
import { Flame, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const menu = [
  { n: "01", name: "Marinara", desc: "pomodoro, olio, origano", price: "5,00" },
  { n: "02", name: "Margherita", desc: "pomodoro, mozzarella, olio, basilico", price: "6,00" },
  { n: "04", name: "Prosciutto", desc: "pomodoro, mozzarella, olio, prosciutto cotto", price: "7,50" },
  { n: "08", name: "Bufala", desc: "pomodoro, mozzarella di bufala, olio, basilico", price: "8,50" },
  { n: "10", name: "Quattro Stagioni", desc: "pomodoro, mozzarella, olive, carciofi, funghi, prosciutto", price: "8,50" },
  { n: "11", name: "Quattro Formaggi", desc: "pomodoro, mozzarella, olio, fontina, gorgonzola, grana", price: "8,00" },
  { n: "20", name: "Speck e Brie", desc: "pomodoro, mozzarella, olio, brie, speck (fuori cottura)", price: "8,50" },
  { n: "21", name: "Burrata", desc: "pomodoro, mozzarella, olio, burrata (fuori cottura), prosciutto crudo", price: "9,50" },
  { n: "31", name: "Tonno e Cipolla", desc: "pomodoro, mozzarella, olio, tonno, cipolla", price: "8,00" },
  { n: "38", name: "Funghi Porcini", desc: "mozzarella di bufala, olio, funghi porcini, salsiccia di Bra", price: "10,00" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-white/5">
        <div className="container flex items-center justify-between py-3">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Pizza 38 logo" className="h-11 w-11 rounded-full object-cover" />
            <span className="font-[Bebas_Neue] text-2xl tracking-wider">PIZZA 38</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#menu" className="hover:text-[hsl(var(--brand-flame))] transition">Menu</a>
            <a href="#about" className="hover:text-[hsl(var(--brand-flame))] transition">Chi siamo</a>
            <a href="#contact" className="hover:text-[hsl(var(--brand-flame))] transition">Contatti</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-full text-sm font-semibold text-black" style={{ background: "var(--gradient-flame)" }}>
            Ordina ora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={oven} alt="Forno a legna Pizza 38" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
        </div>
        <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center pt-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[hsl(var(--brand-flame))]/40 text-[hsl(var(--brand-flame))] text-xs uppercase tracking-widest mb-6">
              <Flame className="w-3.5 h-3.5" /> Pizzeria Artigianale · Bra
            </div>
            <h1 className="font-[Bebas_Neue] text-6xl md:text-8xl leading-none tracking-wide">
              L'arte della <br />
              <span style={{ background: "var(--gradient-flame)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                pizza al forno
              </span>
              <br /> a legna.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-md font-[Caveat]">
              "Sempre il meglio" — farine selezionate, mozzarella di bufala campana DOP e ingredienti dei produttori locali.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="px-6 py-3 rounded-full font-semibold text-black" style={{ background: "var(--gradient-flame)", boxShadow: "var(--shadow-glow)" }}>
                Scopri il menu
              </a>
              <a href="tel:+390172751897" className="px-6 py-3 rounded-full font-semibold border border-white/20 hover:border-[hsl(var(--brand-flame))] transition inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Chiama ora per la tua pizza
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img src={logo} alt="" className="w-80 h-80 rounded-full object-cover border-4 border-[hsl(var(--brand-flame))]/30" style={{ boxShadow: "var(--shadow-glow)" }} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 container grid md:grid-cols-2 gap-12 items-center">
        <img src={storefront} alt="La nostra pizzeria a Bra" className="rounded-2xl object-cover w-full h-[500px]" />
        <div>
          <p className="text-[hsl(var(--brand-flame))] uppercase tracking-widest text-sm">Chi siamo</p>
          <h2 className="font-[Bebas_Neue] text-5xl md:text-6xl mt-3">Tradizione, fuoco e passione.</h2>
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

      {/* GALLERY */}
      <section className="container grid md:grid-cols-2 gap-6 pb-24">
        <img src={pizzaBresaola} alt="Pizza bianca con bresaola e rucola" className="rounded-2xl h-80 w-full object-cover" />
        <img src={pizzaPomodoro} alt="Pizza con pomodorini e grana" className="rounded-2xl h-80 w-full object-cover" />
      </section>

      {/* MENU */}
      <section id="menu" className="py-24" style={{ background: "hsl(var(--brand-charcoal))" }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[hsl(var(--brand-flame))] uppercase tracking-widest text-sm">Le nostre</p>
            <h2 className="font-[Bebas_Neue] text-6xl md:text-7xl">PIZZE</h2>
            <p className="font-[Caveat] text-2xl text-foreground/70 mt-2">una selezione delle nostre specialità</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {menu.map((m) => (
              <div key={m.n} className="flex gap-4 items-baseline border-b border-white/10 pb-4">
                <span className="font-[Bebas_Neue] text-2xl text-[hsl(var(--brand-flame))]">{m.n}</span>
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <h3 className="font-semibold uppercase tracking-wide">{m.name}</h3>
                    <span className="font-[Bebas_Neue] text-xl text-[hsl(var(--brand-flame))]">€ {m.price}</span>
                  </div>
                  <p className="text-sm text-foreground/60 mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-foreground/50 text-sm">Menu completo disponibile in pizzeria · Possibili variazioni di prezzo in base agli ingredienti</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 container">
        <div className="text-center mb-12">
          <p className="text-[hsl(var(--brand-flame))] uppercase tracking-widest text-sm">Contatti</p>
          <h2 className="font-[Bebas_Neue] text-5xl md:text-6xl">Vieni a trovarci</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="https://maps.google.com/?q=Viale+Industria+52,+12042+Bra+CN" target="_blank" rel="noopener" className="rounded-2xl p-8 text-center border border-white/10 hover:border-[hsl(var(--brand-flame))]/50 transition block">
            <MapPin className="w-8 h-8 mx-auto text-[hsl(var(--brand-flame))]" />
            <h3 className="font-[Bebas_Neue] text-2xl mt-4">Dove siamo</h3>
            <p className="text-foreground/70 mt-2">Viale Industria, 52<br />12042 Bra (CN)</p>
          </a>
          <div className="rounded-2xl p-8 text-center border border-white/10">
            <Clock className="w-8 h-8 mx-auto text-[hsl(var(--brand-flame))]" />
            <h3 className="font-[Bebas_Neue] text-2xl mt-4">Orari</h3>
            <p className="text-foreground/70 mt-2">Aperto fino alle 22:00<br />Chiama per conferma</p>
          </div>
          <a href="tel:+390172751897" className="rounded-2xl p-8 text-center border border-[hsl(var(--brand-flame))]/40 hover:border-[hsl(var(--brand-flame))] transition block" style={{ background: "hsl(var(--brand-charcoal))" }}>
            <Phone className="w-8 h-8 mx-auto text-[hsl(var(--brand-flame))]" />
            <h3 className="font-[Bebas_Neue] text-2xl mt-4">Chiama ora</h3>
            <p className="text-[hsl(var(--brand-flame))] font-semibold mt-2 text-lg">0172 751897</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            <span className="font-[Bebas_Neue] text-xl tracking-wider">PIZZA 38 · BRA</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/PIZZA-38-100063764610552/" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-[hsl(var(--brand-flame))]"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[hsl(var(--brand-flame))]"><Instagram /></a>
          </div>
          <p className="text-sm text-foreground/50">© {new Date().getFullYear()} Pizza 38 — Pizzeria artigianale</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
