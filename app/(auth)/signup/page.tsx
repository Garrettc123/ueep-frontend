'use client';
import { useState } from 'react';
import Link from 'next/link';

const STEPS = ['Account', 'Company', 'Plan', 'Confirm'];

const PLANS = [
  { id: 'starter', name: 'Starter', price: '$299/mo', features: ['500 customers', 'Automated billing', '5 email templates', 'Basic analytics'] },
  { id: 'pro', name: 'Professional', price: '$799/mo', features: ['2,500 customers', 'Advanced billing', 'Unlimited emails', 'Full analytics', 'SSO + RBAC'], popular: true },
  { id: 'enterprise', name: 'Enterprise', price: 'Custom', features: ['Unlimited customers', 'Dedicated infra', 'Custom SLA', 'White-label'] },
];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [plan, setPlan] = useState('pro');
  const [form, setForm] = useState({ email: '', password: '', company: '', website: '', size: '', name: '' });
  const [loading, setLoading] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      window.location.href = '/dashboard';
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-bold">G</div>
            <span className="font-semibold">Garcar Enterprise</span>
          </Link>
          <h1 className="text-2xl font-bold">Start your free trial</h1>
          <p className="text-gray-400 text-sm mt-1">14 days free. No credit card required.</p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between mb-8 px-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${ i < step ? 'bg-indigo-600 text-white' : i === step ? 'bg-indigo-600 text-white ring-4 ring-indigo-600/30' : 'bg-gray-800 text-gray-500' }`}>
                {i < step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : i + 1}
              </div>
              {i < STEPS.length - 1 && <div className={`w-16 h-0.5 ${ i < step ? 'bg-indigo-600' : 'bg-gray-800' }`} />}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

          {/* Step 1: Account */}
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-lg">Create your account</h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Full name</label>
                <input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Smith" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Work email</label>
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@company.com" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                <input type="password" value={form.password} onChange={(e) => update('password', e.target.value)} placeholder="Min 8 characters" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none" />
                {form.password.length > 0 && (
                  <div className="flex gap-1 mt-2">
                    {[1,2,3,4].map((n) => <div key={n} className={`h-1 flex-1 rounded ${ form.password.length >= n * 2 ? 'bg-indigo-500' : 'bg-gray-700' }`} />)}
                  </div>
                )}
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" required className="mt-0.5 w-4 h-4 rounded border-gray-600 bg-gray-800 text-indigo-600" />
                <label className="text-sm text-gray-400">I agree to the <a href="#" className="text-indigo-400">Terms of Service</a> and <a href="#" className="text-indigo-400">Privacy Policy</a></label>
              </div>
              <button onClick={next} disabled={!form.email || !form.password || !form.name} className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold py-2.5 rounded-xl text-sm">
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Company */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-lg">About your company</h2>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Company name</label>
                <input value={form.company} onChange={(e) => update('company', e.target.value)} placeholder="Acme Corp" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Website</label>
                <input value={form.website} onChange={(e) => update('website', e.target.value)} placeholder="https://acme.com" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Team size</label>
                <select value={form.size} onChange={(e) => update('size', e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none">
                  <option value="">Select size...</option>
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button onClick={back} className="flex-1 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold py-2.5 rounded-xl text-sm">Back</button>
                <button onClick={next} disabled={!form.company} className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold py-2.5 rounded-xl text-sm">Continue</button>
              </div>
            </div>
          )}

          {/* Step 3: Plan */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-lg">Choose your plan</h2>
              {PLANS.map((p) => (
                <div key={p.id} onClick={() => setPlan(p.id)} className={`border rounded-xl p-4 cursor-pointer transition-colors ${ plan === p.id ? 'border-indigo-500 bg-indigo-950/50' : 'border-gray-700 hover:border-gray-600' }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${ plan === p.id ? 'border-indigo-500' : 'border-gray-600' }`}>
                        {plan === p.id && <div className="w-2 h-2 rounded-full bg-indigo-500" />}
                      </div>
                      <span className="font-medium text-sm">{p.name}</span>
                      {'popular' in p && p.popular && <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">Popular</span>}
                    </div>
                    <span className="text-sm font-semibold text-indigo-300">{p.price}</span>
                  </div>
                  <ul className="space-y-1 ml-6">
                    {p.features.map((f) => <li key={f} className="text-xs text-gray-400 flex items-center gap-1"><span className="text-green-500">✓</span> {f}</li>)}
                  </ul>
                </div>
              ))}
              <div className="flex gap-3 mt-2">
                <button onClick={back} className="flex-1 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold py-2.5 rounded-xl text-sm">Back</button>
                <button onClick={next} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-xl text-sm">Continue</button>
              </div>
            </div>
          )}

          {/* Step 4: Confirm */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-semibold text-lg">Review & start trial</h2>
              <div className="bg-gray-800 rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-400">Email</span><span>{form.email}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Company</span><span>{form.company || '—'}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Plan</span><span className="capitalize">{plan}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Trial</span><span className="text-green-400">14 days free</span></div>
              </div>
              <p className="text-xs text-gray-500">No credit card required. You can add billing after your trial ends.</p>
              <div className="flex gap-3">
                <button onClick={back} className="flex-1 border border-gray-700 text-gray-300 font-semibold py-2.5 rounded-xl text-sm">Back</button>
                <button onClick={handleSubmit} disabled={loading} className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl text-sm">
                  {loading ? 'Creating account...' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <Link href="/login" className="text-indigo-400 hover:text-indigo-300">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
