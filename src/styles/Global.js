import { createGlobalStyle } from 'styled-components';
import Regular from '../assets/fonts/Poppins-Regular.ttf';
import PoppinsItalic from '../assets/fonts/Poppins-Italic.ttf';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';
import PoppinsBoldItalic from '../assets/fonts/Poppins-BoldItalic.ttf';
import PoppinsExtraBold from '../assets/fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraBoldItalic from '../assets/fonts/Poppins-ExtraBoldItalic.ttf';

export const GlobalStyles = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
    2. Remove default margin
  */
* {
  margin: 0;
}
/*
    3. Allow percentage-based heights in the application
  */
html,
body {
  height: 100%;
}
/*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
    6. Improve media defaults
  */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
    7. Remove built-in form typography styles
  */
input,
button,
textarea,
select {
  font: inherit;
}
/*
    8. Avoid text overflows
  */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
    9. Create a root stacking context
  */

#root,
#__next {
  isolation: isolate;
}

@font-face {
  font-family: Poppins-Regular;
  src: url(${Regular}) format('truetype');
  font-weight: normal;
  font-style: normal;
};

@font-face {
  font-family: Poppins-Italic;
  src: url(${PoppinsItalic}) format('truetype');
  font-weight: normal;
  font-style: italic;
};

@font-face {
  font-family: Poppins-Bold;
  src: url(${PoppinsBold}) format('truetype');
  font-weight: 800;
  font-style: normal;
};

@font-face {
  font-family: Poppins-BoldItalic;
  src: url(${PoppinsBoldItalic}) format('truetype');
  font-weight: 800;
  font-style: italic;
};

@font-face {
  font-family: Poppins-ExtraBold;
  src: url(${PoppinsExtraBold}) format('truetype');
  font-weight: 900;
  font-style: normal;
};

@font-face {
  font-family: Poppins-ExtraBoldItalic;
  src: url(${PoppinsExtraBoldItalic}) format('truetype');
  font-weight: 900;
  font-style: Italic;
};


body {
  background-color: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
