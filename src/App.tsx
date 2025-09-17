
import './App.css'
import { HomePage } from './feature/pages/homePage'

import { AppProvider } from './provider'


function App() {


  return (
  
  <AppProvider>
   <HomePage />
  </AppProvider>

  )
}

export default App
