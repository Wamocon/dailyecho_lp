import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-sans font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-400 to-green-600"></div>
          DailyEcho
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-emerald-600 transition-colors">Features</Link>
          <Link href="/help" className="hover:text-emerald-600 transition-colors">Produkthandbuch</Link>
          <Link href="#privacy" className="hover:text-emerald-600 transition-colors">Datenschutz</Link>
        </nav>

        <button className="px-5 py-2 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
          Öffne App
        </button>
      </div>
    </header>
  );
}