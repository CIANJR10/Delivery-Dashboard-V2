import React, { useState } from 'react';
import MarketplaceTable from '../components/MarketplaceTable';
import DeliveryDetails from '../components/DeliveryDetails';

const MOCK_LISTINGS = [
  { id: 'AZ-1043', title: 'Electronics Box', location: 'NY', createdAt: '2025-06-12', status: 'Pending', weight: '2.4 kg', sender: 'John Doe', receiver: 'Lisa Ray' },
  { id: 'AZ-1044', title: 'Clothing Parcel', location: 'LA', createdAt: '2025-06-10', status: 'Active', weight: '1.2 kg', sender: 'Maria Lopez', receiver: 'Sam Green' },
  { id: 'AZ-1045', title: 'Office Supplies', location: 'SF', createdAt: '2025-05-30', status: 'Shipped', weight: '4.8 kg', sender: 'Acme Co', receiver: 'Beta LLC' },
  { id: 'AZ-1046', title: 'Fragile Vase', location: 'CHI', createdAt: '2025-05-28', status: 'Delivered', weight: '0.9 kg', sender: 'Anna Smith', receiver: 'Oliver K' }
];

export default function Marketplace() {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function openDetails(item) {
    setSelected(item);
    setIsOpen(true);
  }
  function closeDetails() {
    setIsOpen(false);
    setTimeout(() => setSelected(null), 300);
  }

  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <MarketplaceTable listings={MOCK_LISTINGS} onSelect={openDetails} />
        </div>
        <div className="col-span-1 hidden md:block">
          {/* small placeholder on wider screens if you want */}
          <div className="h-full" />
        </div>
      </div>

      <DeliveryDetails item={selected} isOpen={isOpen} onClose={closeDetails} />
    </div>
  );
}
