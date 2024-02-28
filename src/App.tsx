import { ThemeProvider } from 'styled-components'
import theme from './assets/styles'
import LandingPage from './pages/landing'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  )
}

export default App;
