'use client';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 49,
    features: ['1,000 API calls/mo', 'Basic analytics', 'Email support', '1 workspace'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 399,
    features: ['10,000 API calls/mo', 'Advanced analytics', 'Priority support', '5 workspaces', 'Custom integrations'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 999,
    features: ['Unlimited API calls', 'Full analytics suite', 'Dedicated support', 'Unlimited workspaces', 'SLA guarantee', 'Custom contracts'],
    popular: false,
  },
];

const invoices = [
  { id: 'INV-2024-005', date: '2024-05-01', amount: '$399.00', status: 'Paid' },
  { id: 'INV-2024-004', date: '2024-04-01', amount: '$399.00', status: 'Paid' },
  { id: 'INV-2024-003', date: '2024-03-01', amount: '$399.00', status: 'Paid' },
  { id: 'INV-2024-002', date: '2024-02-01', amount: '$399.00', status: 'Paid' },
  { id: 'INV-2024-001', date: '2024-01-01', amount: '$49.00', status: 'Paid' },
];

export default function BillingPage() {
  const currentPlan = 'Pro';

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
          <p className="text-gray-500 mt-1">Manage your subscription and payment methods</p>
        </div>

        {/* Current Plan Banner */}
        <div className="bg-indigo-600 text-white rounded-xl p-6 mb-8 flex items-center justify-between">
          <div>
            <p className="text-indigo-200 text-sm">Current Plan</p>
            <h2 className="text-2xl font-bold mt-1">Pro — $399/month</h2>
            <p className="text-indigo-200 text-sm mt-1">Next billing date: June 1, 2024</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors">
              Update Payment
            </button>
            <button className="border border-indigo-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
              Cancel Plan
            </button>
          </div>
        </div>

        {/* Plan Selector */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Change Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-xl border-2 p-6 relative ${
                  plan.name === currentPlan
                    ? 'border-indigo-500'
                    : 'border-gray-200 hover:border-gray-300'
                } transition-colors`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                {plan.name === currentPlan && (
                  <span className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Current
                  </span>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-3xl font-bold mt-2">${plan.price}<span className="text-base font-normal text-gray-500">/mo</span></p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                    plan.name === currentPlan
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                  disabled={plan.name === currentPlan}
                >
                  {plan.name === currentPlan ? 'Current Plan' : `Switch to ${plan.name}`}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="bg-gray-900 text-white px-3 py-1 rounded text-sm font-mono">VISA</div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-gray-400 text-sm">Expires 12/2026</p>
              </div>
            </div>
            <button className="text-sm text-indigo-500 hover:text-indigo-700">Update</button>
          </div>
        </div>

        {/* Invoice History */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Invoice History</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 uppercase tracking-wide border-b border-gray-200">
                <th className="pb-3">Invoice</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.map((inv) => (
                <tr key={inv.id}>
                  <td className="py-3 font-medium">{inv.id}</td>
                  <td className="py-3 text-gray-500">{inv.date}</td>
                  <td className="py-3 font-medium">{inv.amount}</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">{inv.status}</span>
                  </td>
                  <td className="py-3 text-right">
                    <button className="text-xs text-indigo-500 hover:text-indigo-700">↓ PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Link href="/dashboard" className="text-sm text-indigo-500 hover:text-indigo-700">← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
