// Configuração de cores para o Tailwind CSS
// Este arquivo define as classes de cores que podem ser usadas dinamicamente

export type AccentColor = 
  | 'purple' 
  | 'blue' 
  | 'green' 
  | 'red' 
  | 'yellow' 
  | 'orange' 
  | 'pink' 
  | 'teal' 
  | 'indigo' 
  | 'gray' 
  | 'slate' 
  | 'emerald' 
  | 'cyan' 
  | 'amber' 
  | 'lime' 
  | 'violet' 
  | 'fuchsia' 
  | 'rose' 
  | 'sky' 
  | 'zinc' 
  | 'stone' 
  | 'neutral';

export type ColorClasses = {
  bg: string;
  border: string;
  text: string;
  darkBg: string;
  darkBorder: string;
  darkText: string;
};

export type BadgeColorClasses = {
  bg: string;
  border: string;
  text: string;
  darkBg: string;
  darkBorder: string;
  darkText: string;
};

// Mapeamento de cores para classes do Tailwind (backgrounds suaves)
export const ACCENT_COLORS: Record<AccentColor, ColorClasses> = {
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    darkBg: 'dark:bg-purple-900/30',
    darkBorder: 'dark:border-purple-600',
    darkText: 'dark:text-purple-300'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    darkBg: 'dark:bg-blue-900/30',
    darkBorder: 'dark:border-blue-600',
    darkText: 'dark:text-blue-300'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    darkBg: 'dark:bg-green-900/30',
    darkBorder: 'dark:border-green-600',
    darkText: 'dark:text-green-300'
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    darkBg: 'dark:bg-red-900/30',
    darkBorder: 'dark:border-red-600',
    darkText: 'dark:text-red-300'
  },
  yellow: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-700',
    darkBg: 'dark:bg-yellow-900/30',
    darkBorder: 'dark:border-yellow-600',
    darkText: 'dark:text-yellow-300'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    darkBg: 'dark:bg-orange-900/30',
    darkBorder: 'dark:border-orange-600',
    darkText: 'dark:text-orange-300'
  },
  pink: {
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-700',
    darkBg: 'dark:bg-pink-900/30',
    darkBorder: 'dark:border-pink-600',
    darkText: 'dark:text-pink-300'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    darkBg: 'dark:bg-teal-900/30',
    darkBorder: 'dark:border-teal-600',
    darkText: 'dark:text-teal-300'
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-700',
    darkBg: 'dark:bg-indigo-900/30',
    darkBorder: 'dark:border-indigo-600',
    darkText: 'dark:text-indigo-300'
  },
  gray: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-700',
    darkBg: 'dark:bg-gray-900/30',
    darkBorder: 'dark:border-gray-600',
    darkText: 'dark:text-gray-300'
  },
  slate: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-700',
    darkBg: 'dark:bg-slate-900/30',
    darkBorder: 'dark:border-slate-600',
    darkText: 'dark:text-slate-300'
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    darkBg: 'dark:bg-emerald-900/30',
    darkBorder: 'dark:border-emerald-600',
    darkText: 'dark:text-emerald-300'
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    darkBg: 'dark:bg-cyan-900/30',
    darkBorder: 'dark:border-cyan-600',
    darkText: 'dark:text-cyan-300'
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    darkBg: 'dark:bg-amber-900/30',
    darkBorder: 'dark:border-amber-600',
    darkText: 'dark:text-amber-300'
  },
  lime: {
    bg: 'bg-lime-50',
    border: 'border-lime-200',
    text: 'text-lime-700',
    darkBg: 'dark:bg-lime-900/30',
    darkBorder: 'dark:border-lime-600',
    darkText: 'dark:text-lime-300'
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    darkBg: 'dark:bg-violet-900/30',
    darkBorder: 'dark:border-violet-600',
    darkText: 'dark:text-violet-300'
  },
  fuchsia: {
    bg: 'bg-fuchsia-50',
    border: 'border-fuchsia-200',
    text: 'text-fuchsia-700',
    darkBg: 'dark:bg-fuchsia-900/30',
    darkBorder: 'dark:border-fuchsia-600',
    darkText: 'dark:text-fuchsia-300'
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    darkBg: 'dark:bg-rose-900/30',
    darkBorder: 'dark:border-rose-600',
    darkText: 'dark:text-rose-300'
  },
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    darkBg: 'dark:bg-sky-900/30',
    darkBorder: 'dark:border-sky-600',
    darkText: 'dark:text-sky-300'
  },
  zinc: {
    bg: 'bg-zinc-50',
    border: 'border-zinc-200',
    text: 'text-zinc-700',
    darkBg: 'dark:bg-zinc-900/30',
    darkBorder: 'dark:border-zinc-600',
    darkText: 'dark:text-zinc-300'
  },
  stone: {
    bg: 'bg-stone-50',
    border: 'border-stone-200',
    text: 'text-stone-700',
    darkBg: 'dark:bg-stone-900/30',
    darkBorder: 'dark:border-stone-600',
    darkText: 'dark:text-stone-300'
  },
  neutral: {
    bg: 'bg-neutral-50',
    border: 'border-neutral-200',
    text: 'text-neutral-700',
    darkBg: 'dark:bg-neutral-900/30',
    darkBorder: 'dark:border-neutral-600',
    darkText: 'dark:text-neutral-300'
  }
};

// Mapeamento de cores para badges (mais intensas)
export const BADGE_COLORS: Record<AccentColor, BadgeColorClasses> = {
  purple: {
    bg: 'bg-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-600',
    darkBg: 'dark:bg-purple-800/30',
    darkBorder: 'dark:border-purple-700',
    darkText: 'dark:text-purple-400'
  },
  blue: {
    bg: 'bg-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-600',
    darkBg: 'dark:bg-blue-800/30',
    darkBorder: 'dark:border-blue-700',
    darkText: 'dark:text-blue-400'
  },
  green: {
    bg: 'bg-green-100',
    border: 'border-green-200',
    text: 'text-green-600',
    darkBg: 'dark:bg-green-800/30',
    darkBorder: 'dark:border-green-700',
    darkText: 'dark:text-green-400'
  },
  red: {
    bg: 'bg-red-100',
    border: 'border-red-200',
    text: 'text-red-600',
    darkBg: 'dark:bg-red-800/30',
    darkBorder: 'dark:border-red-700',
    darkText: 'dark:text-red-400'
  },
  yellow: {
    bg: 'bg-yellow-100',
    border: 'border-yellow-200',
    text: 'text-yellow-600',
    darkBg: 'dark:bg-yellow-800/30',
    darkBorder: 'dark:border-yellow-700',
    darkText: 'dark:text-yellow-400'
  },
  orange: {
    bg: 'bg-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-600',
    darkBg: 'dark:bg-orange-800/30',
    darkBorder: 'dark:border-orange-700',
    darkText: 'dark:text-orange-400'
  },
  pink: {
    bg: 'bg-pink-100',
    border: 'border-pink-200',
    text: 'text-pink-600',
    darkBg: 'dark:bg-pink-800/30',
    darkBorder: 'dark:border-pink-700',
    darkText: 'dark:text-pink-400'
  },
  teal: {
    bg: 'bg-teal-100',
    border: 'border-teal-200',
    text: 'text-teal-600',
    darkBg: 'dark:bg-teal-800/30',
    darkBorder: 'dark:border-teal-700',
    darkText: 'dark:text-teal-400'
  },
  indigo: {
    bg: 'bg-indigo-100',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    darkBg: 'dark:bg-indigo-800/30',
    darkBorder: 'dark:border-indigo-700',
    darkText: 'dark:text-indigo-400'
  },
  gray: {
    bg: 'bg-gray-100',
    border: 'border-gray-200',
    text: 'text-gray-600',
    darkBg: 'dark:bg-gray-800/30',
    darkBorder: 'dark:border-gray-700',
    darkText: 'dark:text-gray-400'
  },
  slate: {
    bg: 'bg-slate-100',
    border: 'border-slate-200',
    text: 'text-slate-600',
    darkBg: 'dark:bg-slate-800/30',
    darkBorder: 'dark:border-slate-700',
    darkText: 'dark:text-slate-400'
  },
  emerald: {
    bg: 'bg-emerald-100',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    darkBg: 'dark:bg-emerald-800/30',
    darkBorder: 'dark:border-emerald-700',
    darkText: 'dark:text-emerald-400'
  },
  cyan: {
    bg: 'bg-cyan-100',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    darkBg: 'dark:bg-cyan-800/30',
    darkBorder: 'dark:border-cyan-700',
    darkText: 'dark:text-cyan-400'
  },
  amber: {
    bg: 'bg-amber-100',
    border: 'border-amber-200',
    text: 'text-amber-600',
    darkBg: 'dark:bg-amber-800/30',
    darkBorder: 'dark:border-amber-700',
    darkText: 'dark:text-amber-400'
  },
  lime: {
    bg: 'bg-lime-100',
    border: 'border-lime-200',
    text: 'text-lime-600',
    darkBg: 'dark:bg-lime-800/30',
    darkBorder: 'dark:border-lime-700',
    darkText: 'dark:text-lime-400'
  },
  violet: {
    bg: 'bg-violet-100',
    border: 'border-violet-200',
    text: 'text-violet-600',
    darkBg: 'dark:bg-violet-800/30',
    darkBorder: 'dark:border-violet-700',
    darkText: 'dark:text-violet-400'
  },
  fuchsia: {
    bg: 'bg-fuchsia-100',
    border: 'border-fuchsia-200',
    text: 'text-fuchsia-600',
    darkBg: 'dark:bg-fuchsia-800/30',
    darkBorder: 'dark:border-fuchsia-700',
    darkText: 'dark:text-fuchsia-400'
  },
  rose: {
    bg: 'bg-rose-100',
    border: 'border-rose-200',
    text: 'text-rose-600',
    darkBg: 'dark:bg-rose-800/30',
    darkBorder: 'dark:border-rose-700',
    darkText: 'dark:text-rose-400'
  },
  sky: {
    bg: 'bg-sky-100',
    border: 'border-sky-200',
    text: 'text-sky-600',
    darkBg: 'dark:bg-sky-800/30',
    darkBorder: 'dark:border-sky-700',
    darkText: 'dark:text-sky-400'
  },
  zinc: {
    bg: 'bg-zinc-100',
    border: 'border-zinc-200',
    text: 'text-zinc-600',
    darkBg: 'dark:bg-zinc-800/30',
    darkBorder: 'dark:border-zinc-700',
    darkText: 'dark:text-zinc-400'
  },
  stone: {
    bg: 'bg-stone-100',
    border: 'border-stone-200',
    text: 'text-stone-600',
    darkBg: 'dark:bg-stone-800/30',
    darkBorder: 'dark:border-stone-700',
    darkText: 'dark:text-stone-400'
  },
  neutral: {
    bg: 'bg-neutral-100',
    border: 'border-neutral-200',
    text: 'text-neutral-600',
    darkBg: 'dark:bg-neutral-800/30',
    darkBorder: 'dark:border-neutral-700',
    darkText: 'dark:text-neutral-400'
  }
};

// Função para obter as classes de cor baseadas no accent
export function getAccentClasses(accent: AccentColor = 'gray'): ColorClasses {
  return ACCENT_COLORS[accent];
}

// Função para obter as classes de cor para badges
export function getBadgeClasses(accent: AccentColor = 'purple'): BadgeColorClasses {
  return BADGE_COLORS[accent];
}

// Função para combinar classes de forma segura
export function combineAccentClasses(accent: AccentColor = 'gray'): string {
  const classes = getAccentClasses(accent);
  return `${classes.bg} ${classes.border} ${classes.text} ${classes.darkBg} ${classes.darkBorder} ${classes.darkText}`;
}
