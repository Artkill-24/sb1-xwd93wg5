export const textPresets = {
  motivational: [
    "Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill",
    "L'unico modo per fare un ottimo lavoro è amare quello che fai. - Steve Jobs",
    "La vita è quello che succede mentre sei impegnato a fare altri piani. - John Lennon",
    "Sii il cambiamento che vuoi vedere nel mondo. - Gandhi"
  ],
  business: [
    "🚀 Siamo orgogliosi di annunciare il lancio del nostro nuovo prodotto!",
    "💡 L'innovazione distingue tra un leader e un seguace. - Steve Jobs",
    "📈 Il successo nel business richiede formazione, disciplina e duro lavoro.",
    "🎯 La qualità non è un atto, ma un'abitudine. - Aristotele"
  ],
  personal: [
    "🌟 Oggi è un giorno speciale perché...",
    "💫 Gratitudine per tutti i momenti belli di oggi",
    "🌱 Piccoli passi ogni giorno portano a grandi cambiamenti",
    "☀️ Ogni tramonto porta la promessa di una nuova alba"
  ],
  celebration: [
    "🎉 Congratulazioni per questo incredibile traguardo!",
    "🥳 Festeggiamo insieme questo momento speciale!",
    "🏆 Il duro lavoro paga sempre. Ben fatto!",
    "⭐ Meriti tutto il successo che hai raggiunto!"
  ],
  cta: [
    "🚀 Scopri il nostro nuovo prodotto rivoluzionario!",
    "💡 Iscriviti alla newsletter per contenuti esclusivi",
    "🎯 Scarica la nostra app gratuita oggi stesso",
    "🔥 Offerta limitata: 50% di sconto per i primi 100!"
  ]
};

export const ctaTemplates = [
  { text: 'Visita il sito', emoji: '🌐' },
  { text: 'Scarica ora', emoji: '📱' },
  { text: 'Iscriviti gratis', emoji: '✉️' },
  { text: 'Scopri di più', emoji: '👀' },
  { text: 'Prova gratis', emoji: '🆓' },
  { text: 'Acquista ora', emoji: '🛒' },
  { text: 'Contattaci', emoji: '📞' },
  { text: 'Segui il link', emoji: '🔗' }
];

export const templates = {
  gradient: {
    name: 'Gradient Flow',
    bg: 'bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600',
    text: 'text-white',
    accent: 'bg-white/20'
  },
  dark: {
    name: 'Dark Professional',
    bg: 'bg-gray-900',
    text: 'text-white',
    accent: 'bg-gray-700'
  },
  warm: {
    name: 'Warm Sunset',
    bg: 'bg-gradient-to-br from-orange-400 via-red-500 to-pink-500',
    text: 'text-white',
    accent: 'bg-white/20'
  },
  minimal: {
    name: 'Clean Minimal',
    bg: 'bg-white border-2 border-gray-200',
    text: 'text-gray-800',
    accent: 'bg-gray-100'
  },
  neon: {
    name: 'Cyber Neon',
    bg: 'bg-black',
    text: 'text-green-400',
    accent: 'bg-green-900/30'
  },
  nature: {
    name: 'Nature Fresh',
    bg: 'bg-gradient-to-br from-green-400 via-teal-500 to-blue-500',
    text: 'text-white',
    accent: 'bg-white/20'
  },
  luxury: {
    name: 'Luxury Gold',
    bg: 'bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600',
    text: 'text-white',
    accent: 'bg-white/20'
  },
  cosmic: {
    name: 'Cosmic Space',
    bg: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
    text: 'text-white',
    accent: 'bg-white/20'
  },
  custom: {
    name: 'Custom Color',
    bg: '',
    text: 'text-white',
    accent: 'bg-white/20'
  }
};

export const cardSizes = {
  square: { name: 'Square (1:1)', aspect: 'aspect-square', width: 'max-w-md' },
  story: { name: 'Instagram Story (9:16)', aspect: 'aspect-[9/16]', width: 'max-w-sm' },
  post: { name: 'Instagram Post (4:5)', aspect: 'aspect-[4/5]', width: 'max-w-sm' },
  linkedin: { name: 'LinkedIn (1.91:1)', aspect: 'aspect-[1.91/1]', width: 'max-w-lg' },
  twitter: { name: 'Twitter (16:9)', aspect: 'aspect-video', width: 'max-w-lg' },
  presentation: { name: 'Presentation (16:10)', aspect: 'aspect-[16/10]', width: 'max-w-2xl' }
};

export const fontFamilies = {
  'font-sans': 'Sans Serif',
  'font-serif': 'Serif',
  'font-mono': 'Monospace',
  'font-bold': 'Bold Sans'
};

export const fontSizes = {
  'text-lg': 'Piccolo',
  'text-xl': 'Medio',
  'text-2xl': 'Grande',
  'text-3xl': 'Extra Large',
  'text-4xl': 'Gigante'
};

export const animationStyles = {
  none: { name: 'Nessuna', classes: '' },
  pulse: { name: 'Pulse Soft', classes: 'animate-pulse' },
  bounce: { name: 'Bounce Emoji', classes: 'animate-bounce' },
  float: { name: 'Float Magic', classes: 'animate-float' },
  glow: { name: 'Glow Effect', classes: 'animate-glow' },
  gradient: { name: 'Gradient Flow', classes: 'animate-gradient' },
  shake: { name: 'Emoji Shake', classes: 'animate-shake' },
  typewriter: { name: 'Typewriter', classes: 'animate-typewriter' }
};

export const backgroundPatterns = {
  none: 'Nessuno',
  dots: 'Puntini',
  grid: 'Griglia',
  diagonal: 'Linee Diagonali',
  circuit: 'Circuiti',
  waves: 'Onde',
  hexagon: 'Esagoni'
};

export const shadowStyles = {
  none: 'shadow-none',
  light: 'shadow-sm',
  medium: 'shadow-lg',
  heavy: 'shadow-2xl',
  colored: 'shadow-2xl shadow-purple-500/25'
};

export const borderRadiusStyles = {
  'none': 'rounded-none',
  'sm': 'rounded-sm', 
  'md': 'rounded-md',
  'lg': 'rounded-lg',
  'xl': 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  'full': 'rounded-full'
};
