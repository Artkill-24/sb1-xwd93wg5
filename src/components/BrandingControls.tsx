import React from 'react';

const BrandingControls = ({ 
  customLogo, setCustomLogo, 
  watermarkText, setWatermarkText 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-700 font-medium mb-4">Branding Personalizzato</h3>
      <div className="space-y-4">
        <div>
          <label className="text-gray-600 text-sm mb-2 block">Watermark Testo</label>
          <input
            type="text"
            value={watermarkText}
            onChange={(e) => setWatermarkText(e.target.value)}
            placeholder="Il tuo brand"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <div>
          <label className="text-gray-600 text-sm mb-2 block">Logo URL (opzionale)</label>
          <input
            type="url"
            value={customLogo}
            onChange={(e) => setCustomLogo(e.target.value)}
            placeholder="https://miosito.com/logo.png"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandingControls;
