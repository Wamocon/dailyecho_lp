import { Sunrise, MoonStar, ShieldAlert, Trophy, Wind, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 overflow-hidden selection:bg-emerald-500/20">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-300/30 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-300/20 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center z-10">
        
        {/* Anti-Data-Mining Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 transform transition hover:scale-105 hover:shadow-md cursor-default">
          <ShieldAlert className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-mono text-slate-600 tracking-wide uppercase font-semibold">Zero Data Mining &middot; 100% Local</span>
        </div>

        {/* H1 - Massive Impact */}
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] mb-8 font-sans max-w-5xl text-slate-900">
          3 Minuten gegen den <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600">
            digitalen Lärm.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-500 max-w-2xl font-normal leading-relaxed mb-12">
          Keine Feeds. Keine toxischen Streaks. Nur Du. <br className="hidden sm:block"/>
          Deine tägliche Check-in Oase für radikalen Fokus und echten Feierabend.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button className="group relative px-8 py-4 bg-slate-900 text-white font-semibold text-lg rounded-full flex items-center gap-3 overflow-hidden transition-all shadow-xl hover:shadow-2xl hover:bg-slate-800 active:scale-95">
            {/* Soft Hover Glow inside button */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
            <span className="relative z-10">Intentions-Loop starten</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-6 py-4 font-semibold text-lg text-slate-500 hover:text-slate-900 transition-colors">
            Produkthandbuch lesen
          </button>
        </div>
      </section>

      {/* Bento Grid Features - Asymmetric Layout (3x3 Flow) */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Der Autopilot war gestern.</h2>
          <p className="text-xl text-slate-500">Gebaut nach kognitionspsychologischen Prinzipien.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* ROW 1 --------- */}
          {/* Card 1: Morgen (Spannt über 2 Spalten) */}
          <div className="group relative md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-emerald-200 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-[60px] -z-10 group-hover:bg-emerald-200/50 transition-colors" />
            <Sunrise className="w-10 h-10 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Der Fokus-Anker.</h3>
            <p className="text-slate-500 text-lg max-w-md line-clamp-3 md:line-clamp-none">
              Setze deine Intention, bevor die Welt dazwischenfunkt. Drei simple Pflichtfragen richten deinen inneren Kompass für den Tag aus.
            </p>
            {/* Fake UI Element */}
            <div className="absolute bottom-[-20px] right-8 w-64 h-32 bg-[#f8fafc] border border-slate-200 rounded-t-xl p-4 shadow-xl skew-y-3 group-hover:skew-y-0 transition-transform duration-500">
              <div className="w-1/2 h-3 bg-slate-200 rounded-full mb-3"></div>
              <div className="w-3/4 h-3 bg-emerald-400 rounded-full mb-3 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
              <div className="w-2/3 h-3 bg-slate-200 rounded-full"></div>
            </div>
          </div>

          {/* Card 2: Abend (1 Spalte) */}
          <div className="group relative bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-indigo-200 transition-all duration-300">
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-[60px] -z-10 group-hover:bg-indigo-200/50 transition-colors" />
            <MoonStar className="w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Der Closure-Loop.</h3>
            <p className="text-slate-500 text-lg">
              Lass den Ballast des Tages los und archiviere den schönsten Moment, um mental wirklich Feierabend zu machen.
            </p>
          </div>

          {/* ROW 2 --------- */}
          {/* Card 3: Quick Wins Logo (1 Spalte) */}
          <div className="group relative bg-gradient-to-b from-amber-50/50 to-white border border-amber-100/60 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-amber-300 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <div className="relative w-24 h-24 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Image 
                src="/images/quickwin-logo.png" 
                alt="Quick Win Logo" 
                fill 
                className="object-contain drop-shadow-xl" 
                priority
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Quick Wins.</h3>
            <p className="text-slate-500 text-sm">
              Smarte Wochenziele. Feiere kleine Errungenschaften. Verfolge deinen Rhythmus.
            </p>
          </div>

          {/* Card 4: Gamification (Spannt über 2 Spalten) */}
          <div className="group relative md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-violet-200 transition-all duration-300 flex flex-col justify-end">
            <div className="absolute bottom-0 right-0 w-full h-full bg-violet-100/30 blur-[60px] -z-10 group-hover:bg-violet-100/50 transition-colors" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
              <div className="max-w-md">
                <Trophy className="w-10 h-10 text-violet-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Wachstum. Ohne Druck.</h3>
                <p className="text-slate-500 text-lg">
                  Vergiss aggressive Notifications. Du erhältst XP für ehrliche Reflexion und baust sanft Meilensteine auf. Brauchst du Pause? Nutze eine der Streak-Freezes.
                </p>
              </div>
              <div className="flex flex-row md:flex-col items-end gap-3 font-mono text-sm w-full md:w-auto">
                <div className="px-4 py-2 border border-violet-200 bg-violet-50 rounded-full text-violet-700 shadow-sm w-full text-center">Level 3: Reflektor</div>
                <div className="px-4 py-2 border border-orange-200 bg-orange-50 rounded-full text-orange-700 shadow-sm w-full text-center">Streak: 12 🔥</div>
              </div>
            </div>
          </div>

          {/* ROW 3 --------- */}
          {/* Card 5: Safe Space / Interventionen MIT ART IMAGE (Spannt über 2 Spalten) */}
          <div className="group relative md:col-span-2 border border-slate-200 rounded-3xl p-8 md:p-10 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.2)] transition-all duration-500 bg-slate-900">
            {/* Image Background mit Overlay Fade */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/art.jpeg" 
                alt="Safe Space Flow" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 mix-blend-screen"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-md">
              <Wind className="w-10 h-10 text-emerald-400 mb-6 drop-shadow-md" />
              <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-sm">Safe Space für dunkle Tage.</h3>
              <p className="text-slate-200 text-lg leading-relaxed drop-shadow-sm">
                Nicht jeder Tag besteht aus Peak-Performance. Mikro-Interventionen wie geführte Atemübungen und kuratierte Lo-Fi-Audio-Loops holen dich sanft ins Hier und Jetzt zurück.
              </p>
            </div>
          </div>

          {/* Card 6: Privacy (1 Spalte) */}
          <div className="group relative bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-slate-100 rounded-full blur-[40px] -z-10 group-hover:bg-slate-200 transition-colors" />
            <ShieldAlert className="w-10 h-10 text-slate-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Dein Tresor.</h3>
            <p className="text-slate-500 text-lg">
              Alles geschieht im <span className="font-mono px-1 py-0.5 bg-slate-100 rounded text-emerald-600 text-sm">localStorage</span>. Keine Accounts. Niemand liest mit.
            </p>
          </div>
          
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 text-center border-t border-slate-200 bg-white mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-400/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900">Dein Future-Self wartet.</h2>
          <button className="px-10 py-5 bg-emerald-500 text-white font-bold text-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.8)] hover:bg-emerald-400 transform hover:-translate-y-1 transition-all duration-300">
            Jetzt ersten Check-in starten
          </button>
        </div>
      </section>
    </div>
  );
}