import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/logo-white-cropped.png" alt="DailyEcho Logo" width={200} height={56} className="h-10 w-auto mix-blend-multiply opacity-90" />
          </Link>
          <p className="text-slate-500 text-sm max-w-sm">
            Deine tägliche Check-in Oase. 100% Privat. Gebaut für radikalen Fokus und mentalen Feierabend.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Produkt</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><Link href="#features" className="hover:text-emerald-600 transition-colors">Features</Link></li>
            <li><Link href="/help" className="hover:text-emerald-600 transition-colors">Handbuch / Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Rechtliches</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><Link href="#" className="hover:text-emerald-600 transition-colors">Datenschutz</Link></li>
            <li><Link href="#" className="hover:text-emerald-600 transition-colors">Impressum</Link></li>
            <li><Link href="/admin" className="hover:text-emerald-600 transition-colors text-slate-400">Admin Login</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} DailyEcho. Alle Rechte vorbehalten. Lokal auf deinem Gerät.
      </div>
    </footer>
  );
}