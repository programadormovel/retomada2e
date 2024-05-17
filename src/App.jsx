import React from 'react'
import './App.css'

const Card1 = () => (
  <section>
      <header>
        AULA INICIAL DE REACTJS
      </header>
      <content>
        Vamos codar em ReactJS
      </content>
      <footer>
        @itb2024
      </footer>
    </section>
)

const App = () => (
  <div className="App">
    <Card1/>
    <Card1/>
    <Card1/>
    <Card1/>
    
  </div>
)

export default App;