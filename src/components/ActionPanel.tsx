import React from 'react';
import { Zap, RotateCcw, Layers } from 'lucide-react';

const ActionPanel = ({ onMagic, onGenerateVariations, onReset }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-gray-700 font-medium mb-4">Azioni Rapide</h3>
      <div className="grid gap-2">
        <button 
          onClick={onMagic}
          className="flex items-center justify-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Zap size={18} />
          Magic ✨
        </button>

        <button
          onClick={onGenerateVariations}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Layers size={18} />
          4 Variazioni
        </button>

        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default ActionPanel;