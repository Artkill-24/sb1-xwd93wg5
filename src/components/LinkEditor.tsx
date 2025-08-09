import React from 'react';
import { Share2 } from 'lucide-react';
import { ctaTemplates } from '../data/cardData';

const LinkEditor = ({ 
  linkUrl, setLinkUrl, linkText, setLinkText, showCTA, setShowCTA,
  qrTarget, setQrTarget, formatUrl, isValidUrl, getDomainFromUrl 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
        <Share2 size={20} />
        Link & Call-to-Action
      </label>
      
      <div className="space-y-4">
        <div>
          <label className="text-gray-600 text-sm mb-2 block">URL Destinazione</label>
          <input
            type="url"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            placeholder="https://miosito.com"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {linkUrl && !isValidUrl(formatUrl(linkUrl)) && (
            <p className="text-red-500 text-xs mt-1">URL non valido</p>
          )}
          {linkUrl && isValidUrl(formatUrl(linkUrl)) && (
            <p className="text-green-600 text-xs mt-1">✓ {getDomainFromUrl(linkUrl)}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="showCTA"
            checked={showCTA}
            onChange={(e) => setShowCTA(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="showCTA" className="text-gray-700">Mostra bottone CTA nella card</label>
        </div>

        {showCTA && (
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Testo CTA</label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {ctaTemplates.slice(0, 4).map((template, idx) => (
                <button
                  key={idx}
                  onClick={() => setLinkText(template.text)}
                  className="text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded border transition-colors"
                >
                  {template.emoji} {template.text}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Testo del bottone"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div>
          <label className="text-gray-600 text-sm mb-2 block">QR Code punta a:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="qrTarget"
                value="text"
                checked={qrTarget === 'text'}
                onChange={(e) => setQrTarget(e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm">Testo</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="qrTarget"
                value="link"
                checked={qrTarget === 'link'}
                onChange={(e) => setQrTarget(e.target.value)}
                className="text-blue-600"
                disabled={!linkUrl}
              />
              <span className="text-sm">Link</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkEditor;
