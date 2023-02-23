import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// import localFont from '@next/font/local';

export const appBarHeight = '56px';
export const drawerWidth = '240px';

// export const pretendard = localFont({
//   src: [
//     {
//       path: '../../fonts/Pretendard-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../fonts/Pretendard-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../fonts/Pretendard-Bold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//   ],
// });

let theme = createTheme({
  palette: {
    primary: {
      main: '#2670ff',
      dark: '#0057ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#263238',
    },
    info: {
      main: '#0d47a1',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ea7200',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo', 'Helvetica'].join(','),
    allVariants: {
      whiteSpace: 'pre-line',
      letterSpacing: '-0.02em',
    },
    button: {
      textTransform: 'none',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
