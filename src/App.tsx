import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing'
import Normalize from './styles/Normalize'
import Global from './styles/Global'
import Page from './hoc/Page/Page'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Normalize />
      <Global />
      <Page>
        <Routing />
      </Page>
    </BrowserRouter>
  )
}

export default App
