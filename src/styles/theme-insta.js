const colors = {
  primary: 'rgb(56, 151, 240)',
  lightprimary: 'rgb(105, 176, 242)',
  lightgrey: 'rgb(185, 185, 185)',
  borderGrey: '#e6e6e6',
  backgroundGrey: '#fafafa',
  contentGrey: '#9a9a9a',
  backgroundLight: '#fff',
  backgroundLight2: 'rgb(240, 240, 240)',
  green: 'rgb(100,168,24)',
  borderGreen: 'rgb(107,179,138)',
  error: 'rgb(185,55,39)',
  dark: 'rgb(75, 75, 75);',
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
