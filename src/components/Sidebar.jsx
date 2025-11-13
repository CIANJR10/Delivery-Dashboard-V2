import React, { useState } from 'react';

const MENU = [
  { label: 'Dashboard', icon: '📊' },
  { label: 'Users', icon: '👤', badge: 5 },
  { label: 'All Listings', icon: '📦', badge: 3, submenu: [
      { label: 'Delivery Jobs', badge: 5 },
      { label: 'Delivery Offers' },
      { label: 'Marketplace', badge: 2 },
    ] },
  { label: 'Flex Reward', icon: '💰' },
  { label: 'Disputes', icon: '💬' },
  { label: 'Transactions', icon: '🧾' },
  { label: 'User Support Ticket', icon: '🛡️' },
  { label: 'Settings', icon: '⚙️' },
  { label: 'Blog & Broadcast', icon: '📰' },
  { label: 'Templates', icon: '🧾' },
  { label: 'Audit Logs', icon: '🔒' },
];

function Chevron({ dir = 'down' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={dir === 'down' ? 'M6 9l6 6 6-6' : 'M9 6l6 6-6 6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Sidebar({ active, onChange }) {
  const [open, setOpen] = useState('All Listings');

  const toggle = (label) => setOpen(open === label ? '' : label);

  return (
    <aside className="w-72 bg-sidebar text-[#C6C8E2] min-h-screen p-5 flex flex-col rounded-r-3xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-white text-xl font-bold">
          <span className="text-[#1E40AF] bg-white rounded px-1 font-extrabold">FL</span>
          <span>EXDelivery</span>
          <span className="text-brandAccent text-sm ml-1">24</span>
        </div>
        <button className="bg-white p-1.5 rounded-md shadow text-sidebar">↩</button>
      </div>

      <nav className="flex-1 space-y-2">
        {MENU.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => (item.submenu ? toggle(item.label) : onChange(item.label))}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition ${active === item.label ? 'bg-white/10 text-white' : 'bg-sidebarLight hover:bg-[#1A47B0]'}`}
            >
              <div className="flex items-center gap-3 text-sm">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && <span className="bg-[#FF8A00] text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>}
                {item.submenu && <Chevron dir={open === item.label ? 'down' : 'right'} />}
              </div>
            </button>

            {item.submenu && open === item.label && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu.map((sub) => (
                  <button key={sub.label} onClick={() => onChange(sub.label)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-sidebarLight hover:bg-[#1A47B0] text-sm">
                    <span>{sub.label}</span>
                    {sub.badge && <span className="bg-[#FF8A00] text-white text-xs font-bold px-2 py-0.5 rounded-full">{sub.badge}</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
