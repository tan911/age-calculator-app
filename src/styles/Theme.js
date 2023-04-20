const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = ['0px', '2px', '4px', '8px', '16px', '48px'];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];
const size = {
  mobileS: '20em', // 325px
  mobileM: '23.4375em', // 375px
  mobileL: '26.5625em', // 425px
  tablet: '48em', // 768px
  laptop: '64em', // 1024px
  laptopL: '90em', // 1440px
  desktop: '160em' // 2560px
}

const theme = {
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
  colors: {
    purple: '#854dff',
    red: '#ff5757',
    white: '#ffffff',
    offWhite: '#f0f0f0',
    lightGrey: '#dbdbdb',
    smokeyGrey: '#716f6f',
    offBlack: '#141414'
  },
  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  },
};

export default theme;
