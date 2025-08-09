import React from 'react';
import { Download, Copy, Share2 } from 'lucide-react';

const ExportPanel = ({ onDownload, onCopyText }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-700 font-medium mb-4">Export & Condivisione</h3>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onDownload}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={18} />
          PNG HD
        </button>
        
        <button
          onClick={onCopyText}
          className="flex items-center justify-center gap-2 bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Copy size={18} />
          Copia Testo
        </button>
        
        <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors col-span-2">
          <Share2 size={18} />
          Condividi Direttamente
        </button>
      </div>
    </div>
  );
};

export default ExportPanel;
