import { useState } from 'react';

export const useCardConfig = () => {
  const [text, setText] = useState('Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill');
  const [selectedTemplate, setSelectedTemplate] = useState('gradient');
  const [customColor, setCustomColor] = useState('#6366f1');
  const [fontSize, setFontSize] = useState('text-xl');
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [cardSize, setCardSize] = useState('square');
  const [showQR, setShowQR] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [animationStyle, setAnimationStyle] = useState('none');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('Visita il sito');
  const [qrTarget, setQrTarget] = useState('text');
  const [showCTA, setShowCTA] = useState(false);
  
  // Premium Features
  const [customLogo, setCustomLogo] = useState('');
  const [watermarkText, setWatermarkText] = useState('Share-Me');
  const [backgroundPattern, setBackgroundPattern] = useState('none');
  const [textAlignment, setTextAlignment] = useState('center');
  const [shadowIntensity, setShadowIntensity] = useState('medium');
  const [borderRadius, setBorderRadius] = useState('2xl');
  const [gradientDirection, setGradientDirection] = useState('br');

  return {
    text, setText,
    selectedTemplate, setSelectedTemplate,
    customColor, setCustomColor,
    fontSize, setFontSize,
    fontFamily, setFontFamily,
    cardSize, setCardSize,
    showQR, setShowQR,
    showStats, setShowStats,
    animationStyle, setAnimationStyle,
    linkUrl, setLinkUrl,
    linkText, setLinkText,
    qrTarget, setQrTarget,
    showCTA, setShowCTA,
    customLogo, setCustomLogo,
    watermarkText, setWatermarkText,
    backgroundPattern, setBackgroundPattern,
    textAlignment, setTextAlignment,
    shadowIntensity, setShadowIntensity,
    borderRadius, setBorderRadius,
    gradientDirection, setGradientDirection
  };
};