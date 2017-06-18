export const colors = {
  primary: '#3897f0',
  lightprimary: '#69b0f2',
  lightgrey: '#b9b9b9',
  borderGrey: '#e6e6e6',
  backgroundGrey: '#fafafa',
  contentGrey: '#9a9a9a',
  backgroundLight: '#fff',
  backgroundLight2: '#f0f0f0',
  green: '#64a818',
  borderGreen: '#6bb38a',
  error: '#b93727',
  dark: '#4b4b4b;',
};

const indicator = {
  success: {
    bgc: 'rgb(90, 222, 119)',
    bxs: 'rgb(192, 249, 178)',
  },
  failed: {
    bgc: 'rgb(244, 73, 73)',
    bxs: 'rgb(245, 166, 166)',
  },
  unknown: {
    bgc: 'rgb(187, 187, 187)',
    bxs: 'rgb(209, 209, 209)',
  },
};

export const breakpoints = {
  handheld: 420,
  tablet: 640,
};

const theme = {
  colors,
  indicator,
};

export default theme;
