import React from "react";

const features = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" />
      </svg>
    ),
    title: "Profile pictures",
    desc: "Make your social media pop with clean, pro images."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
      </svg>
    ),
    title: "Product images",
    desc: "Boost sales with stunning, background-free product shots."
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden>
        <path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "Real estate photos",
    desc: "Showcase properties with crisp, distraction-free images."
  }
];

const testimonials = [
  {
    name: "Sarah K.",
    text: "I saved hours editing my product photos. The results are amazing!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "James L.",
    text: "Super easy to use and the background removal is flawless.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily R.",
    text: "Perfect for my LinkedIn profile. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export const Home = ({navigate}) => {
  return (
    <main id="home" className="min-h-screen relative overflow-x-hidden bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Fixed center orb (behind everything). Large, soft, low-opacity — pointer-events disabled */}
      <div
        aria-hidden="true"
        className="fixed inset-0 flex items-center justify-center pointer-events-none -z-50"
      >
        <div
          className="w-[62vw] max-w-[680px] h-[62vw] max-h-[680px] rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-25 filter blur-[90px] transform-gpu animate-[pulse_8s_ease-in-out_infinite]"
          style={{ willChange: "transform, opacity" }}
        />
      </div>

  

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Remove backgrounds in <span className="text-blue-600">seconds</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            Fast, accurate background removal built for professionals and teams. Upload an image and get a clean, transparent result you can use instantly — web, print, or product listings.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <button className="bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 duration-200 
              text-white px-6 py-3 rounded-lg font-semibold shadow"
              onClick={() => navigate('/login')}>
              Sign up free
            </button>
            <button className="border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-lg  hover:-translate-x-1 hover:-translate-y-1 duration-150 text-sm text-gray-700 dark:text-gray-200">
              Try demo upload
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">No credit card required</span>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">3s</div>
              <div className="text-sm text-gray-500">Average processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-sm text-gray-500">Accuracy (typical)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">GDPR</div>
              <div className="text-sm text-gray-500">Compliant & secure</div>
            </div>
          </div>
        </div>

        {/* Right: uploader / showcase card */}
        <div className="z-10 flex justify-center">
          <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 flex items-center justify-center h-61">
              <img
                src="https://plus.unsplash.com/premium_vector-1744104216555-5a97c3be4b60?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Uploader preview"
                className="object-cover rounded-md h-full w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Upload an image</label>
              <div className="flex gap-2">
                <input type="file" aria-label="Upload image" className="sr-only" />
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg hover:translate-y-1 duration-150">Upload</button>
                <button className="border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg">Paste URL</button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Supports PNG, JPG. We keep uploads private for 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-12 z-10">
        <h2 className="text-2xl font-semibold mb-6">Perfect for</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
        <section id="examples" className="max-w-7xl mx-auto px-6 py-12 z-10">
          <h2 className="text-2xl font-semibold mb-6">Examples of backgrounds removed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow">
          <div className="h-50 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
            <div className="z-20">
              <img
               src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="Male portrait"
               className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="mt-4 font-medium">Portrait</div>
          <div className="text-sm text-gray-500">Clean headshots for profiles and resumes.</div>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow">
          <div className="h-50 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
            <div className="z-20">
              <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Product Shoe" 
              className="h-full w-auto object-contain"
              loading="lazy"
            />
            </div>
          </div>
          <div className="mt-4 font-medium">Product</div>
          <div className="text-sm text-gray-500">E-commerce ready, transparent backgrounds.</div>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow">
          <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
           <div className="z-20">
            <img src="https://www.rawpixel.com/image/3821516/illustration-png-face-sticker-mockup#eyJrZXlzIjoibWFuIGZhY2UiLCJzb3J0ZWRLZXlzIjoiZmFjZSBtYW4ifQ==" 
              alt="Real Estate" 
              className="h-full w-auto object-contain"
              loading="lazy"
            />
           </div>
          </div>
          <div className="mt-4 font-medium">Real Estate</div>
          <div className="text-sm text-gray-500">Focus on the property — remove distracting backgrounds.</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-12 z-10">
        <h2 className="text-2xl font-semibold mb-6">What our users say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-50" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">Customer</div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">“{t.text}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12 z-10">
        <h2 className="text-2xl font-semibold mb-4">Choose a plan</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Flexible plans for individuals and teams. Upgrade any time.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow hover:-translate-y-2 duration-200 hover:outline hover:outline-indigo-400 hover:text-indigo-400">
            <div className="text-sm text-gray-500">Starter</div>
            <div className="text-3xl font-bold my-4">$0 <span className="text-base font-normal">/ month</span></div>
            <ul className="text-sm leading-snug mb-6">
              <li>• 3 images / day</li>
              <li>• Standard quality</li>
              <li>• Basic email support</li>
            </ul>
            <button className="w-full bg-gradient-to-tl from-purple-700 to-blue-600 rounded-md px-4 text-white py-2">Start free</button>
          </div>

          <div className="rounded-xl p-6 bg-gradient-to-r from-white to-blue-100 dark:from-gray-800 hover:outline hover:outline-fuchsia-700 hover:text-fuchsia-400 shadow-lg scale-100 md:scale-100 hover:-translate-y-1 duration-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700 dark:text-gray-200">Pro</div>
              <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">Popular</span>
            </div>
            <div className="text-3xl font-bold my-4">$9 <span className="text-base font-normal">/ month</span></div>
            <ul className="text-sm leading-snug mb-6">
              <li>• 15 images / day</li>
              <li>• HD quality</li>
              <li>• Priority support</li>
            </ul>
            <button className="w-full bg-gradient-to-tr from-rose-500 to-fuchsia-600  text-white rounded-md px-4 py-2">Upgrade</button>
          </div>

          <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg premium">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm text-gray-500">Enterprise</div>
                <div className="text-3xl font-bold my-2">Premium <span className="text-base font-normal">@ $200 / month</span></div>
              </div>
              <div className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">Full access</div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Tailored for businesses and teams that need scale, security, and dedicated support.
            </p>

            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>• Unlimited image processing & priority queueing</li>
              <li>• Dedicated account manager & 24/7 priority support</li>
              <li>• SSO, SCIM, SOC2 & GDPR compliant data handling</li>
              <li>• API access, SDKs, and custom integrations</li>
            </ul>

            <div className="flex gap-3">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">Contact sales</button>
              <button className="flex-1 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-md text-white">Request a demo</button>
            </div>

            <p className="mt-3 text-xs text-gray-500">Custom contracts and enterprise terms. Pricing starts at $200/month — contact us for a tailored quote.</p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center z-10">
        <h3 className="text-2xl font-bold mb-3">Ready to remove backgrounds like a pro?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center max-w-2xl">Join thousands of creators and teams who speed up image production with BGremover.</p>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow" onClick={()=> navigate('/login')}>
            Get started — it's free
          </button>
          <button className="border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-md">See demo</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 z-10">
        <span>© {new Date().getFullYear()} BGremover. All rights reserved.</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
        </div>
      </footer>
    </main>
  );
};

