import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root { font-family: 'Segoe UI', Arial, sans-serif; color: #17324d; background: #f4f7f6; font-synthesis: none; text-rendering: optimizeLegibility; }
  * { box-sizing: border-box; }
  body { margin: 0; min-width: 320px; min-height: 100vh; }
  button, input, select { font: inherit; }
`;
export default GlobalStyles;
