import React from 'react';
import { Palette, Sparkles } from 'lucide-react';
import { cardSizes, templates, fontFamilies, fontSizes, animationStyles, backgroundPatterns, shadowStyles, borderRadiusStyles } from '../data/cardData';

const DesignControls = ({ 
  cardSize, setCardSize, selectedTemplate, setSelectedTemplate,
  customColor, setCustomColor, fontFamily, setFontFamily,
  fontSize, setFontSize, animationStyle, setAnimationStyle,
  showQR, setShowQR, backgroundPattern, setBackgroundPattern,
  textAlignment, setTextAlignment, shadowIntensity, setShadowIntensity,
  borderRadius, setBorderRadius, gradientDirection, setGradientDirection
}) => {
  return (
    <>
      {/* Card Format & Size */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <label className="text-gray-700 font-medium mb-3 block">Formato & Dimensioni</label>
        <div className="space-y-3">
          <select
            value={cardSize}
            onChange={(e) => setCardSize(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            {Object.entries(cardSizes).map(([key, size]) => (
              <option key={key} value={key}>{size.name}</option>
            ))}
          </select>
          
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Border Radius</label>
            <select
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {Object.entries(borderRadiusStyles).map(([key, _]) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-gray-600 text-sm mb-2 block">Intensità Ombra</label>
            <select
              value={shadowIntensity}
              onChange={(e) => setShadowIntensity(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {Object.entries(shadowStyles).map(([key, _]) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Template Selection */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
          <Palette size={20} />
          Template Avanzati
        </label>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(templates).map(([key, template]) => (
            <button
              key={key}
              onClick={() => setSelectedTemplate(key)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedTemplate === key 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div 
                className={`w-full h-6 rounded mb-2 ${key === 'custom' ? '' : template.bg}`}
                style={key === 'custom' ? {backgroundColor: customColor} : {}}
              ></div>
              <div className="text-sm font-medium">{template.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Color */}
      {selectedTemplate === 'custom' && (
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <label className="text-gray-700 font-medium mb-3 block">Personalizzazione</label>
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 text-sm mb-2 block">Colore Custom</label>
              <input
                type="color"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
            </div>
            
            <div>
              <label className="text-gray-600 text-sm mb-2 block">Pattern Background</label>
              <select
                value={backgroundPattern}
                onChange={(e) => setBackgroundPattern(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                {Object.entries(backgroundPatterns).map(([key, name]) => (
                  <option key={key} value={key}>{name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Typography & Animations */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-gray-700 font-medium mb-4">Tipografia & Effetti</h3>
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Font Family</label>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {Object.entries(fontFamilies).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="text-gray-600 text-sm mb-2 block">Dimensione</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {Object.entries(fontSizes).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-gray-600 text-sm mb-2 block">Allineamento</label>
            <div className="flex gap-2">
              {['left', 'center', 'right'].map(align => (
                <button
                  key={align}
                  onClick={() => setTextAlignment(align)}
                  className={`flex-1 p-2 rounded border ${textAlignment === align ? 'bg-purple-100 border-purple-500' : 'border-gray-300'}`}
                >
                  {align}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <Sparkles size={16} />
              Animazione
            </label>
            <select
              value={animationStyle}
              onChange={(e) => setAnimationStyle(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              {Object.entries(animationStyles).map(([key, style]) => (
                <option key={key} value={key}>{style.name}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="showQR"
              checked={showQR}
              onChange={(e) => setShowQR(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="showQR" className="text-gray-700">Mostra QR Code</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignControls;