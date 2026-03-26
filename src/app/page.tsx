"use client";

import { Sunrise, MoonStar, ShieldAlert, Trophy, Wind, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  // ---- Refs & Hooks for Cinematic Scroll (Day to Night) ----
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"]
  });

  // Background color maps scroll progress from White (Morning) -> Deep Slate (Night) -> White (Next Day)
  const storyBg = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.4, 0.6, 0.75, 1], 
    ["#f8fafc", "#f8fafc", "#0f172a", "#0f172a", "#f8fafc", "#f8fafc"]
  );

  // Animations Morgen-Karte
  const morningOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const morningY = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0, -100]);

  // Animations Abend-Karte
  const eveningOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8], [0, 1, 1, 0]);
  const eveningY = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8], [100, 0, 0, -100]);

  // ---- Variants for Framer Motion Reveal (Bento Grid) ----
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-emerald-500/20">
      
      {/* Atmende Background Ambient Glows (Vorschlag 2.2) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-300/40 blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-300/30 blur-[120px] pointer-events-none" 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 transform transition hover:scale-105 hover:shadow-md cursor-default"
        >
          <ShieldAlert className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-mono text-slate-600 tracking-wide uppercase font-semibold">Zero Data Mining &middot; 100% Local</span>
        </motion.div>

        {/* H1 - Massive Impact (Vorschlag 2.3: Typografie Blur-Reveal) */}
        <motion.h1 
          initial={{ filter: "blur(15px)", opacity: 0, y: 30 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] mb-8 font-sans max-w-5xl text-slate-900"
        >
          3 Minuten gegen den <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 pb-2">
            digitalen Lärm.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-slate-500 max-w-2xl font-normal leading-relaxed mb-12"
        >
          Keine Feeds. Keine toxischen Streaks. Nur Du. <br className="hidden sm:block"/>
          Deine tägliche Check-in Oase für radikalen Fokus und echten Feierabend.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="group relative px-8 py-4 bg-slate-900 text-white font-semibold text-lg rounded-full flex items-center gap-3 overflow-hidden transition-all shadow-xl hover:shadow-2xl hover:bg-slate-800 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
            <span className="relative z-10">Intentions-Loop starten</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-6 py-4 font-semibold text-lg text-slate-500 hover:text-slate-900 transition-colors">
            Produkthandbuch lesen
          </button>
        </motion.div>
      </section>

      {/* Cinematic Stop-Scroll: Der Intentions-Loop (Vorschlag 1.1) */}
      <section ref={storyRef} className="relative h-[400vh]">
        <motion.div 
          style={{ backgroundColor: storyBg }} 
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-200 border-y border-slate-200/50"
        >
          {/* Morgen State */}
          <motion.div 
            style={{ opacity: morningOpacity, y: morningY }} 
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
          >
            <Sunrise className="w-20 h-20 text-emerald-500 mb-8 drop-shadow-md" />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900">Der Fokus-Anker.</h2>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed">
              Beginne den Tag nicht iterativ. Setze deine Intention, bevor die Welt dazwischenfunkt. Drei simple Pflichtfragen richten deinen inneren Kompass aus.
            </p>
          </motion.div>

          {/* Abend State */}
          <motion.div 
            style={{ opacity: eveningOpacity, y: eveningY }} 
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
          >
            <MoonStar className="w-20 h-20 text-indigo-400 mb-8 drop-shadow-[0_0_20px_rgba(129,140,248,0.5)]" />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">Der Closure-Loop.</h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-light">
              Lass den Ballast des Tages los und archiviere den tollsten Moment, um mental wirklich Feierabend zu machen. Der Kreis schließt sich.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Modern Bento Grid (Restliche Features) mit kaskadierender Animation */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 z-10 bg-[#f8fafc]">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Ein Werkzeug, kein Spielzeug.</h2>
          <p className="text-xl text-slate-500">Ohne Ablenkung gebaut. Dafür mit echtem Impact.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]"
        >
          {/* ROW 1: Safe Space (Span 2) + Quick Wins (Span 1) */}
          
          {/* Safe Space / Interventionen MIT ART IMAGE */}
          <motion.div variants={itemVariants} className="group relative md:col-span-2 border border-slate-200 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.2)] transition-all duration-500 bg-slate-900 flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/art.jpeg" 
                alt="Safe Space Flow" 
                fill 
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-xl">
              <Wind className="w-10 h-10 text-emerald-400 mb-6 drop-shadow-md" />
              <h3 className="text-3xl font-bold mb-3 text-white drop-shadow-sm">Safe Space für dunkle Tage.</h3>
              <p className="text-slate-300 text-lg leading-relaxed drop-shadow-sm">
                Nicht jeder Tag besteht aus Peak-Performance. Mikro-Interventionen wie geführte Atemübungen und kuratierte Lo-Fi-Audio-Loops holen dich sanft ins Hier und Jetzt zurück.
              </p>
            </div>
          </motion.div>

          {/* Quick Wins Logo */}
          <motion.div variants={itemVariants} className="group relative bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] hover:border-amber-200 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <div className="relative w-28 h-28 mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
              <Image 
                src="/images/quickwin-logo.png" 
                alt="Quick Win Logo" 
                fill 
                className="object-contain drop-shadow-xl" 
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">Die Quick Wins.</h3>
            <p className="text-slate-500 text-sm px-4">
              Setze kleine, smarte Wochenziele und feiere Erfolge, ohne dich zu überlasten.
            </p>
          </motion.div>

          {/* ROW 2: Privacy (Span 1) + Gamification (Span 2) */}
          
          {/* Privacy */}
          <motion.div variants={itemVariants} className="group relative bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-emerald-100 transition-all duration-300 flex flex-col justify-center">
            <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-slate-50 rounded-full blur-[40px] -z-10 group-hover:bg-slate-100 transition-colors" />
            <ShieldAlert className="w-10 h-10 text-slate-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Dein Tresor.</h3>
            <p className="text-slate-500 text-lg">
              Alles geschieht im <span className="font-mono px-1.5 py-0.5 bg-slate-100 rounded text-emerald-600 text-sm border border-slate-200">localStorage</span>.<br/>Kein Account. Zero Tracker.
            </p>
          </motion.div>

          {/* Gamification */}
          <motion.div variants={itemVariants} className="group relative md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] hover:border-violet-200 transition-all duration-300 flex flex-col justify-center">
            <div className="absolute bottom-0 right-0 w-3/4 h-full bg-violet-50/50 blur-[60px] -z-10 group-hover:bg-violet-100/50 transition-colors" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
              <div className="max-w-md">
                <Trophy className="w-10 h-10 text-violet-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Wachstum. Ohne Druck.</h3>
                <p className="text-slate-500 text-lg">
                  Vergiss manipulative Benachrichtigungen. Du erhältst XP für ehrliche Reflexion und baust sanft Meilensteine auf. Brauchst du Pause? Erlaube einen Streak-Freeze.
                </p>
              </div>
              <div className="flex flex-row md:flex-col items-end gap-3 font-mono text-sm w-full md:w-auto">
                <div className="px-5 py-3 border border-violet-200 bg-violet-50 rounded-full text-violet-800 font-semibold shadow-sm w-full text-center">Level 3: Reflektor</div>
                <div className="px-5 py-3 border border-orange-200 bg-orange-50 rounded-full text-orange-800 font-semibold shadow-sm w-full text-center hover:bg-orange-100 transition-colors cursor-default">Streak: 12 🔥</div>
              </div>
            </div>
          </motion.div>
          
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 text-center bg-white mt-12 overflow-hidden border-t border-slate-200 items-center flex flex-col justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-400/5 blur-[120px] pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-900 relative z-10 w-full">Dein Future-Self wartet.</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 px-10 py-5 bg-emerald-500 text-white font-bold text-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,0.7)]"
        >
          Jetzt ersten Check-in starten
        </motion.button>
      </section>
    </div>
  );
}