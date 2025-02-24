export const THEME_COLORS = {
  light: {
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      tertiary: 'bg-gray-100',
      accent: 'bg-blue-50'
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      tertiary: 'text-gray-400',
      accent: 'text-blue-600',
      inverse: 'text-white'
    },
    border: {
      primary: 'border-gray-200',
      secondary: 'border-gray-100',
      accent: 'border-blue-200'
    },
    shadow: 'shadow-sm',
    hover: {
      background: 'hover:bg-gray-50',
      text: 'hover:text-gray-900'
    }
  },
  dark: {
    background: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      tertiary: 'bg-gray-700',
      accent: 'bg-blue-900'
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      tertiary: 'text-gray-500',
      accent: 'text-blue-400',
      inverse: 'text-gray-900'
    },
    border: {
      primary: 'border-gray-700',
      secondary: 'border-gray-800',
      accent: 'border-blue-800'
    },
    shadow: 'shadow-lg shadow-gray-900/50',
    hover: {
      background: 'hover:bg-gray-700',
      text: 'hover:text-white'
    }
  }
} as const;

export const THEME_VARIANTS = {
  button: {
    primary: {
      light: 'bg-blue-600 hover:bg-blue-700 text-white',
      dark: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    secondary: {
      light: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
      dark: 'bg-gray-700 hover:bg-gray-600 text-gray-200'
    },
    outline: {
      light: 'border border-gray-300 hover:border-gray-400 text-gray-700',
      dark: 'border border-gray-600 hover:border-gray-500 text-gray-200'
    }
  },
  card: {
    primary: {
      light: 'bg-white border border-gray-200 shadow-sm rounded-xl',
      dark: 'bg-gray-800 border border-gray-700 shadow-md rounded-xl'
    },
    secondary: {
      light: 'bg-gray-50 border border-gray-100 rounded-xl',
      dark: 'bg-gray-900 border border-gray-800 rounded-xl'
    }
  },
  input: {
    primary: {
      light: 'bg-white border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg',
      dark: 'bg-gray-800 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 rounded-lg'
    }
  },
  table: {
    header: {
      light: 'text-left border-b border-gray-200',
      dark: 'text-left border-b border-gray-700'
    },
    row: {
      light: 'hover:bg-gray-50 transition-colors',
      dark: 'hover:bg-gray-700 transition-colors'
    }
  },
  container: {
    primary: {
      light: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      dark: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
    }
  },
  grid: {
    primary: {
      light: 'grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      dark: 'grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    }
  }
} as const; 