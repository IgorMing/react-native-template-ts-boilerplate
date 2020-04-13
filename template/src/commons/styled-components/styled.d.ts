import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    statusBar?: {
      background?: string;
      content?: 'default' | 'light-content' | 'dark-content';
    };
    measures: {
      horizontalDistance: string;
    };
    colors: {
      background: string;
      primary: string;
      light: string;
      secondary: string;
      text: string;
      lightText: string;
    };
  }
}
