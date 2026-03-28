"use client";

import { Shield, ShieldAlert, CloudOff, Beaker, Flag, ArrowRight, CheckCircle2, ChevronDown, Check, Zap, EyeOff, FileDigit, Calendar } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Wo werden meine Daten gespeichert?", a: "DailyEcho speichert alle Daten zu 100% lokal in deinem Browser (LocalStorage/IndexedDB). Es gibt keine Cloud, keine Server, keine Datenbanken von uns. Wenn du deinen Browser-Cache löschst, sind die Daten weg – maximale Privatsphäre." },
    { q: "Kostet die App etwas?", a: "Nein, aktuell ist DailyEcho ein kostenloses Open-Source-Angebot für deinen mentalen Fokus." },
    { q: "Funktioniert die App auch offline?", a: "Ja. DailyEcho ist als Progressive Web App (PWA) gebaut. Du kannst sie auf deinem Homescreen hinzufügen und sie funktioniert komplett ohne Internetverbindung." },
    { q: "Gibt es einen Account oder Login?", a: "Nein. Klickst du auf 'Web-App starten', bist du sofort drin. Ohne Registrierung, ohne E-Mail." }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-emerald-500/20 pt-24">
      
      {/* 1. HERO SECTION & 2. Doppelfrage */}
      <section className="relative pt-20 pb-16 px-6 flex flex-col items-center justify-center text-center z-10 max-w-5xl mx-auto">
        
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide shadow-sm mb-8"
        >
          <Zap className="w-4 h-4 text-amber-500" />
          <span>PWA &middot; Offline verfügbar</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900"
        >
          Dein Feierabend hat begonnen. <br className="hidden md:block" />
          <span className="text-slate-400">Wirklich?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed mb-10"
        >
          Lass den mentalen Ballast im Büro. Der DailyEcho Closure-Loop sichert deine letzten Gedanken in 3 Minuten – lokal und ohne Cloud. Für einen klaren Kopf.
        </motion.p>

        {/* 3. Dual CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold text-lg rounded-full flex items-center justify-center gap-3 transition-all hover:bg-emerald-600 shadow-lg hover:shadow-emerald-500/20 active:scale-95">
            Web-App starten
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="w-full sm:w-auto px-6 py-4 font-semibold text-lg text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center gap-2">
            <FileDigit className="w-5 h-5 opacity-70" />
            Produkthandbuch lesen
          </button>
        </motion.div>
      </section>

      {/* 4. Vertrauens-Badges (4er Grid) */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center divide-x-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center gap-2">
              <CloudOff className="w-6 h-6 text-slate-400 mb-1" />
              <h4 className="font-semibold text-slate-900">100% Lokal</h4>
              <p className="text-xs text-slate-500">Zero Cloud Speicherung</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <EyeOff className="w-6 h-6 text-slate-400 mb-1" />
              <h4 className="font-semibold text-slate-900">Kein Tracking</h4>
              <p className="text-xs text-slate-500">Du bist nicht das Produkt</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Beaker className="w-6 h-6 text-slate-400 mb-1" />
              <h4 className="font-semibold text-slate-900">Psychologisch fundiert</h4>
              <p className="text-xs text-slate-500">Bewährte Journaling-Methodik</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Flag className="w-6 h-6 text-slate-400 mb-1" />
              <h4 className="font-semibold text-slate-900">Offener Code</h4>
              <p className="text-xs text-slate-500">100% Open Source</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Z-Layout: Mockup + Features */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">Der Closure-Loop</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Klarer Schnitt nach der Arbeit.</h3>
          <p className="text-lg text-slate-500 mt-4">Ein simpler Ablauf, der deinen Kopf freimacht, anstatt ihn mit Notifications vollzustopfen.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Linke Seite: "Mockup" App-Ansicht */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-semibold text-slate-400 tracking-wider">DAILYECHO</div>
              </div>
              <div className="p-8 space-y-6">
                <div className="h-6 w-1/3 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-24 w-full bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-center text-emerald-600 font-medium">Was lief heute super?</div>
                <div className="h-24 w-full bg-slate-50 rounded-xl border border-slate-100 flex items-center shadow-inner text-slate-400 font-medium px-6">
                  Notiere hier deine Sorgen...
                  <span className="ml-1 w-0.5 h-5 bg-slate-400 animate-pulse"></span>
                </div>
                <div className="mt-8 flex justify-end">
                  <div className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold flex items-center gap-2">
                    Loop schließen <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Rechte Seite: Argumente */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Gegen Endlos-Scrollen</h4>
                <p className="text-slate-600 leading-relaxed">Social Media belohnt Endlosigkeit. DailyEcho belohnt das Ende. Nur drei Pflichtfragen, dann bist du fertig. Keine Ausnahmen.</p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.1}} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Zeigarnik-Effekt besiegen</h4>
                <p className="text-slate-600 leading-relaxed">Unerledigte Dinge blockieren deinen Feierabend. Aktives Externalisieren entlastet deinen Arbeitsspeicher sofort spürbar und nachweislich.</p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.2}} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Niemand liest mit</h4>
                <p className="text-slate-600 leading-relaxed">Die psychologische Wirkung entfaltet sich nur, wenn du ehrlich bist. Daher gibt es hier keine Server und keine Datensilos.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Metrics Sektion */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-8 md:pt-0">
              <div className="text-6xl md:text-7xl font-bold text-emerald-400 mb-2">3<span className="text-3xl ml-1 text-slate-500">Min</span></div>
              <div className="text-lg font-medium text-slate-300">Investment pro Tag</div>
              <div className="text-sm text-slate-500 mt-2">Dafür echte Klarheit & Fokus.</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-6xl md:text-7xl font-bold text-emerald-400 mb-2">0<span className="text-3xl ml-1 text-slate-500">MB</span></div>
              <div className="text-lg font-medium text-slate-300">Daten in der Cloud</div>
              <div className="text-sm text-slate-500 mt-2">100% deiner Privatsphäre.</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-6xl md:text-7xl font-bold text-emerald-400 mb-2">&infin;</div>
              <div className="text-lg font-medium text-slate-300">Weniger Stress</div>
              <div className="text-sm text-slate-500 mt-2">Mehr Präsenz im Hier und Jetzt.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Roadmap */}
      <section className="pt-32 pb-20 bg-white" id="roadmap">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Heute Check-in. <br />Morgen System.</h2>
            <p className="text-xl text-slate-500">Wir bauen DailyEcho stetig aus – komplett in unserem eigenen Tempo.</p>
          </div>

          <div className="space-y-6">
            <motion.div whileHover={{y:-2}} className="p-8 border border-emerald-200 bg-emerald-50/50 rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start flex-wrap shadow-sm">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-xl font-bold text-slate-900">Der Closure-Loop (v1.0)</h4>
                  <span className="px-3 py-1 bg-emerald-200 text-emerald-900 text-xs font-bold rounded-full">Aktuell</span>
                </div>
                <p className="text-slate-600 mb-3">Die Kern-App mit dem täglichen Fragen-Loop, Fokus-Modus und lokaler Datenbank (IndexedDB).</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-emerald-700">
                  <span className="bg-emerald-100/50 px-2 py-1 rounded">✔ State-Machine</span>
                  <span className="bg-emerald-100/50 px-2 py-1 rounded">✔ PWA Support</span>
                </div>
              </div>
            </motion.div>

            <div className="p-8 border border-slate-200 bg-white rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start flex-wrap opacity-70">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-xl font-bold text-slate-500">Insights & Historie (v1.1)</h4>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Geplant</span>
                </div>
                <p className="text-slate-500 mb-3">Eine visualisierte Kalender-Ansicht deiner vergangenen Loops im Apple-Habit-Stil plus lokalem Export (JSON/CSV).</p>
              </div>
            </div>
            
            <div className="p-8 border border-slate-200 bg-white rounded-2xl flex flex-col md:flex-row gap-6 justify-between items-start flex-wrap opacity-40">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-xl font-bold text-slate-400">Mobile Native Wrapper (v2.0)</h4>
                  <span className="px-3 py-1 bg-slate-100 text-slate-400 text-xs font-bold rounded-full">Später</span>
                </div>
                <p className="text-slate-400 mb-3">Echte Integration samt Homescreen-Widgets für iOS und Android.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Häufige Fragen.</h2>
            <p className="text-slate-500">Radikal transparent beantwortet. Nichts versteckt.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center bg-white transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-6">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}