import React, { forwardRef } from 'react';
import { cardSizes, templates, animationStyles, backgroundPatterns, shadowStyles, borderRadiusStyles } from '../data/cardData';
import CustomStyles from './CustomStyles';

const CardPreview = forwardRef(({
  text,
  selectedTemplate,
  customColor,
  fontSize,
  fontFamily,
  cardSize,
  showQR,
  animationStyle,
  linkUrl,
  linkText,
  showCTA,
  qrTarget,
  customLogo,
  watermarkText,
  backgroundPattern,
  textAlignment,
  shadowIntensity,
  borderRadius,
  gradientDirection,
  formatUrl,
  isValidUrl
}, ref) => {
  const getQrUrl = () => {
    try {
      const qrData = qrTarget === 'link' && linkUrl 
        ? linkUrl 
        : text.slice(0, 200);
      return `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrData)}`;
    } catch (e) {
      return '';
    }
  };

  const getBackgroundPattern = () => {
    const patterns = {
      dots: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
      grid: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
      diagonal: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
      waves: 'radial-gradient(ellipse at top, rgba(255,255,255,0.1), transparent 70%)',
      circuit: 'linear-gradient(90deg, rgba(255,255,255,0.1) 50%, transparent 50%), linear-gradient(rgba(255,255,255,0.1) 50%, transparent 50%)',
      hexagon: 'radial-gradient(circle, rgba(255,255,255,0.1) 25%, transparent 25%)'
    };
    
    return backgroundPattern !== 'none' ? patterns[backgroundPattern] : '';
  };

  const getCardStyle = () => {
    if (selectedTemplate === 'custom') {
      return { backgroundColor: customColor };
    }
    return {};
  };

  const getCardClasses = () => {
    const baseClasses = `relative w-full ${cardSizes[cardSize].aspect} ${cardSizes[cardSize].width} mx-auto p-8 ${borderRadiusStyles[borderRadius]} ${shadowStyles[shadowIntensity]} flex flex-col justify-${textAlignment === 'top' ? 'start' : textAlignment === 'bottom' ? 'end' : 'center'} items-center text-${textAlignment} ${fontFamily} transition-all duration-500 hover:scale-105 ${animationStyles[animationStyle].classes} overflow-hidden`;
    
    if (selectedTemplate === 'custom') {
      return `${baseClasses} text-white`;
    }
    const templateBg = templates[selectedTemplate].bg.replace('to-br', `to-${gradientDirection}`);
    return `${baseClasses} ${templateBg} ${templates[selectedTemplate].text}`;
  };

  const renderAnimatedText = (text) => {
    const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu;
    const parts = text.split(emojiRegex);
    
    return parts.map((part, index) => {
      if (emojiRegex.test(part)) {
        return (
          <span 
            key={index}
            className={`inline-block ${animationStyle === 'bounce' ? 'animate-bounce' : ''} 
                       ${animationStyle === 'shake' ? 'animate-shake' : ''}
                       ${animationStyle === 'float' ? 'animate-float' : ''}`}
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: animationStyle === 'bounce' ? '2s' : '3s'
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <CustomStyles />
      <h3 className="text-gray-700 font-medium mb-4">Anteprima Card</h3>
      
      <div 
        ref={ref}
        className={getCardClasses()}
        style={getCardStyle()}
      >
        {/* Background Pattern Overlay */}
        {backgroundPattern !== 'none' && (
          <div 
            className="absolute inset-0 opacity-30 rounded-2xl"
            style={{ backgroundImage: getBackgroundPattern(), backgroundSize: '20px 20px' }}
          ></div>
        )}

        {/* Custom Logo */}
        {customLogo && (
          <div className="absolute top-4 left-4 z-10">
            <img src={customLogo} alt="Logo" className="w-8 h-8 object-contain" />
          </div>
        )}

        {/* Floating Elements */}
        {animationStyle === 'float' && (
          <>
            <div className="floating-emoji" style={{top: '10%', left: '10%', fontSize: '24px'}}>✨</div>
            <div className="floating-emoji" style={{top: '20%', right: '15%', fontSize: '20px'}}>💫</div>
            <div className="floating-emoji" style={{bottom: '25%', left: '20%', fontSize: '18px'}}>⭐</div>
            <div className="floating-emoji" style={{bottom: '15%', right: '10%', fontSize: '22px'}}>🌟</div>
          </>
        )}

        {/* Main Text */}
        <div className={`${fontSize} font-medium leading-relaxed ${showCTA && linkUrl ? 'mb-4' : 'mb-6'} relative z-10`}>
          {renderAnimatedText(text)}
        </div>

        {/* CTA Button */}
        {showCTA && linkUrl && isValidUrl(formatUrl(linkUrl)) && (
          <div className="mb-4">
            <button 
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                ${selectedTemplate === 'custom' ? 'bg-white text-gray-800' : 
                  selectedTemplate === 'minimal' ? 'bg-blue-600 text-white' : 
                  'bg-white/90 text-gray-800'}
                shadow-lg hover:shadow-xl
                ${animationStyle === 'pulse' ? 'animate-pulse' : ''}
              `}
              onClick={() => window.open(formatUrl(linkUrl), '_blank')}
            >
              {linkText} →
            </button>
          </div>
        )}
        
        {/* QR Code */}
        {showQR && (qrTarget === 'text' ? text.length > 0 : linkUrl) && (
          <div className={`${selectedTemplate === 'custom' ? 'bg-white/20' : templates[selectedTemplate].accent} p-3 rounded-lg ${animationStyle === 'glow' ? 'animate-glow' : ''}`}>
            <img 
              src={getQrUrl()} 
              alt="QR Code"
              className="w-20 h-20 mx-auto"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="text-xs mt-2 opacity-75">
              {qrTarget === 'link' ? 'Scansiona per visitare' : 'Scansiona per condividere'}
            </div>
          </div>
        )}
        
        {/* Watermark */}
        <div className="absolute bottom-4 right-4 text-xs opacity-50 z-10">
          {watermarkText}
        </div>
      </div>
    </div>
  );
});

CardPreview.displayName = 'CardPreview';

export default CardPreview;
