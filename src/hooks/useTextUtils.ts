export const useTextUtils = () => {
  const getTextStats = (text: string) => {
    const words = text.trim().split(/\s+/).length;
    const chars = text.length;
    const readingTime = Math.ceil(words / 200);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const engagement = Math.min(100, Math.max(20, 100 - chars / 2));
    
    return { words, chars, readingTime, sentences, engagement };
  };

  const generateHashtags = (text: string) => {
    const keywords = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .slice(0, 5);
    
    const commonHashtags = ['#motivation', '#inspiration', '#quote', '#success', '#mindset'];
    const textHashtags = keywords.map(word => `#${word}`);
    
    return [...new Set([...textHashtags, ...commonHashtags])].slice(0, 8);
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const formatUrl = (url: string) => {
    if (!url) return '';
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return 'https://' + url;
    }
    return url;
  };

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(formatUrl(url)).hostname;
      return domain.replace('www.', '');
    } catch {
      return url;
    }
  };

  return {
    getTextStats,
    generateHashtags,
    isValidUrl,
    formatUrl,
    getDomainFromUrl
  };
};