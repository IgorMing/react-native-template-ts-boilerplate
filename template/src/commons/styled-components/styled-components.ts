import * as styledComponents from 'styled-components/native';

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  styledComponents.DefaultTheme
>;

export { css, ThemeProvider };
export default styled;
