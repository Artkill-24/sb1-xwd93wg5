import React from 'react';
import { Wand2, Sparkles, Eye } from 'lucide-react';

const AIAssistant = ({ aiSuggestions, onGenerateSuggestions, onApplySuggestion }) => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="flex items-center gap-2 text-purple-800 font-medium">
          <Wand2 size={20} />
          AI Assistant
        </h3>
        <button
          onClick={onGenerateSuggestions}
          className="text-purple-600 hover:text-purple-800"
        >
          <Sparkles size={16} />
        </button>
      </div>
      
      <div className="space-y-2">
        {aiSuggestions.map((suggestion, idx) => (
          <div key={idx} className="bg-white/70 p-3 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-purple-800">{suggestion.title}</h4>
                <p className="text-xs text-purple-600 mt-1">{suggestion.description}</p>
              </div>
              <button
                onClick={() => onApplySuggestion(suggestion.action)}
                className="text-purple-600 hover:text-purple-800 ml-2"
              >
                <Eye size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIAssistant;
