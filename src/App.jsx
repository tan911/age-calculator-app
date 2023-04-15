import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/Global';
import theme from './styles/Theme';
import { Block } from './layout/Box';
import AgeForm from './components/AgeForm';
import AgeCalc from './components/AgeCalc';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Block>
        <AgeForm />
        <AgeCalc />
      </Block>
    </ThemeProvider>
  );
}

export default App;
