import { FunctionComponent } from 'react'

// Components
import { Header } from './components/header.component'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return <Header />
}

export default App
