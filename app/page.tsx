import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">G</div>
          <span className="font-semibold text-lg">Garcar Enterprise</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors">Sign in</Link>
          <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg font-medium transition-colors">Get Started Free</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs px-3 py-1 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
          Now in Beta — Join 500+ companies automating their growth
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Scale Your Business<br />Without Scaling Operations
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Automate customer onboarding, billing, and growth with AI-powered enterprise infrastructure. Built for SaaS teams that move fast.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors w-full sm:w-auto">
            Start Free Trial
          </Link>
          <a href="#demo" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors w-full sm:w-auto">
            Watch Demo
          </a>
        </div>
        <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-500">
          <span>10K+ transactions/day</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <span>99.99% uptime</span>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <span>50+ integrations</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to grow</h2>
          <p className="text-gray-400 max-w-xl mx-auto">One platform to automate your entire customer lifecycle from signup to renewal.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '💳', title: 'Payment Processing', desc: 'Automated, reliable, PCI-compliant billing. Stripe-powered with dunning management, retries, and smart recovery.' },
            { icon: '🤖', title: 'Customer Automation', desc: 'Onboard customers in minutes with AI-driven workflows. Auto-provision accounts, send welcome sequences, and track activation.' },
            { icon: '📈', title: 'Revenue Growth', desc: 'Scale revenue predictably with cohort analytics, churn prediction, and automated upsell campaigns.' },
            { icon: '🔐', title: 'Enterprise Auth', desc: 'Auth0-powered SSO, MFA, RBAC, and audit logs. SOC2-ready from day one.' },
            { icon: '⚡', title: 'Real-Time Analytics', desc: 'Live dashboards for MRR, ARR, churn, LTV, and CAC. Know your numbers at all times.' },
            { icon: '🔗', title: '50+ Integrations', desc: 'Connect Salesforce, HubSpot, Slack, Intercom, and more. Build workflows with our REST API.' },
          ].map((f) => (
            <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800">
        <p className="text-center text-sm text-gray-500 mb-10 uppercase tracking-widest">Trusted by fast-growing companies</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: 'Cut our billing ops work by 80%. The automated dunning alone saved us $40K in recovered revenue last quarter.', name: 'Sarah Chen', role: 'VP Operations', co: 'DataStream Inc' },
            { quote: 'Went from signup to first payment in under 3 minutes. Our activation rate jumped from 34% to 71%.', name: 'Marcus Rivera', role: 'CTO', co: 'FlowLabs' },
            { quote: 'Finally a platform that gives us enterprise-grade infrastructure without the enterprise price tag.', name: 'Priya Patel', role: 'CEO', co: 'NexaScale' },
          ].map((t) => (
            <div key={t.name} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-800 flex items-center justify-center font-bold text-sm">{t.name[0]}</div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}, {t.co}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400">Start free, scale as you grow. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Starter', price: '$299', period: '/mo', features: ['Up to 500 customers', 'Automated billing', 'Email sequences (5 templates)', 'Basic analytics', 'API access', '99.9% uptime SLA'], cta: 'Start Free Trial', highlight: false },
            { name: 'Professional', price: '$799', period: '/mo', features: ['Up to 2,500 customers', 'Advanced billing + dunning', 'Email sequences (unlimited)', 'Full analytics suite', 'Priority support', 'SSO + RBAC', 'Custom integrations'], cta: 'Start Free Trial', highlight: true },
            { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited customers', 'Dedicated infrastructure', 'Custom SLA (99.99%)', 'White-label options', 'Dedicated CSM', 'SOC2 compliance', 'Custom contracts'], cta: 'Contact Sales', highlight: false },
          ].map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${ p.highlight ? 'bg-indigo-950 border-indigo-600' : 'bg-gray-900 border-gray-800' }`}>
              {p.highlight && <div className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-4">Most Popular</div>}
              <h3 className="font-bold text-xl mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-gray-400 text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${ p.highlight ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'border border-gray-600 hover:border-gray-400 text-gray-300' }`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-indigo-950 to-gray-900 border border-indigo-800 rounded-3xl p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to automate?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Join 500+ companies already running on Garcar Enterprise. Set up in minutes, see results in days.</p>
          <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-colors inline-block">
            Start Free Trial
          </Link>
          <p className="text-gray-500 text-sm mt-4">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xs">G</div>
            <span className="font-semibold">Garcar Enterprise</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Garcar Enterprise. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
