import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import AllBooks from './components/all-books'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AllBooks />
    </div>
  )
}

export default App
