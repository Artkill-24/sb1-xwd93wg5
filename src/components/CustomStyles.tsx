import React from 'react';

const CustomStyles = () => {
  return (
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
        50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6); }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      .animate-gradient {
        background-size: 400% 400%;
        animation: gradient 4s ease infinite;
      }
      .animate-shake {
        animation: shake 1s ease-in-out infinite;
      }
      .animate-typewriter {
        overflow: hidden;
        white-space: nowrap;
        animation: typewriter 3s steps(40) infinite alternate;
      }
      .floating-emoji {
        position: absolute;
        animation: float 4s ease-in-out infinite;
        pointer-events: none;
        opacity: 0.7;
      }
      .floating-emoji:nth-child(2) { animation-delay: 0.5s; }
      .floating-emoji:nth-child(3) { animation-delay: 1s; }
      .floating-emoji:nth-child(4) { animation-delay: 1.5s; }
    `}</style>
  );
};

export default CustomStyles;
