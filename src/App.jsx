import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MagicShimmer from './MagicShimmer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MagicShimmer/>
    </>
  )
}

export default App
