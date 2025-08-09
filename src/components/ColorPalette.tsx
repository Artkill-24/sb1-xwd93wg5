import React from 'react';
import { Palette } from 'lucide-react';

const ColorPalette = ({ colorPalette, onGeneratePalette, onSelectColor }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-700 font-medium">Palette Colori AI</h3>
        <button
          onClick={onGeneratePalette}
          className="text-purple-600 hover:text-purple-800"
        >
          <Palette size={16} />
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        {colorPalette.map((color, idx) => (
          <button
            key={idx}
            onClick={() => onSelectColor(color)}
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;