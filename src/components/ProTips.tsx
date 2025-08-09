import React from 'react';
import { Crown } from 'lucide-react';

const ProTips = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
      <h4 className="flex items-center gap-2 font-medium text-purple-800 mb-2">
        <Crown size={16} />
        Pro Tips Premium
      </h4>
      <ul className="text-sm text-purple-700 space-y-1">
        <li>• L'AI Assistant analizza il tuo contenuto per suggerimenti smart</li>
        <li>• Le palette AI sono generate per massimizzare l'engagement</li>
        <li>• Score engagement: 80%+ = virale potenziale</li>
        <li>• Usa "4 Variazioni" per A/B testing sui social</li>
        <li>• Pattern background + custom logo = branding professionale</li>
      </ul>
    </div>
  );
};

export default ProTips;