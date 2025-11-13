import React from 'react';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ activeNav, onChange, children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar active={activeNav} onChange={onChange} />
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
