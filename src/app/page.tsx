"use client";

import { 
  CloudOff, Beaker, Flag, ArrowRight, CheckCircle2, ChevronDown, Check, Zap, EyeOff, FileDigit, 
  X, Smartphone, Moon, Database, Download, Flame, LogOut, PenTool, CreditCard, Lock, Sunrise, Target, Award, Star 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Wozu brauche ich zwei Check-Ins pro Tag?", a: "Der Morning-Loop richtet deinen Kompass aus und definiert deine QuickWins, bevor die Welt dazwischenfunkt. Der Closure-Loop am Abend schließt offene Vorgänge ab und befreit deinen Kopf für die Nacht." },
    { q: "Wo werden meine Daten gespeichert?", a: "DailyEcho speichert alle Daten zu 100% lokal in deinem Browser (LocalStorage/IndexedDB). Es gibt keine Cloud, keine Server, keine Datenbanken von uns." },
    { q: "Kostet die App etwas?", a: "Nein, aktuell ist DailyEcho ein kostenloses Open-Source-Angebot für deinen mentalen Fokus und Produktivität." },
    { q: "Funktioniert die App auch offline?", a: "Ja. DailyEcho ist als Progressive Web App (PWA) gebaut. Du kannst sie auf deinem Homescreen hinzufügen und sie funktioniert komplett ohne Internetverbindung." },
    { q: "Gibt es einen Account oder Login?", a: "Nein. Klickst du auf 'Web-App starten', bist du sofort drin. Ohne Registrierung, ohne E-Mail." }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-emerald-500/20 pt-24 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-16 px-6 flex flex-col items-center justify-center text-center z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide shadow-sm mb-8">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>Morning- & Closure-Loop in einer App</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
          Starte mit Fokus. <br className="hidden md:block" />
          <span className="text-slate-400">Beende mit Klarheit.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed mb-10">
          Dein Framework für den Tag. Definiere morgens deine <strong className="text-emerald-700">QuickWins</strong> und schließe abends mit dem <strong className="text-slate-700">Closure-Loop</strong> mental ab. 100% lokal in deinem Browser.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold text-lg rounded-full flex items-center justify-center gap-3 transition-all hover:bg-emerald-600 shadow-lg hover:shadow-emerald-500/20 active:scale-95">
            Check-In starten
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-6 py-4 font-semibold text-lg text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center gap-2">
            <FileDigit className="w-5 h-5 opacity-70" />
            Methodik lesen
          </button>
        </motion.div>
      </section>

      {/* ================= VERTRAUENS BADGES ================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center divide-x-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center gap-2">
              <CloudOff className="w-6 h-6 text-slate-400 mb-1" />
              <h4 className="font-semibold text-slate-900">100% Lokal</h4>
              <p className="text-xs text-slate-500">Zero Cloud Speicherung</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-amber-400 mb-1" />
              <h4 className="font-semibold text-slate-900">QuickWin Fokus</h4>
              <p className="text-xs text-slate-500">Tägliche Motivation</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Beaker className="w-6 h-6 text-slate-400 mb-1" />
              <h4 className="font-semibold text-slate-900">Psychologisch fundiert</h4>
              <p className="text-xs text-slate-500">Bewährte Journaling-Methode</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Flag className="w-6 h-6 text-slate-400 mb-1" />
              <h4 className="font-semibold text-slate-900">Made in Germany</h4>
              <p className="text-xs text-slate-500">WAMOCON GmbH</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VORHER / NACHHER VERGLEICH ================= */}
      <section className="py-24 bg-white border-b border-slate-200" id="problem">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">PROBLEM VS. LÖSUNG</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Vom Hamsterrad zum Rhythmus.</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500"><X className="w-5 h-5"/></div>
                <h4 className="text-xl font-bold text-slate-900">Vorher: Der reaktive Tag</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600"><X className="w-5 h-5 text-red-400 shrink-0"/> E-Mails und Fremdbestimmung diktieren den Morgen.</li>
                <li className="flex gap-3 text-slate-600"><X className="w-5 h-5 text-red-400 shrink-0"/> Gefangen im Hamsterrad ohne fühlbaren Fortschritt.</li>
                <li className="flex gap-3 text-slate-600"><X className="w-5 h-5 text-red-400 shrink-0"/> Feierabend fühlt sich unproduktiv an ("Nichts geschafft heute").</li>
                <li className="flex gap-3 text-slate-600"><X className="w-5 h-5 text-red-400 shrink-0"/> Unerledigtes kreist im Kopf und raubt nachts den Schlaf.</li>
              </ul>
            </motion.div>
            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="bg-emerald-50/50 border border-emerald-200 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Check className="w-5 h-5"/></div>
                <h4 className="text-xl font-bold text-emerald-950">Nachher: Der DailyEcho Tag</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-emerald-800"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0"/> Proaktiver Morgen durch bewusstes Setzen einer Intention.</li>
                <li className="flex gap-3 text-emerald-800"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0"/> Sichtbares Momentum und Motivation durch klar definierte QuickWins.</li>
                <li className="flex gap-3 text-emerald-800"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0"/> Tägliche Dokumentation der eigenen, echten Erfolge.</li>
                <li className="flex gap-3 text-emerald-800"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0"/> Harter mentaler Schnitt durch den abendlichen Closure-Loop.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 3-SCHRITTE SYSTEM (TAGES-RHYTHMUS) ================= */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">DER TAGES-RHYTHMUS</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Dein Framework für jeden Tag.</h3>
            <p className="text-lg text-slate-500 mt-4">Zwei kurze Checks, eine massive Wirkung auf Motivation und Feierabend.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{y:-5}} className="relative bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full border-2 border-amber-200 text-amber-500 flex items-center justify-center font-bold text-xl mx-auto mb-6"><Sunrise className="w-6 h-6" /></div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">1. Morning Check-In</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Der Tag startet bei dir. Definiere deine Tages-Intention und lege 1 bis 3 QuickWins fest, bevor du den Posteingang öffnest.</p>
            </motion.div>
            <motion.div whileHover={{y:-5}} className="relative bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full border-2 border-emerald-200 text-emerald-500 flex items-center justify-center font-bold text-xl mx-auto mb-6"><Zap className="w-6 h-6" /></div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">2. QuickWins abhaken</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Nutze kleine, machbare Aufgaben (QuickWins) tagsüber, um Momentum aufzubauen. Jeder Haken setzt Motivation frei.</p>
            </motion.div>
            <motion.div whileHover={{y:-5}} className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-full border-2 border-slate-700 bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-xl mx-auto mb-6"><Moon className="w-5 h-5"/></div>
              <h4 className="text-xl font-bold text-white mb-3">3. Closure-Loop (Abends)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Der Tag ist vorbei. Erkenne deine Erfolge an, parke verbleibende Sorgen sicher in der App und verabschiede dich komplett offline.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Z-LAYOUT MOCKUP SECTION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">METHODIK</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Die Magie der zwei Loops.</h3>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="w-full lg:w-1/2 flex justify-center">
            {/* UI Dummy */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-amber-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-semibold text-slate-400 tracking-wider">DAILYECHO UI</div>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 py-1.5 bg-emerald-100 text-emerald-700 text-center rounded-lg font-semibold text-xs border border-emerald-200">START: Morning Loop</div>
                  <div className="flex-1 py-1.5 bg-slate-100 text-slate-400 text-center rounded-lg font-semibold text-xs">END: Closure Loop</div>
                </div>
                <div className="h-16 w-full bg-slate-50 border border-slate-100 rounded-xl flex items-center px-4 font-medium text-slate-400 text-sm">
                  📌 Intention für heute...
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide px-1">Meine QuickWins</div>
                  <div className="h-12 w-full bg-emerald-50 border border-emerald-100 rounded-xl flex items-center px-4 text-emerald-700 font-medium text-sm">
                    <span className="w-4 h-4 rounded border-2 border-emerald-300 mr-3"></span> Erstes wichtiges To-Do... <span className="ml-1 w-0.5 h-4 bg-emerald-400 animate-pulse"></span>
                  </div>
                  <div className="h-12 w-full bg-white border border-slate-200 rounded-xl flex items-center px-4 text-slate-300 font-medium text-sm">
                    <span className="w-4 h-4 rounded border-2 border-slate-200 mr-3"></span> + Weiteren QuickWin hinzufügen
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <div className="px-5 py-2 bg-slate-900 text-white rounded-full text-xs font-semibold flex items-center gap-2">Tag starten <Sunrise className="w-3 h-3" /></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex gap-4">
              <div className="flex-shrink-0 mt-1"><Zap className="w-6 h-6 text-emerald-500" /></div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Die Power der QuickWins</h4>
                <p className="text-slate-600 leading-relaxed">Fortschritt erzeugt Motivation. Hol dir morgens 1-3 kleine, definierte Siege, um Momentum aufzubauen, das dich durch den ganzen Tag trägt.</p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.1}} className="flex gap-4">
              <div className="flex-shrink-0 mt-1"><Sunrise className="w-6 h-6 text-emerald-500" /></div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Der Proaktive Morgen</h4>
                <p className="text-slate-600 leading-relaxed">Hör auf, deinen Tag direkt im Posteingang im Krisenmodus zu starten. Richte deinen Kompass morgens aktiv aus, bevor die Welt dazwischenfunkt.</p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.2}} className="flex gap-4">
              <div className="flex-shrink-0 mt-1"><CheckCircle2 className="w-6 h-6 text-emerald-500" /></div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Zeigarnik-Effekt besiegen</h4>
                <p className="text-slate-600 leading-relaxed">Unerledigte Dinge blockieren deinen Feierabend. Der Closure-Loop am Abend parkt Restsorgen ein und befreit deinen Arbeitsspeicher sofort spürbar und nachweislich.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE GRID (FUNKTIONSBEREICHE) ================= */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">FUNKTIONSBEREICHE</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Alles für deinen Fokus.</h3>
            <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">Kein Feature-Bingo, sondern nur Architektur, die einen echten Nutzen hat.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            <div className="flex gap-4">
              <Smartphone className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">PWA Ready</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Installiere DailyEcho auf deinem Homescreen wie eine echte App. Keine App-Stores nötig.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Database className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Offline Datenspeicher</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Alle Einträge werden sicher in der IndexedDB deines eigenen Browsers verschlüsselt gespeichert.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Download className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">JSON-Export</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Sichere dein Journal jederzeit als Raw-Data File. Keine Lock-in Effekte, alles gehört wirklich dir.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Moon className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Dark-Mode Fokus</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Schont Abends die Augen. Der optionale Dark-Mode signalisiert biologisch die wichtige Ruhephase.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Flame className="w-8 h-8 text-slate-300 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Kein Toxic Streaking</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Einen Tag vergessen? Kein Problem. Es gibt keine aggressiven Flammen oder rote Zahlen. Null Druck.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <LogOut className="w-8 h-8 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Echter Exit</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Kein Endlos-Scrollen oder Ads nach dem Check-in. Die App verabschiedet dich aktiv in den Offline-Modus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GAMIFICATION & LEVEL SYSTEM ================= */}
      <section className="py-24 bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden" id="level-system">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold text-emerald-400 tracking-wide uppercase mb-3">Motivation pur</h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">Fortschritt, der Spaß macht.</h3>
            <p className="text-lg text-slate-400">Journaling scheitert oft an der Routine. DailyEcho verbindet Klarheit mit einem motivierenden XP- und Level-System.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: XP & Levels */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:border-orange-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">XP- & Level-System</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">Für jeden Check-In und eingelösten QuickWin sammelst du XP. Steige von Level 1 bis 10 auf.</p>
              
              <div className="mt-auto w-full pt-6 border-t border-slate-700">
                <div className="flex justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-300 gap-2 flex items-center">Lvl 4 <span className="text-slate-500">Explorer</span></span>
                  <span className="text-orange-400">840/1000 XP</span>
                </div>
                <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 w-[84%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card 2: Achievements */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">10 Sammelbare Erfolge</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">Schalte exklusive Achievements frei und dokumentiere deinen Erfolg messbar (z.B. der "7-Tage Streak").</p>
              
              <div className="mt-auto w-full pt-6 border-t border-slate-700 flex">
                 <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-sm z-30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">??</div>
                 <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-sm z-20 shadow-[0_0_15px_rgba(249,115,22,0.2)] -ml-3">?</div>
                 <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-sm z-10 opacity-40 grayscale -ml-3">??</div>
              </div>
            </div>

            {/* Card 3: Unlockables */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3">Level Unlockables</h4>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">Kleine Belohnungen für Konsistenz. Je höher dein Level, desto mehr Tools schalten sich frei.</p>
              
              <div className="mt-auto w-full pt-6 border-t border-slate-700">
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-700/30 p-2 rounded-lg border border-slate-700 shrink-0 overflow-hidden">
                  <Star className="w-4 h-4 text-emerald-500 shadow-sm shrink-0" />
                  <span className="truncate">Schaltet <span className="text-white font-medium">Dark Mode Pro</span> ab Level 5 frei</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= METRICS Sektion ================= */}

      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-8 md:pt-0">
              <div className="text-6xl font-bold text-emerald-400 mb-2">2x<span className="text-3xl ml-1 text-slate-500">3Min</span></div>
              <div className="text-lg font-medium text-slate-300">Investment pro Tag</div>
              <div className="text-sm text-slate-500">Morgens planen. Abends abschließen.</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-6xl font-bold text-emerald-400 mb-2">0<span className="text-3xl ml-1 text-slate-500">MB</span></div>
              <div className="text-lg font-medium text-slate-300">Daten in der Cloud</div>
              <div className="text-sm text-slate-500">100% deiner Privatsphäre.</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-6xl font-bold text-emerald-400 mb-2">&infin;</div>
              <div className="text-lg font-medium text-slate-300">Mehr QuickWins</div>
              <div className="text-sm text-slate-500">Jeden Tag kontrolliertes Momentum.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALTERNATIVEN (ANTI-PRICING) ================= */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">DEINE OPTIONEN</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Welcher Weg passt zu dir?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 opacity-90 shadow-sm">
              <div className="mb-6"><PenTool className="w-8 h-8 text-slate-400" /></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Notizbuch</h4>
              <div className="text-3xl font-bold text-slate-900 mb-6">Zeit<span className="text-lg font-normal text-slate-500"> / aufwendig</span></div>
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0"/> Keine Bildschirmzeit</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-400 shrink-0"/> Liegt oft im falschen Raum</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-400 shrink-0"/> Kostet oft Überwindung & 10+ Min</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 opacity-90 shadow-sm">
              <div className="mb-6"><CreditCard className="w-8 h-8 text-slate-400" /></div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Abo-Journaling</h4>
              <div className="text-3xl font-bold text-slate-900 mb-6">~49€<span className="text-lg font-normal text-slate-500"> / Jahr</span></div>
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0"/> Tolle Foto-Erinnerungen</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-400 shrink-0"/> Nutzerdaten auf US-Servern</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-400 shrink-0"/> Notifications erzeugen App-Sucht</li>
              </ul>
            </div>
            <div className="bg-slate-900 border-2 border-emerald-500 rounded-3xl p-8 transform md:-translate-y-4 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Empfohlen</div>
              <div className="mb-6"><Lock className="w-8 h-8 text-emerald-400" /></div>
              <h4 className="text-xl font-bold text-white mb-2">DailyEcho</h4>
              <div className="text-3xl font-bold text-emerald-400 mb-6">0€<span className="text-lg font-normal text-slate-400"> / lokal</span></div>
              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0"/> Daten bleiben zu 100% bei dir</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0"/> QuickWins am Morgen, Closure am Abend</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0"/> Konsequent gebaut für echten Fokus</li>
              </ul>
              <button className="w-full py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-colors">Ohne Login starten</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">WISSEN</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Häufige Fragen.</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-200">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center transition-colors">
                  <span className="font-semibold text-slate-900 pr-6">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
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

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-slate-900 text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-4">Bereit für den nächsten Schritt?</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Sichere dir echte QuickWins. <br />Jeden Tag.</h3>
          <button className="px-10 py-5 bg-emerald-500 text-white font-bold text-lg rounded-full shadow-2xl hover:scale-105 hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 mx-auto">
            Jetzt ersten Loop durchführen <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-slate-400 mt-6 text-sm">Kein Login. Keine Cloud. Kostenlos nutzbar.</p>
        </div>
      </section>

    </div>
  );
}
