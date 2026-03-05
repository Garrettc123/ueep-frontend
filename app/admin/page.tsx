'use client';
import Link from 'next/link';

const mockStats = {
  mrr: 24800,
  arr: 297600,
  totalCustomers: 142,
  activeCustomers: 128,
  churnRate: 2.1,
  avgRevenue: 174,
};

const mockCustomers = [
  { id: 'cust_001', name: 'Acme Corp', email: 'admin@acme.com', plan: 'Enterprise', status: 'Active', mrr: 999, joined: '2024-01-15', usage: 94 },
  { id: 'cust_002', name: 'TechStart Inc', email: 'cto@techstart.io', plan: 'Pro', status: 'Active', mrr: 399, joined: '2024-02-20', usage: 67 },
  { id: 'cust_003', name: 'DataFlow LLC', email: 'ops@dataflow.com', plan: 'Pro', status: 'Active', mrr: 399, joined: '2024-03-01', usage: 82 },
  { id: 'cust_004', name: 'CloudBase', email: 'dev@cloudbase.dev', plan: 'Starter', status: 'Trial', mrr: 0, joined: '2024-05-10', usage: 23 },
  { id: 'cust_005', name: 'NeuralNet Co', email: 'ml@neuralnet.ai', plan: 'Enterprise', status: 'Active', mrr: 999, joined: '2024-01-28', usage: 99 },
];

const revenueByPlan = [
  { plan: 'Enterprise', customers: 12, mrr: 11988, percent: 48 },
  { plan: 'Pro', customers: 87, mrr: 10713, percent: 43 },
  { plan: 'Starter', customers: 43, mrr: 2150, percent: 9 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Garcar Enterprise — Internal Overview</p>
          </div>
          <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">Admin Only</span>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: 'MRR', value: `$${mockStats.mrr.toLocaleString()}`, color: 'text-green-600' },
            { label: 'ARR', value: `$${mockStats.arr.toLocaleString()}`, color: 'text-green-600' },
            { label: 'Total Customers', value: mockStats.totalCustomers, color: 'text-blue-600' },
            { label: 'Active', value: mockStats.activeCustomers, color: 'text-blue-600' },
            { label: 'Churn Rate', value: `${mockStats.churnRate}%`, color: 'text-red-500' },
            { label: 'Avg Revenue', value: `$${mockStats.avgRevenue}`, color: 'text-purple-600' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue by Plan */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Revenue by Plan</h2>
            {revenueByPlan.map((row) => (
              <div key={row.plan} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{row.plan}</span>
                  <span className="text-gray-500">{row.customers} customers · ${row.mrr.toLocaleString()}/mo</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${row.percent}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Growth Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'New Customers (30d)', value: '+14', trend: 'up' },
                { label: 'Churned (30d)', value: '-3', trend: 'down' },
                { label: 'Net Revenue Growth', value: '+8.2%', trend: 'up' },
                { label: 'Avg Session Duration', value: '4m 32s', trend: 'neutral' },
                { label: 'API Calls (30d)', value: '1.2M', trend: 'up' },
                { label: 'Uptime', value: '99.98%', trend: 'up' },
              ].map((m) => (
                <div key={m.label} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">{m.label}</p>
                  <p className={`text-lg font-bold mt-1 ${
                    m.trend === 'up' ? 'text-green-600' : m.trend === 'down' ? 'text-red-500' : 'text-gray-700'
                  }`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Customer Overview</h2>
            <div className="flex gap-2">
              <input type="text" placeholder="Search customers..." className="border border-gray-300 rounded-lg px-3 py-1 text-sm" />
              <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                <option>All Plans</option>
                <option>Enterprise</option>
                <option>Pro</option>
                <option>Starter</option>
              </select>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500 uppercase tracking-wide border-b border-gray-200">
                <th className="pb-3">Customer</th>
                <th className="pb-3">Plan</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">MRR</th>
                <th className="pb-3">Usage</th>
                <th className="pb-3">Joined</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockCustomers.map((c) => (
                <tr key={c.id}>
                  <td className="py-3">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-gray-400 text-xs">{c.email}</p>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      c.plan === 'Enterprise' ? 'bg-purple-100 text-purple-700' :
                      c.plan === 'Pro' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                    }`}>{c.plan}</span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>{c.status}</span>
                  </td>
                  <td className="py-3 font-medium">${c.mrr}/mo</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-1.5">
                        <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${c.usage}%` }} />
                      </div>
                      <span className="text-xs text-gray-500">{c.usage}%</span>
                    </div>
                  </td>
                  <td className="py-3 text-gray-400">{c.joined}</td>
                  <td className="py-3">
                    <button className="text-xs text-indigo-500 hover:text-indigo-700">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex gap-3">
          <Link href="/dashboard" className="text-sm text-indigo-500 hover:text-indigo-700">← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
