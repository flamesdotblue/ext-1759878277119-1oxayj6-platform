import { Cookie, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-amber-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 text-white shadow">
            <Cookie className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-lg">Crumb & Co.</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#products" className="hover:text-neutral-900">Flavors</a>
          <a href="#story" className="hover:text-neutral-900">Our Story</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-400">
          <ShoppingCart className="h-4 w-4" />
          Order Now
        </button>
      </div>
    </header>
  );
}
