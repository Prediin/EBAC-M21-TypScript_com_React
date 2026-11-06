import ButtonCounter from "./components/ButtonCounter"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { min-width: 100%; min-height: 100%; margin: 0; }
`;

const AppShell = styled.div`
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 1.5rem;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 15%, rgba(34, 211, 238, 0.14), transparent 28%),
    radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.2), transparent 32%),
    #080b18;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

function App() {

  return (
    <AppShell>
      <GlobalStyle />
      <ButtonCounter/>
    </AppShell>
  )
}

export default App
