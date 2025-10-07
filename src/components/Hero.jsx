import { Star, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-amber-100 px-3 py-1 text-xs text-neutral-700 shadow-sm">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              50k+ cookies delivered with love
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Freshly baked cookies, delivered warm to your door.
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Small-batch classics and bold seasonal flavors made with real butter, premium chocolate, and a whole lot of love.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-400">
                Shop Bestsellers
              </a>
              <a href="#story" className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium border border-neutral-200 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-300">
                Our Ingredients
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-700">
              <div className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-rose-500" />
                Same-day local delivery
              </div>
              <div className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                4.9/5 average rating
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-amber-200 via-rose-100 to-white p-3 shadow-xl border border-amber-100">
                <div className="h-full w-full rounded-2xl bg-white grid grid-cols-3 gap-2 p-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,180,120,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,140,160,0.2),transparent_55%)] border border-amber-100 flex items-center justify-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-60" />
                      <div className="h-10 w-10 rounded-full bg-amber-400 shadow-inner" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
