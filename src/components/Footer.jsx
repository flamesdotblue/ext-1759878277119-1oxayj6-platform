export default function Footer() {
  return (
    <footer id="contact" className="border-t border-amber-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold">Crumb & Co.</h5>
            <p className="mt-2 text-sm text-neutral-600">
              Freshly baked in small batches daily. Visit our shop or order online for same-day delivery.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Visit</h5>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>123 Butter St, Sweet City</li>
              <li>Tue–Sun, 8am–6pm</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Support</h5>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>help@crumbandco.com</li>
              <li>+1 (555) 333-1222</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Newsletter</h5>
            <form className="mt-2 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button className="rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Crumb & Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
