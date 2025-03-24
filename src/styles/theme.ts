export const theme = {
  colors: {
    // Primary colors
    primary: {
      main: '#00A3FF', // POLARIO blue
      light: '#33B5FF',
      dark: '#0072B3',
      contrast: '#FFFFFF'
    },
    // Secondary colors
    secondary: {
      main: '#FF6B00', // POLARIO orange
      light: '#FF8A33',
      dark: '#B34A00',
      contrast: '#FFFFFF'
    },
    // Neutral colors
    neutral: {
      white: '#FFFFFF',
      black: '#000000',
      gray100: '#F5F5F5',
      gray200: '#EEEEEE',
      gray300: '#E0E0E0',
      gray400: '#BDBDBD',
      gray500: '#9E9E9E',
      gray600: '#757575',
      gray700: '#616161',
      gray800: '#424242',
      gray900: '#212121'
    },
    // Status colors
    status: {
      success: '#4CAF50',
      warning: '#FFC107',
      error: '#F44336',
      info: '#2196F3'
    },
    // Background colors
    background: {
      default: '#000000',
      paper: '#121212',
      overlay: 'rgba(0, 0, 0, 0.7)'
    }
  },
  // Typography
  typography: {
    fontFamily: {
      primary: '"Inter", sans-serif',
      secondary: '"Roboto", sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  // Breakpoints
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  // Transitions
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    timing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)'
    }
  },
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  },
  // Z-index
  zIndex: {
    base: 1,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060
  }
} as const;

// Type definitions
export type Theme = typeof theme;
export type ThemeColors = keyof typeof theme.colors;
export type ThemeColorShade = keyof typeof theme.colors.primary; 