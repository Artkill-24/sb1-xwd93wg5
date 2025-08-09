import React from 'react';

const EmojiPicker = ({ onEmojiSelect }) => {
  const emojis = ['✨', '🚀', '💡', '🔥', '⭐', '💫', '🎯', '🌟', '💪', '🏆', '🎉', '❤️', '👑', '🌈', '⚡', '🦄'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h4 className="text-gray-700 font-medium mb-3">Emoji Rapidi</h4>
      <div className="grid grid-cols-8 gap-2">
        {emojis.map(emoji => (
          <button
            key={emoji}
            onClick={() => onEmojiSelect(emoji)}
            className="text-2xl p-2 hover:bg-gray-100 rounded transition-colors"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiPicker;