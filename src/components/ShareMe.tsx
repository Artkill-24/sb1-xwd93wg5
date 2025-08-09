import React, { useState, useRef } from 'react';
import { Crown } from 'lucide-react';
import CardPreview from './CardPreview';
import TextEditor from './TextEditor';
import DesignControls from './DesignControls';
import LinkEditor from './LinkEditor';
import BrandingControls from './BrandingControls';
import ActionPanel from './ActionPanel';
import HashtagPanel from './HashtagPanel';
import ExportPanel from './ExportPanel';
import AIAssistant from './AIAssistant';
import ColorPalette from './ColorPalette';
import ProTips from './ProTips';
import { useCardConfig } from '../hooks/useCardConfig';
import { useTextUtils } from '../hooks/useTextUtils';
import { useAIFeatures } from '../hooks/useAIFeatures';
import { textPresets, ctaTemplates } from '../data/cardData';

const ShareMe = () => {
  const cardRef = useRef(null);
  const {
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
  } = useCardConfig();

  const { getTextStats, generateHashtags, formatUrl, isValidUrl, getDomainFromUrl } = useTextUtils();
  const { colorPalette, generateColorPalette, aiSuggestions, generateAISuggestions, generateVariations } = useAIFeatures();

  const handleDownload = () => {
    alert('Funzionalità di download in sviluppo! Per ora puoi fare screenshot 📸');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert('Testo copiato! 📋');
  };

  const handleCopyWithHashtags = () => {
    const hashtags = generateHashtags(text).join(' ');
    const linkPart = linkUrl ? `\n\n🔗 ${formatUrl(linkUrl)}` : '';
    const fullText = `${text}${linkPart}\n\n${hashtags}`;
    navigator.clipboard.writeText(fullText);
    alert('Testo + link + hashtags copiati! 🏷️');
  };

  const handleCopyLink = () => {
    if (linkUrl) {
      navigator.clipboard.writeText(formatUrl(linkUrl));
      alert('Link copiato! 🔗');
    }
  };

  const handleMagicAnimation = () => {
    const animations = ['pulse', 'bounce', 'float', 'glow', 'gradient', 'shake', 'typewriter'];
    const random = animations[Math.floor(Math.random() * animations.length)];
    setAnimationStyle(random);
  };

  const handleReset = () => {
    setText('');
  };

  const stats = getTextStats(text);
  const hashtags = generateHashtags(text);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Crown className="text-yellow-500" size={36} />
            Share-Me Pro ✨
          </h1>
          <p className="text-gray-600">Il tool definitivo per creare card social che convertono</p>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {/* Content & AI Panel */}
          <div className="space-y-6">
            <AIAssistant 
              aiSuggestions={aiSuggestions}
              onGenerateSuggestions={generateAISuggestions}
              onApplySuggestion={(action) => action()}
            />

            <TextEditor 
              text={text}
              setText={setText}
              textPresets={textPresets}
              showStats={showStats}
              setShowStats={setShowStats}
              stats={stats}
            />
          </div>

          {/* Design Controls */}
          <div className="space-y-6">
            <ColorPalette 
              colorPalette={colorPalette}
              onGeneratePalette={generateColorPalette}
              onSelectColor={setCustomColor}
            />

            <DesignControls
              cardSize={cardSize}
              setCardSize={setCardSize}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
              customColor={customColor}
              setCustomColor={setCustomColor}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              fontSize={fontSize}
              setFontSize={setFontSize}
              animationStyle={animationStyle}
              setAnimationStyle={setAnimationStyle}
              showQR={showQR}
              setShowQR={setShowQR}
              backgroundPattern={backgroundPattern}
              setBackgroundPattern={setBackgroundPattern}
              textAlignment={textAlignment}
              setTextAlignment={setTextAlignment}
              shadowIntensity={shadowIntensity}
              setShadowIntensity={setShadowIntensity}
              borderRadius={borderRadius}
              setBorderRadius={setBorderRadius}
              gradientDirection={gradientDirection}
              setGradientDirection={setGradientDirection}
            />
          </div>

          {/* Link & Branding Controls */}
          <div className="space-y-6">
            <LinkEditor 
              linkUrl={linkUrl}
              setLinkUrl={setLinkUrl}
              linkText={linkText}
              setLinkText={setLinkText}
              showCTA={showCTA}
              setShowCTA={setShowCTA}
              qrTarget={qrTarget}
              setQrTarget={setQrTarget}
              ctaTemplates={ctaTemplates}
              formatUrl={formatUrl}
              isValidUrl={isValidUrl}
              getDomainFromUrl={getDomainFromUrl}
            />

            <BrandingControls
              customLogo={customLogo}
              setCustomLogo={setCustomLogo}
              watermarkText={watermarkText}
              setWatermarkText={setWatermarkText}
            />

            <ActionPanel
              onMagic={handleMagicAnimation}
              onGenerateVariations={() => generateVariations(selectedTemplate, cardSize, animationStyle)}
              onReset={handleReset}
            />
          </div>

          {/* Preview & Export */}
          <div className="space-y-6">
            <CardPreview
              ref={cardRef}
              text={text}
              selectedTemplate={selectedTemplate}
              customColor={customColor}
              fontSize={fontSize}
              fontFamily={fontFamily}
              cardSize={cardSize}
              showQR={showQR}
              animationStyle={animationStyle}
              linkUrl={linkUrl}
              linkText={linkText}
              showCTA={showCTA}
              qrTarget={qrTarget}
              customLogo={customLogo}
              watermarkText={watermarkText}
              backgroundPattern={backgroundPattern}
              textAlignment={textAlignment}
              shadowIntensity={shadowIntensity}
              borderRadius={borderRadius}
              gradientDirection={gradientDirection}
              formatUrl={formatUrl}
              isValidUrl={isValidUrl}
            />

            <HashtagPanel
              hashtags={hashtags}
              onCopyWithHashtags={handleCopyWithHashtags}
              onCopyLink={handleCopyLink}
              linkUrl={linkUrl}
            />

            <ExportPanel
              onDownload={handleDownload}
              onCopyText={handleCopyText}
            />

            <ProTips />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareMe;
