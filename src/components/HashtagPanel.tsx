import React from 'react';
import { Hash } from 'lucide-react';

const HashtagPanel = ({ hashtags, onCopyWithHashtags, onCopyLink, linkUrl }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="flex items-center gap-2 text-gray-700 font-medium mb-3">
        <Hash size={20} />
        Hashtags Suggeriti
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {hashtags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm cursor-pointer hover:bg-purple-200 transition-colors"
            onClick={() => navigator.clipboard.writeText(tag)}
            title="Click per copiare"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-2">
        <button
          onClick={onCopyWithHashtags}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          📋 Copia Tutto (Testo + Link + Hashtags)
        </button>
        {linkUrl && (
          <button
            onClick={onCopyLink}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            🔗 Copia Solo Link
          </button>
        )}
      </div>
    </div>
  );
};

export default HashtagPanel;
