import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DeliveryDetails({ item, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed right-8 top-20 w-[420px] h-[80vh] bg-white rounded-lg shadow-lg p-6 z-50"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">{item?.title}</h3>
              <div className="text-sm text-gray-500">{item?.id} • {item?.location}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="text-sm px-3 py-1 border rounded">Close</button>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-36 h-36 bg-gray-100 rounded flex items-center justify-center">📦</div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-gray-50 rounded">
                  <div className="uppercase text-xs text-gray-400">Sender</div>
                  <div className="font-medium">{item?.sender}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="uppercase text-xs text-gray-400">Receiver</div>
                  <div className="font-medium">{item?.receiver}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="uppercase text-xs text-gray-400">Weight</div>
                  <div className="font-medium">{item?.weight}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="uppercase text-xs text-gray-400">Created</div>
                  <div className="font-medium">{item?.createdAt}</div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Tracking</h4>
                <div className="mt-2 bg-gray-100 rounded p-3 text-xs text-gray-600">Estimated delivery: 3–5 days • Last checkpoint: Sorting facility</div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button className="px-4 py-2 border rounded">Print</button>
                <button className="px-4 py-2 bg-sidebar text-white rounded">Contact</button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
