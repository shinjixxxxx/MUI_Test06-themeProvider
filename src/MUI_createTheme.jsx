// theme.js
import { createTheme } from '@mui/material/styles';
import { grey, blue, teal, deepOrange } from '@mui/material/colors';

const MUI_createTheme = createTheme({
  // 8px単位のスケール。必要なら関数にもできる
  spacing: 4, // theme.spacing(1) = 32px（8×4）

  shape: {
    borderRadius: 12,
  },

  palette: {
    mode: 'light',
    primary:   { main: blue[700],  light: blue[400],  dark: blue[900],  contrastText: '#fff' },
    secondary: { main: teal[600],  light: teal[300],  dark: teal[800],  contrastText: '#fff' },
    error:     { main: deepOrange[600] },
    warning:   { main: '#ed6c02' },
    info:      { main: '#0288d1' },
    success:   { main: '#2e7d32' },

    // 背景・テキスト
    background: {
      default: grey[50],
      paper: '#fff',
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },

    // コントラスト計算の閾値・色味のトーン調整
    contrastThreshold: 3,
    tonalOffset: 0.1,

    // アプリ固有の中立色を追加（JSならそのまま使える）
    // TSなら module augmentation が必要
    neutral: {
      main: grey[600],
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Hiragino Kaku Gothic ProN',
      'Meiryo',
      'sans-serif',
    ].join(','),
    h1: { fontSize: 'clamp(2rem, 1.2rem + 2vw, 3rem)', fontWeight: 700, lineHeight: 1.15 },
    h2: { fontSize: 'clamp(1.6rem, 1.1rem + 1.2vw, 2.2rem)', fontWeight: 700, lineHeight: 1.2 },
    h3: { fontSize: '1.75rem', fontWeight: 700 },
    h4: { fontSize: '1.5rem',  fontWeight: 700 },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    h6: { fontSize: '1.1rem',  fontWeight: 600 },
    subtitle1: { fontSize: '1rem',   color: grey[700] },
    subtitle2: { fontSize: '0.9rem', color: grey[700], fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.9rem', lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0.2 },
    caption: { color: grey[600] },
  },

  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },

  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },

  transitions: {
    duration: {
      shortest: 120,
      shorter: 180,
      short: 220,
      standard: 260,
      complex: 360,
      enteringScreen: 220,
      leavingScreen: 200,
    },
  },

  shadows: [
    'none',
    '0 1px 2px rgba(0,0,0,0.06)',
    '0 2px 6px rgba(0,0,0,0.08)',
    '0 3px 10px rgba(0,0,0,0.10)',
    '0 6px 14px rgba(0,0,0,0.12)',
    '0 10px 20px rgba(0,0,0,0.14)',
    // …必要なら増やす（最大25個まで）
    ...Array(19).fill('0 12px 24px rgba(0,0,0,0.16)'),
  ],

  components: {
    // 共通でよく触るコンポーネントの既定値・上書き・派生バリアント
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': { height: '100%' },
        body: { backgroundColor: grey[50] },
        img: { maxWidth: '100%', height: 'auto', display: 'block' },
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'medium',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
        }),
        containedPrimary: {
          // 主要ボタンを少し強めに
          boxShadow: '0 6px 14px rgba(25,118,210,0.2)',
        },
      },
      variants: [
        // アプリ固有の "soft" バリアント
        {
          props: { variant: 'soft' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          }),
        },
        // 中立色のボタン
        {
          props: { color: 'neutral', variant: 'contained' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.neutral.main,
            color: theme.palette.neutral.contrastText,
          }),
        },
      ],
    },

    MuiPaper: {
      defaultProps: { elevation: 1 },
      styleOverrides: {
        rounded: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius * 1.5,
        }),
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius * 1.5,
          boxShadow: theme.shadows[3],
        }),
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },

    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: ({ theme }) => ({
          cursor: 'pointer',
          '&:active': { opacity: 0.8 },
          color: theme.palette.primary.main,
        }),
      },
    },
  },
});

export default MUI_createTheme;
