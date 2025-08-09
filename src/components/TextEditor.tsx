import React from 'react';
import { Type, Sparkles, Hash } from 'lucide-react';
import EmojiPicker from './EmojiPicker';

const TextEditor = ({ 
  text, setText, textPresets, showStats, setShowStats, stats
}) => {
  return (
    <>
      {/* Text Presets */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
          <Sparkles size={20} />
          Template Testi
        </label>
        <div className="space-y-3">
          {Object.entries(textPresets).map(([category, texts]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-gray-600 mb-2 capitalize">{category}</h4>
              <div className="grid grid-cols-1 gap-2">
                {texts.slice(0, 2).map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setText(preset)}
                    className="text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded border transition-colors"
                  >
                    {preset.slice(0, 50)}...
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Input */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
          <Type size={20} />
          Il tuo testo
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Scrivi qui il tuo messaggio, citazione, o pensiero..."
        />
        <div className="flex justify-between items-center mt-2">
          <div className="text-sm text-gray-500">
            {text.length} caratteri
          </div>
          <button
            onClick={() => setShowStats(!showStats)}
            className="text-blue-600 text-sm hover:underline"
          >
            {showStats ? 'Nascondi' : 'Mostra'} statistiche
          </button>
        </div>
      </div>

      <EmojiPicker onEmojiSelect={(emoji) => setText(prev => prev + emoji)} />

      {/* Text Stats */}
      {showStats && (
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="flex items-center gap-2 text-gray-700 font-medium mb-3">
            <Hash size={20} />
            Statistiche Testo
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">Parole</div>
              <div className="font-bold text-lg">{stats.words}</div>
            </div>
            <div>
              <div className="text-gray-600">Frasi</div>
              <div className="font-bold text-lg">{stats.sentences}</div>
            </div>
            <div>
              <div className="text-gray-600">Caratteri</div>
              <div className="font-bold text-lg">{stats.chars}</div>
            </div>
            <div>
              <div className="text-gray-600">Lettura</div>
              <div className="font-bold text-lg">{stats.readingTime}min</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextEditor;
