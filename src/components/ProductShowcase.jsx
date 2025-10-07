import { Star, Cookie } from 'lucide-react';

const products = [
  {
    id: 'classic-choco',
    name: 'Classic Chocolate Chunk',
    desc: 'Crispy edges, gooey middle, two types of Belgian chocolate.',
    price: 18,
    rating: 5,
    badge: 'Bestseller',
    color: 'from-amber-200/70 to-amber-100/60'
  },
  {
    id: 'sea-salt',
    name: 'Brown Butter + Sea Salt',
    desc: 'Nutty brown butter balanced with flaky Maldon sea salt.',
    price: 20,
    rating: 5,
    badge: 'Chef Favorite',
    color: 'from-rose-200/70 to-rose-100/60'
  },
  {
    id: 'pb-stuff',
    name: 'Peanut Butter Stuffed',
    desc: 'Soft peanut butter dough wrapped around a creamy center.',
    price: 22,
    rating: 4,
    badge: 'Limited',
    color: 'from-orange-200/70 to-orange-100/60'
  }
];

function Rating({ value }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? 'text-amber-500 fill-amber-500' : 'text-neutral-300'}`}
        />
      ))}
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Most-Loved Flavors</h2>
            <p className="mt-1 text-neutral-600">Small-batch, baked fresh every morning.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium hover:border-neutral-300">
            <Cookie className="h-4 w-4 text-amber-600" />
            View Full Menu
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-amber-100 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className={`h-40 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}> 
                <div className="h-16 w-16 rounded-full bg-amber-400 shadow-inner ring-4 ring-amber-100" />
                <span className="absolute top-3 left-3 text-[11px] px-2 py-0.5 rounded-full bg-white/80 backdrop-blur border border-amber-100 text-neutral-700">
                  {p.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-lg leading-snug">{p.name}</h3>
                  <span className="shrink-0 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-medium">
                    ${p.price}/4-pack
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <Rating value={p.rating} />
                  <button className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1.5 text-xs font-medium hover:bg-neutral-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div id="story" className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-amber-100 bg-white p-6">
            <h4 className="font-semibold">Wholesome ingredients</h4>
            <p className="mt-2 text-sm text-neutral-600">
              We use European butter, cage-free eggs, and ethically sourced chocolate. No preservatives—ever.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6">
            <h4 className="font-semibold">Perfectly timed bakes</h4>
            <p className="mt-2 text-sm text-neutral-600">
              Crisp edges and gooey centers, thanks to tested recipes and just-in-time delivery windows.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white p-6">
            <h4 className="font-semibold">Community-first bakery</h4>
            <p className="mt-2 text-sm text-neutral-600">
              1% of every order supports local food banks and youth culinary programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
