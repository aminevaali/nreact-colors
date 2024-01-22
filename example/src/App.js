import React from 'react'

import { ExampleComponent, BlueRed, OrangeBlack } from 'nreact-colors'
import { NNavigator } from 'nreact-navigator'
import eagle_icon from './eagle head logo.png'
import 'nreact-colors/dist/index.css'

const App = () => {
  // return <div>
  //   <ExampleComponent text="Create React Library Example 😄" />
  //   <p style={{color: BlueRed['accent']}}>This is test text</p>
  // </div>
  return <NNavigator 
    brandName="nreact colors"
    brandIcon = {eagle_icon}
    theme={OrangeBlack}

    menuItems={[
      {text:'test', id:1, href:'#'},
      {text:'test2', id:2, href:'#'}
    ]}
  >
    <ExampleComponent text="Create React Library Example 😄" />
  </NNavigator>
}

export default App
