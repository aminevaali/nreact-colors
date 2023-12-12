import React from 'react'

import { ExampleComponent, BlueRed } from 'nreact-colors'
import 'nreact-colors/dist/index.css'

const App = () => {
  return <div>
    <ExampleComponent text="Create React Library Example 😄" />
    <p style={{color: BlueRed['accent']}}>This is test text</p>
  </div>
}

export default App
