import React, { useState } from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import Marketplace from './pages/Marketplace';

export default function App() {
  const [activeNav, setActiveNav] = useState('Marketplace');

  return (
    <DashboardLayout activeNav={activeNav} onChange={setActiveNav}>
      <Marketplace />
    </DashboardLayout>
  );
}
